# CI/CD Setup Guide

## 🎯 Overview

This project uses **GitHub Actions** for Continuous Integration and Continuous Deployment (CI/CD). 

**Key Feature**: Production deployments **ONLY** occur when code is pushed to the `prod` branch.

## 🐳 Docker Deployment (Recommended)

**This project now uses Docker for deployment!** This provides better consistency, easier rollbacks, and simplified dependency management.

👉 **See [deployment/README-DOCKER.md](./deployment/README-DOCKER.md) for Docker deployment setup instructions.**

The following sections describe the legacy file-transfer deployment method. For new setups, use Docker.

## 📋 Quick Setup Checklist

### 1. Environment Variables

For local development, copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
# Edit .env.local with your local configuration
```

### 2. GitHub Secrets Configuration

Go to your repository: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `OCI_HOST` | OCI compute instance IP or hostname | `123.456.789.0` or `app.yourdomain.com` |
| `OCI_USERNAME` | SSH username (usually `opc` for Oracle Linux) | `opc` |
| `OCI_SSH_KEY` | Private SSH key (full content including `-----BEGIN` and `-----END`) | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `OCI_SSH_PORT` | SSH port (optional, defaults to 22) | `22` |
| `NEXT_PUBLIC_SITE_URL` | Your production domain URL | `https://yourdomain.com` |

### 3. Generate SSH Key (if needed)

```bash
# Generate SSH key pair
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions

# Copy public key to OCI instance
cat ~/.ssh/github_actions.pub | ssh opc@<OCI_HOST> "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# Copy private key content to GitHub Secret
cat ~/.ssh/github_actions
# Copy the entire output (including BEGIN/END lines) to GitHub Secret: OCI_SSH_KEY
```

### 4. OCI Instance Setup

#### Install Node.js
```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs
```

#### Create App Directory
```bash
sudo mkdir -p /opt/portfolio-app
sudo chown opc:opc /opt/portfolio-app
```

#### Setup Systemd Service
```bash
# Copy service file
sudo cp deployment/systemd/portfolio-app.service /etc/systemd/system/

# Enable and start
sudo systemctl daemon-reload
sudo systemctl enable portfolio-app
sudo systemctl start portfolio-app
```

#### Setup Nginx (Optional but Recommended)
```bash
sudo dnf install -y nginx
sudo cp deployment/nginx/portfolio.conf /etc/nginx/conf.d/
# Edit the file to update your domain
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 5. Branch Protection (Recommended)

1. Go to **Settings** → **Branches**
2. Add rule for `prod` branch:
   - ✅ Require pull request before merging
   - ✅ Require approvals (at least 1)
   - ✅ Require status checks to pass
   - ✅ Do not allow force pushes

## 🚀 Deployment Workflow

### Automatic Deployment Process

1. **Push to `prod` branch**:
   ```bash
   git checkout prod
   git merge main  # or your feature branch
   git push origin prod
   ```

2. **GitHub Actions automatically**:
   - ✅ Checks out code
   - ✅ Installs dependencies
   - ✅ Runs linter
   - ✅ Builds Next.js app
   - ✅ Creates deployment package
   - ✅ Transfers to OCI instance via SSH
   - ✅ Extracts and sets up application
   - ✅ Installs production dependencies
   - ✅ Restarts systemd service
   - ✅ Runs health check
   - ✅ Reports deployment status

### CI Pipeline (Non-Production)

For `main`, `develop`, and `feature/**` branches:
- ✅ Builds application
- ✅ Runs linter
- ✅ Type checks
- ❌ **Does NOT deploy** (testing only)

## 📊 Monitoring

### View Deployment Status
- Go to **Actions** tab in GitHub
- Click on the latest workflow run
- View logs for each step

### Check Application on OCI
```bash
# SSH into instance
ssh opc@<OCI_HOST>

# Check service status
sudo systemctl status portfolio-app

# View logs
sudo journalctl -u portfolio-app -f

# Check if app is running
curl http://localhost:3000
```

## 🔧 Troubleshooting

### Deployment Fails
1. Check GitHub Actions logs
2. Verify SSH connection works:
   ```bash
   ssh -i ~/.ssh/github_actions opc@<OCI_HOST>
   ```
3. Check disk space on OCI:
   ```bash
   df -h
   ```

### Application Not Starting
1. Check service status:
   ```bash
   sudo systemctl status portfolio-app
   ```
2. Check logs:
   ```bash
   sudo journalctl -u portfolio-app -n 50
   ```
3. Verify Node.js version:
   ```bash
   node --version  # Should be 20.x
   ```

### Health Check Fails
1. Verify app is listening:
   ```bash
   netstat -tlnp | grep 3000
   ```
2. Check firewall:
   ```bash
   sudo firewall-cmd --list-all
   ```

## 🔄 Rollback

If deployment fails, rollback from backup:

```bash
ssh opc@<OCI_HOST>
cd /opt/portfolio-app
ls -la /opt/portfolio-app.backup.*  # Find latest backup
sudo cp -r /opt/portfolio-app.backup.<timestamp>/* /opt/portfolio-app/
sudo systemctl restart portfolio-app
```

## 📝 Important Notes

- ⚠️ **Only `prod` branch triggers production deployment**
- ✅ Always test in `main`/`develop` first
- ✅ Use pull requests for code review
- ✅ Monitor deployment status
- ✅ Keep backups of working deployments

## 🎉 You're All Set!

Once configured, simply push to `prod` branch and deployment happens automatically!


# 🐳 Docker Deployment Quick Start

## Why Docker?

✅ **Better Approach** than file transfer:
- Consistent environment (works locally = works in production)
- Smaller transfers (optimized Docker images vs entire codebase)
- Easy rollbacks (just pull previous image tag)
- No Node.js version conflicts
- Industry standard
- Easier to scale later

## Quick Setup (5 Steps)

### 1. Create Docker Hub Account
- Sign up at [hub.docker.com](https://hub.docker.com) (free)
- Create public repository: `portfolio-app`

### 2. Add GitHub Secrets
Go to: **Settings** → **Secrets and variables** → **Actions**

Add these secrets:
- `DOCKER_USERNAME` - Your Docker Hub username
- `DOCKER_PASSWORD` - Docker Hub password or access token
- `OCI_HOST` - OCI VM IP address
- `OCI_USERNAME` - SSH username (usually `opc`)
- `OCI_SSH_KEY` - Private SSH key
- `NEXT_PUBLIC_SITE_URL` - Your production URL

### 3. Install Docker on OCI VM
```bash
sudo dnf install -y docker
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
# Log out and back in
```

### 4. Deploy!
```bash
git checkout prod
git merge main
git push origin prod
```

GitHub Actions will automatically:
1. Build Docker image
2. Push to Docker Hub
3. Pull on OCI VM
4. Deploy container

### 5. Verify
```bash
# On OCI VM
docker ps
curl http://localhost:3000
```

## Manual Deployment (if needed)

```bash
# On OCI VM
docker pull your-username/portfolio-app:latest
docker stop portfolio-app || true
docker rm portfolio-app || true
docker run -d \
  --name portfolio-app \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL="https://yourdomain.com" \
  your-username/portfolio-app:latest
```

## Rollback

```bash
# List available images
docker images your-username/portfolio-app

# Run previous version
docker stop portfolio-app
docker rm portfolio-app
docker run -d \
  --name portfolio-app \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL="https://yourdomain.com" \
  your-username/portfolio-app:prod-<commit-sha>
```

## Files Created

- `Dockerfile` - Multi-stage build configuration
- `.dockerignore` - Files to exclude from image
- `docker-compose.yml` - Local testing
- `.github/workflows/deploy-prod.yml` - Updated for Docker
- `deployment/docker-deploy.sh` - Manual deployment script
- `deployment/README-DOCKER.md` - Full documentation

## Need Help?

See [deployment/README-DOCKER.md](./deployment/README-DOCKER.md) for detailed documentation.

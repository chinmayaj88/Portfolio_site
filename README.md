# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring smooth animations, clean UI, and production-ready deployment to OCI Compute Instance.

## 🚀 Features

- **Modern Stack**: Next.js 16, React 19, TypeScript
- **Smooth Animations**: Motion (Framer Motion) for fluid interactions
- **Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Open Graph, Twitter Cards, and proper metadata
- **Dockerized**: Containerized deployment for consistency and easy rollbacks
- **CI/CD Pipeline**: Automated Docker build and deployment to OCI Compute Instance
- **Production Ready**: Error boundaries, 404 pages, and optimized builds

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Git

## 🛠️ Getting Started

### Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio_site
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your local configuration
# For local development, NEXT_PUBLIC_SITE_URL should be http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

#### Using npm
```bash
npm run build
npm start
```

#### Using Docker (Recommended)
```bash
# Build Docker image
docker build -t portfolio-app .

# Run container
docker run -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 portfolio-app

# Or use docker-compose
docker-compose up -d
```

## 🚢 Deployment

### CI/CD Pipeline

This project uses **GitHub Actions** for automated CI/CD:

- **CI Pipeline**: Runs on `main`, `develop`, and `feature/**` branches
  - Builds and tests the application
  - No deployment (testing only)

- **Production Deployment**: **Only triggers on push to `prod` branch**
  - Builds Docker image
  - Pushes to Docker Hub (public repository)
  - Pulls image on OCI Compute Instance
  - Deploys and restarts container
  - Runs health checks

### Deployment Workflow

1. **Merge to `prod` branch**:
   ```bash
   git checkout prod
   git merge main
   git push origin prod
   ```

2. **GitHub Actions automatically**:
   - Builds Docker image
   - Pushes to Docker Hub
   - Pulls image on OCI instance
   - Deploys and restarts container
   - Verifies deployment health

### Setup Instructions

**📦 Docker Deployment (Recommended)**

See [deployment/README-DOCKER.md](./deployment/README-DOCKER.md) for detailed Docker deployment instructions including:
- Docker Hub account setup
- GitHub Secrets configuration
- OCI VM Docker installation
- Container deployment
- Rollback procedures

**📋 Legacy Deployment (File Transfer)**

See [deployment/README.md](./deployment/README.md) for the previous file-transfer based deployment method.

### Required GitHub Secrets

Configure these in your repository settings (`Settings > Secrets and variables > Actions`):

**Docker Deployment:**
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password or access token
- `OCI_HOST`: OCI compute instance IP/hostname
- `OCI_USERNAME`: SSH username (typically `opc`)
- `OCI_SSH_KEY`: Private SSH key for authentication
- `OCI_SSH_PORT`: SSH port (default: 22, optional)
- `NEXT_PUBLIC_SITE_URL`: Production domain URL

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI pipeline (build & test)
│       └── deploy-prod.yml     # Production deployment (Docker)
├── deployment/
│   ├── README-DOCKER.md        # Docker deployment guide
│   ├── README.md               # Legacy deployment guide
│   ├── docker-deploy.sh        # Manual deployment script
│   ├── systemd/
│   │   ├── portfolio-app.service        # Legacy service
│   │   └── portfolio-app-docker.service # Docker service
│   └── nginx/
│       └── portfolio.conf
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js app router pages
│   ├── components/             # React components
│   ├── data/                   # Data files
│   └── contexts/               # React contexts
├── .dockerignore               # Docker ignore patterns
├── Dockerfile                  # Docker multi-stage build
├── docker-compose.yml          # Docker Compose config
├── .env.example                # Example environment variables
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🐳 Docker Commands

- `docker build -t portfolio-app .` - Build Docker image
- `docker run -p 3000:3000 portfolio-app` - Run container
- `docker-compose up -d` - Start with Docker Compose
- `docker-compose down` - Stop containers
- `docker logs portfolio-app` - View container logs

## 📝 Important Notes

- **Production deployments only occur when pushing to the `prod` branch**
- Always test changes in development/staging before merging to `prod`
- Monitor deployment status in GitHub Actions tab
- Check application logs on OCI instance if issues occur

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Motion (Framer Motion) Documentation](https://motion.dev)

## 📄 License

This project is private and proprietary.

import { ProjectDocsConfig } from '@/types/projectDocs.types';

const config: ProjectDocsConfig = {
  projectId: 'ecommerce-microservices',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      path: '/overview',
    },
    {
      id: 'architecture',
      title: 'Architecture',
      path: '/architecture',
      subsections: [
        {
          id: 'system-design',
          title: 'System Design',
          path: '/architecture/system-design',
        },
        {
          id: 'microservices',
          title: 'Microservices',
          path: '/architecture/microservices',
        },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      path: '/database',
    },
    {
      id: 'tech-stack',
      title: 'Tech Stack',
      path: '/tech-stack',
    },
    {
      id: 'cicd',
      title: 'CI/CD',
      path: '/cicd',
    },
    {
      id: 'deployment',
      title: 'Deployment',
      path: '/deployment',
    },
  ],
  pages: {
    '/overview': {
      id: 'overview',
      title: 'Overview',
      content: [
        {
          type: 'heading',
          content: 'Enterprise E-Commerce Backend',
          level: 1,
        },
        {
          type: 'text',
          content: 'A scalable microservices-based e-commerce platform built with clean architecture principles, designed to handle high traffic and complex business logic. This system powers millions of transactions daily with 99.9% uptime.',
        },
        {
          type: 'quote',
          content: 'Built for scale, designed for developers. This architecture supports horizontal scaling and independent service deployment.',
        },
        {
          type: 'heading',
          content: 'Key Features',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Microservices architecture with independent service deployment',
            'Clean Architecture implementation for maintainability',
            'RESTful APIs with comprehensive documentation',
            'Database per service pattern',
            'Event-driven communication between services',
            'Containerized deployment with Docker and Kubernetes',
            'Real-time inventory management',
            'Payment gateway integration',
            'Order processing pipeline',
          ],
        },
        {
          type: 'heading',
          content: 'Quick Start',
          level: 2,
        },
        {
          type: 'text',
          content: 'To get started with the e-commerce backend, clone the repository and follow the setup instructions.',
        },
        {
          type: 'code',
          content: `# Clone the repository
git clone https://github.com/your-org/ecommerce-microservices.git
cd ecommerce-microservices

# Install dependencies
npm install

# Start development environment
docker-compose up -d

# Run migrations
npm run migrate

# Start services
npm run dev`,
          language: 'bash',
        },
        {
          type: 'heading',
          content: 'Architecture Overview',
          level: 2,
        },
        {
          type: 'text',
          content: 'The system is built using a microservices architecture where each service handles a specific business domain. Services communicate through REST APIs and message queues.',
        },
      ],
    },
    '/architecture': {
      id: 'architecture',
      title: 'Architecture',
      content: [
        {
          type: 'heading',
          content: 'System Architecture',
          level: 1,
        },
        {
          type: 'text',
          content: 'The system follows a microservices architecture pattern, where each service is independently deployable and scalable. This allows us to scale individual components based on demand and deploy updates without affecting the entire system.',
        },
        {
          type: 'heading',
          content: 'Service Communication',
          level: 2,
        },
        {
          type: 'text',
          content: 'Services communicate through two main patterns: synchronous REST APIs for request-response scenarios and asynchronous message queues for event-driven workflows.',
        },
        {
          type: 'code',
          content: `// Example: Service-to-Service Communication
const axios = require('axios');

async function createOrder(orderData) {
  // Synchronous call to inventory service
  const inventoryCheck = await axios.post(
    'http://inventory-service/api/check',
    { items: orderData.items }
  );
  
  if (inventoryCheck.data.available) {
    // Publish event to message queue
    await messageQueue.publish('order.created', orderData);
    return { success: true, orderId: orderData.id };
  }
  
  return { success: false, error: 'Items out of stock' };
}`,
          language: 'javascript',
        },
        {
          type: 'heading',
          content: 'Technology Stack',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Node.js with Express for API services',
            'PostgreSQL for relational data',
            'MongoDB for document storage',
            'Redis for caching and session management',
            'RabbitMQ for message queuing',
            'Docker for containerization',
            'Kubernetes for orchestration',
          ],
        },
      ],
    },
    '/architecture/system-design': {
      id: 'system-design',
      title: 'System Design',
      content: [
        {
          type: 'heading',
          content: 'System Design Overview',
          level: 1,
        },
        {
          type: 'text',
          content: 'This section covers the overall system design and how different components interact. The architecture is designed to handle high concurrency and provide fault tolerance.',
        },
        {
          type: 'heading',
          content: 'System Flow Diagram',
          level: 2,
        },
        {
          type: 'diagram',
          content: `graph TD
    A[Client Request] --> B[API Gateway]
    B --> C[Auth Service]
    C --> D[Product Service]
    C --> E[Order Service]
    C --> F[Payment Service]
    D --> G[Product Database]
    E --> H[Order Database]
    F --> I[Payment Gateway]
    E --> J[Message Queue]
    J --> K[Notification Service]
    J --> L[Inventory Service]`,
        },
        {
          type: 'heading',
          content: 'Design Principles',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Single Responsibility: Each service handles one business domain',
            'Loose Coupling: Services communicate through well-defined interfaces',
            'High Cohesion: Related functionality is grouped together',
            'Fault Isolation: Failures in one service don\'t cascade',
            'Scalability: Services can scale independently',
          ],
        },
        {
          type: 'quote',
          content: 'The system is designed with failure in mind. Every service has fallback mechanisms and circuit breakers to prevent cascading failures.',
        },
      ],
    },
    '/architecture/microservices': {
      id: 'microservices',
      title: 'Microservices',
      content: [
        {
          type: 'heading',
          content: 'Microservices Architecture',
          level: 1,
        },
        {
          type: 'text',
          content: 'The platform is decomposed into multiple microservices, each responsible for a specific business capability. This approach provides flexibility, scalability, and maintainability.',
        },
        {
          type: 'heading',
          content: 'Core Services',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'User Service: Handles authentication and user management',
            'Product Service: Manages product catalog and search',
            'Order Service: Processes orders and order history',
            'Payment Service: Handles payment processing',
            'Inventory Service: Manages stock levels',
            'Notification Service: Sends emails and SMS',
            'Analytics Service: Tracks user behavior and metrics',
          ],
        },
        {
          type: 'heading',
          content: 'Service Example',
          level: 2,
        },
        {
          type: 'text',
          content: 'Here\'s an example of a simple microservice implementation:',
        },
        {
          type: 'code',
          content: `// Product Service - Express.js
const express = require('express');
const app = express();

app.use(express.json());

// Get product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new product
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    
    // Publish event
    await publishEvent('product.created', product);
    
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Product Service running on port 3000');
});`,
          language: 'javascript',
        },
        {
          type: 'heading',
          content: 'Service Communication Patterns',
          level: 2,
        },
        {
          type: 'text',
          content: 'Services use different communication patterns based on the use case:',
        },
        {
          type: 'list',
          items: [
            'Synchronous: REST APIs for immediate responses',
            'Asynchronous: Message queues for event-driven workflows',
            'Service Discovery: Kubernetes DNS for service location',
            'API Gateway: Single entry point for all client requests',
          ],
        },
      ],
    },
    '/database': {
      id: 'database',
      title: 'Database Design',
      content: [
        {
          type: 'heading',
          content: 'Database Architecture',
          level: 1,
        },
        {
          type: 'text',
          content: 'Each microservice has its own database, following the database per service pattern. This ensures data isolation and allows each service to choose the most appropriate database technology.',
        },
        {
          type: 'heading',
          content: 'Database Schema',
          level: 2,
        },
        {
          type: 'diagram',
          content: `erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : "ordered in"
    CATEGORY ||--o{ PRODUCT : contains
    
    USER {
        int id PK
        string email
        string name
        datetime created_at
    }
    
    ORDER {
        int id PK
        int user_id FK
        decimal total
        string status
        datetime created_at
    }
    
    PRODUCT {
        int id PK
        string name
        decimal price
        int stock
        int category_id FK
    }`,
        },
        {
          type: 'heading',
          content: 'Database Technologies',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'PostgreSQL: Used for transactional data (orders, users, payments)',
            'MongoDB: Used for product catalog and search',
            'Redis: Used for caching and session storage',
            'Elasticsearch: Used for full-text search',
          ],
        },
        {
          type: 'heading',
          content: 'Database Migration Example',
          level: 2,
        },
        {
          type: 'code',
          content: `-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);`,
          language: 'sql',
        },
      ],
    },
    '/tech-stack': {
      id: 'tech-stack',
      title: 'Technology Stack',
      content: [
        {
          type: 'heading',
          content: 'Technologies Used',
          level: 1,
        },
        {
          type: 'text',
          content: 'The technology stack is carefully chosen to provide scalability, reliability, and developer productivity. Each technology serves a specific purpose in the architecture.',
        },
        {
          type: 'heading',
          content: 'Backend Technologies',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Node.js: JavaScript runtime for building scalable network applications',
            'Express.js: Web framework for building REST APIs',
            'TypeScript: Type-safe JavaScript for better code quality',
            'NestJS: Progressive Node.js framework for enterprise applications',
          ],
        },
        {
          type: 'heading',
          content: 'Database Technologies',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'PostgreSQL: Relational database for transactional data',
            'MongoDB: Document database for flexible schemas',
            'Redis: In-memory data store for caching',
            'Elasticsearch: Search and analytics engine',
          ],
        },
        {
          type: 'heading',
          content: 'Infrastructure',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Docker: Containerization platform',
            'Kubernetes: Container orchestration',
            'RabbitMQ: Message broker',
            'Nginx: Reverse proxy and load balancer',
          ],
        },
        {
          type: 'heading',
          content: 'Development Tools',
          level: 2,
        },
        {
          type: 'code',
          content: `{
  "name": "ecommerce-microservices",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "migrate": "node-pg-migrate up"
  },
  "dependencies": {
    "express": "^4.18.2",
    "typescript": "^5.0.0",
    "pg": "^8.11.0",
    "redis": "^4.6.0",
    "amqplib": "^0.10.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^20.0.0",
    "nodemon": "^2.0.22",
    "jest": "^29.5.0"
  }
}`,
          language: 'json',
        },
      ],
    },
    '/cicd': {
      id: 'cicd',
      title: 'CI/CD Pipeline',
      content: [
        {
          type: 'heading',
          content: 'Continuous Integration & Deployment',
          level: 1,
        },
        {
          type: 'text',
          content: 'The CI/CD pipeline automates the entire software delivery process, from code commit to production deployment. This ensures consistent, reliable releases with minimal manual intervention.',
        },
        {
          type: 'heading',
          content: 'Pipeline Stages',
          level: 2,
        },
        {
          type: 'diagram',
          content: `graph LR
    A[Git Push] --> B[Build]
    B --> C[Test]
    C --> D{Lint}
    D -->|Pass| E[Build Docker Image]
    D -->|Fail| F[Notify]
    E --> G[Push to Registry]
    G --> H[Deploy to Staging]
    H --> I[Integration Tests]
    I --> J{Approval}
    J -->|Yes| K[Deploy to Production]
    J -->|No| L[Rollback]`,
        },
        {
          type: 'heading',
          content: 'GitLab CI Configuration',
          level: 2,
        },
        {
          type: 'code',
          content: `# .gitlab-ci.yml
stages:
  - build
  - test
  - deploy

variables:
  DOCKER_IMAGE: registry.gitlab.com/your-org/ecommerce

build:
  stage: build
  script:
    - npm install
    - npm run build
    - docker build -t $DOCKER_IMAGE:$CI_COMMIT_SHA .
    - docker push $DOCKER_IMAGE:$CI_COMMIT_SHA
  only:
    - main
    - develop

test:
  stage: test
  script:
    - npm install
    - npm run test
    - npm run lint
  coverage: '/Coverage: \\d+%/'

deploy_staging:
  stage: deploy
  script:
    - kubectl set image deployment/product-service 
        product-service=$DOCKER_IMAGE:$CI_COMMIT_SHA
  environment:
    name: staging
  only:
    - develop

deploy_production:
  stage: deploy
  script:
    - kubectl set image deployment/product-service 
        product-service=$DOCKER_IMAGE:$CI_COMMIT_SHA
  environment:
    name: production
  when: manual
  only:
    - main`,
          language: 'yaml',
        },
        {
          type: 'heading',
          content: 'Pipeline Benefits',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Automated testing on every commit',
            'Consistent deployment process',
            'Faster time to market',
            'Reduced human error',
            'Easy rollback capabilities',
            'Environment parity',
          ],
        },
        {
          type: 'quote',
          content: 'Our CI/CD pipeline reduces deployment time from hours to minutes, enabling rapid iteration and faster feature delivery.',
        },
      ],
    },
    '/deployment': {
      id: 'deployment',
      title: 'Deployment',
      content: [
        {
          type: 'heading',
          content: 'Deployment Strategy',
          level: 1,
        },
        {
          type: 'text',
          content: 'The platform uses containerized deployment with Docker and Kubernetes orchestration. This approach provides portability, scalability, and efficient resource utilization.',
        },
        {
          type: 'heading',
          content: 'Docker Configuration',
          level: 2,
        },
        {
          type: 'code',
          content: `# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD node healthcheck.js

# Start application
CMD ["node", "dist/index.js"]`,
          language: 'dockerfile',
        },
        {
          type: 'heading',
          content: 'Kubernetes Deployment',
          level: 2,
        },
        {
          type: 'code',
          content: `# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: product-service
  labels:
    app: product-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: product-service
  template:
    metadata:
      labels:
        app: product-service
    spec:
      containers:
      - name: product-service
        image: registry.gitlab.com/your-org/ecommerce:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: product-service
spec:
  selector:
    app: product-service
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer`,
          language: 'yaml',
        },
        {
          type: 'heading',
          content: 'Deployment Environments',
          level: 2,
        },
        {
          type: 'list',
          items: [
            'Development: Local Kubernetes cluster for testing',
            'Staging: Mirrors production environment',
            'Production: High-availability cluster with auto-scaling',
          ],
        },
        {
          type: 'heading',
          content: 'Scaling Strategy',
          level: 2,
        },
        {
          type: 'text',
          content: 'Services are configured with horizontal pod autoscaling based on CPU and memory usage. This ensures optimal resource utilization and handles traffic spikes automatically.',
        },
        {
          type: 'code',
          content: `# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: product-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: product-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80`,
          language: 'yaml',
        },
      ],
    },
  },
};

export default config;


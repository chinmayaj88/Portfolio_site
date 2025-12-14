// Technology logo images for Tools & Skills section
// Using devicons CDN which provides PNG/SVG logos for technologies

export interface TechnologyImage {
  id: string;
  name: string;
  url: string;
}

// Frontend technologies
export const frontendImages: TechnologyImage[] = [
  {
    id: "react",
    name: "React",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    url: "/tech-stack/frontend/tailwind.png",
  },
  {
    id: "nextjs",
    name: "Next.js",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    id: "html",
    name: "HTML",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    id: "css",
    name: "CSS",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    id: "react-native",
    name: "React Native",
    url: "/tech-stack/frontend/react-native.jpg",
  },
  {
    id: "javascript",
    name: "JavaScript",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
];

// Backend technologies
export const backendImages: TechnologyImage[] = [
  {
    id: "python",
    name: "Python",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: "express",
    name: "Express",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original-wordmark.svg",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    id: "redis",
    name: "Redis",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  },
];

// DevOps & Cloud technologies
export const devopsImages: TechnologyImage[] = [
  {
    id: "oci",
    name: "OCI Cloud",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
  },
  {
    id: "aws",
    name: "AWS",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    id: "docker",
    name: "Docker",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain-wordmark.svg",
  },
  {
    id: "terraform",
    name: "Terraform",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original-wordmark.svg",
  },
  {
    id: "gitlab",
    name: "GitLab",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original-wordmark.svg",
  },
  {
    id: "git",
    name: "Git",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg",
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  icon?: string;
}

export const certificationsData: Certification[] = [
  {
    id: 'oracle-cloud-infrastructure-2024-foundations-associate',
    name: 'Oracle Cloud Infrastructure 2024 Foundations Associate',
    issuer: 'Oracle',
    issueDate: '2024-12-01',
    credentialId: 'OCIF2024-XXXXX',
    credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=XXXXX',
    image: '/certificates/oracle-foundations-associate.jpg', // Add your certificate image path
    icon: '☁️',
  },
  {
    id: 'oracle-cloud-infrastructure-2024-architect-associate',
    name: 'Oracle Cloud Infrastructure 2024 Architect Associate',
    issuer: 'Oracle',
    issueDate: '2024-12-15',
    credentialId: 'OCIA2024-XXXXX',
    credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=XXXXX',
    image: '/certificates/oracle-architect-associate.jpg', // Add your certificate image path
    icon: '🏗️',
  },
];

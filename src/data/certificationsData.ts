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
    id: 'oracle-cloud-infrastructure-2025-certified-architect-associate',
    name: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
    issuer: 'Oracle',
    issueDate: '31-10-2025',
    credentialId: '323302726OCI25CAA',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=262A05FA963EA4021A7270F31D3AD02EF24992357423A783D6CCFA6F1C8886ED',
    image: '/certificates/oci-architect-associate.png', 
    icon: '☁️',
  },
  {
    id: 'oracle-cloud-infrastructure-2025-certified-devops-professional',
    name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    issueDate: '07-11-2025',
    credentialId: '323302726OCI25DOPOCP',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=828E840F9145A5F07631FDC75ADFE2AC385068BA5056C66C61E67874FA3B1F39',
    image: '/certificates/oci-devops.png',
    icon: '🏗️',
  },
];

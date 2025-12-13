export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
  achievements?: string[];
}

export const educationData: Education[] = [
  // Add your education here
  // Example:
  // {
  //   id: 'btech',
  //   degree: 'Bachelor of Technology',
  //   field: 'Computer Science',
  //   institution: 'University Name',
  //   location: 'City, Country',
  //   startDate: '2020-08',
  //   endDate: '2024-05',
  //   grade: '8.5/10',
  //   description: 'Focused on software engineering, algorithms, and cloud computing.',
  //   achievements: [
  //     'Dean\'s List for academic excellence',
  //     'Final year project: Cloud-based microservices platform',
  //   ],
  // },
];


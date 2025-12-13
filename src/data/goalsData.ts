export interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'professional' | 'personal' | 'learning';
  icon?: string;
}

export const goalsData: Goal[] = [
  // Add your goals here
  // Example:
  // {
  //   id: 'goal-1',
  //   title: 'Master Cloud Architecture',
  //   description: 'Deep dive into advanced cloud architecture patterns and multi-cloud strategies.',
  //   category: 'professional',
  //   icon: '☁️',
  // },
  // {
  //   id: 'goal-2',
  //   title: 'Contribute to Open Source',
  //   description: 'Regularly contribute to open-source projects and build a strong portfolio.',
  //   category: 'professional',
  //   icon: '💻',
  // },
];


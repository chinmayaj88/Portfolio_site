// Project config mapping
// Add new projects here as you create them

import ecommerceConfig from './ecommerce-microservices/config';

export const projectConfigs: Record<string, () => Promise<{ default: typeof ecommerceConfig }>> = {
  'ecommerce-microservices': () => import('./ecommerce-microservices/config'),
  // Add more projects here:
  // 'another-project': () => import('./another-project/config'),
};

export function getProjectConfigLoader(slug: string) {
  return projectConfigs[slug];
}


import type { Property } from '../types/property';
import { MOCK_PROPERTIES } from '../data/mockProperties';

// Ready for real API integration
// Simply replace this with: return fetch('/api/properties').then(res => res.json())
export const fetchProperties = async (): Promise<Property[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PROPERTIES;
};

// Example for future API integration:
// export const fetchProperties = async (): Promise<Property[]> => {
//   const response = await fetch('https://api.realestate.com/properties?suburb=Cammeray');
//   if (!response.ok) throw new Error('Failed to fetch properties');
//   return response.json();
// };

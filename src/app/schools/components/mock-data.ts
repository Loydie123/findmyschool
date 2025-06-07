import { School } from './types';

export const mockSchools: School[] = [
  {
    id: '1',
    name: 'University of the Philippines',
    location: 'Diliman, Quezon City',
    type: 'Public University',
    programs: ['Engineering', 'Science', 'Arts', 'Business'],
    image: '/images/logos.png',
    rating: 4.8
  },
  {
    id: '2',
    name: 'De La Salle University',
    location: 'Manila',
    type: 'Private University',
    programs: ['Business', 'Engineering', 'Education', 'Science'],
    image: '/images/logos.png',
    rating: 4.7
  }
]; 
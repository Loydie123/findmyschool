import { Scholarship } from './types';

export const mockScholarships: Scholarship[] = [
  {
    id: '1',
    name: 'DOST Science and Technology Scholarship',
    organization: 'Department of Science and Technology',
    amount: '₱7,000 - ₱40,000 per semester',
    deadline: '2024-08-30',
    requirements: [
      'Filipino citizen',
      'Must be a graduating high school student',
      'Must have a general weighted average of 85% or better',
      'Must pursue priority S&T courses'
    ],
    description: 'The DOST-SEI Undergraduate Scholarship Programs aim to support promising students in pursuing careers in science and technology.',
    type: 'Merit-based',
    image: '/images/logos.png'
  },
  {
    id: '2',
    name: 'SM Foundation College Scholarship',
    organization: 'SM Foundation',
    amount: 'Full tuition and monthly allowance',
    deadline: '2024-09-15',
    requirements: [
      'Filipino citizen',
      'Grade 12 graduating student or Grade 12 graduate',
      'General weighted average of 88% or higher',
      'Combined family income of ₱150,000 or less annually'
    ],
    description: 'The SM College Scholarship Program provides deserving and qualified students with access to college education and technical-vocational studies.',
    type: 'Need-based',
    image: '/images/logos.png'
  }
]; 
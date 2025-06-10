export interface Project {
  id: number;
  name: string;
  githubId: string;
  githubUrl: string;
  hashtags: string[];
  description: string;
  logo: string;
}

import robotlogo from '../images/logos/robotlogo.jpg';
import ecommLogo from '../images/logos/robotlogo.jpg';

export const projects: Project[] = [
  {
    id: 0,
    name: 'Bet Robot',
    githubId: '@roboapostas - Privated',
    githubUrl: 'https://github.com/alangomessilva/roboapostas',
    hashtags: ['Football', 'Node', 'Bet'],
    description: 'This Robot, maked in NodeJs, make football Hints for apply in Bets House! ',
    logo: robotlogo.toString(),
  },
  {
    id: 1,
    name: 'E-Commerce POC ',
    githubId: 'EcommercePoc',
    githubUrl: 'https://github.com/alangomessilva/',
    hashtags: ['Ecomm', 'Poc', 'Java'],
    description: 'E-Commerce POC - Building ',
    logo: ecommLogo.toString(),
  },
  {
    id: 2,
    name: 'Hybris Addon Poc',
    githubId: 'hybrisAddon',
    githubUrl: 'https://github.com/alangomessilva/hybrisAddon',
    hashtags: ['Ecomm', 'Hybris', 'Java'],
    description: 'Addon to Hybris - Building ',
    logo: ecommLogo.toString(),
  },
];

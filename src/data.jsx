import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Name : ',
    description: 'Akash Yeole',
  },

  {
    id: 2,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 3,
    title: 'Nationality : ',
    description: 'India',
  },

  {
    id: 4,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Nashik, Maharashtra, India',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+91 775799XXXX',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'akashyeole02@gmail.com',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'English, Marathi, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '11+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '6+',
    title: 'Years Spent In Programming',
  },
  {
    id: 4,
    no: '11+',
    title: 'Acheivements & Awards',
  },

  
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Software Engineer Intern <span> Infineon Technologies </span>',
    desc: '<ol> <li> Worked on Digital design system by developing HTML web components(stepper, sidebar & progressbar) based on brand design using <first-color-text>Stencil JS</first-color-text> and <first-color-text>Storybook JS</first-color-text>. These DDS components  has 2000+ install on npmjs repository.</li> <li> Created exmaple webpages using <first-color-text>React JS</first-color-text> to demonstarte use of DDS components.</li> <li>Wrote <first-color-text>Python</first-color-text> script to download 1000+ files from source and upload them to a desitnation(remote FTP).</li> <li>Worked on a <first-color-text>Python</first-color-text> script that normalizes the file names and makes them SEO friendly. This script helped all the division in company to normalize more than 1000 existing files.</li> <li>Used <first-color-text>Akamai CDN tool</first-color-text> to manage URL redirection to infineon website.</li> </ol>',
  },  

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021 - PRESENT',
    title: 'Bachelor of Technology in Computer Science <span> Vishwakarma Institute of Information Technology, Pune </span>',
    desc: '',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018 - 2021',
    title: 'Diploma in Computer Technology <span> K. K. Wagh Polytechnic, Nashik </span>',
    desc: '',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Secondary Education <span> St. Francis High School, Nashik </span>',
    desc: '',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 2,
    title: 'HTML',
    percentage: '60',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Mongo DB',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Python',
    percentage: '90',
  },
  
  {
    id: 6,
    title: 'React JS',
    percentage: '80',
  },


  {
    id: 7,
    title: 'Stencil JS',
    percentage: '85',
  },

  {
    id: 8,
    title: 'Express JS',
    percentage: '80',
  },
];

export const awards = [
  {
    id: 1,
    title: 'Won Code Royale: Coding Competition by CSI-VIIT (Won Cash Prize)',
    link: ''
  },

  {
    id: 2,
    title: 'Knight on LeetCode (Top 4% in world, 1900+ Max Rating)',
    link: 'https://drive.google.com/file/d/12xLRujWs6Q5JjBO4d4KHYra0NDzAZTgH/view?usp=drive_link'
  },

  {
    id: 3,
    title: 'ICPC Regionalist 2023 (AIR 159)',
    link: 'https://drive.google.com/file/d/1LSk6tcKBN6KpojGZcZtpoNBcmNqiTHqN/view?usp=sharing'
  },

  {
    id: 4,
    title: '3 Star on Codechef (1775 Max Rating)',
    link: 'https://drive.google.com/file/d/1xMj7LWzZ2JARjM7ql5A5MLQ_Wycd2L1G/view?usp=drive_link'
  },

  {
    id: 5,
    title: 'Pupil on CodeForces',
    link: 'https://drive.google.com/file/d/1FXRJHSKv4zIH1D-4RwmJeG8O1SQFhi3_/view?usp=drive_link'
  },

  {
    id: 6,
    title: 'Top 6/104 \'7 Days of Code Challenge\' by CSI-VIIT',
    link: 'https://drive.google.com/file/d/1GmM5aGKn6MEADZ8yJlDczW912SrZHYY7/view?usp=sharing'
  },

]

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

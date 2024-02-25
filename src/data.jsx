import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaRegBuilding
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink, FiDownload } from 'react-icons/fi';

import Project1 from './assets/project_1.png';
import Project2 from './assets/project_2.png';
import Project3 from './assets/project_3.png';
import Project4 from './assets/project_4.png';
import Project5 from './assets/project_5.png';
import Project6 from './assets/project_6.png';
import Project7 from './assets/project_7.png';
import Project8 from './assets/project_8.png';

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
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/projects',
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
    id: 8,
    img: Project8,
    title: 'Notewell (Ongoing)',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project Description : ',
        desc: 'Notwell is a digital diary and document storage that allows user to fetch, update, add or delete his notes or document(files) form anywhere using the web browser',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'React JS | Express JS | Mongo DB | Lerna',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github Link : ',
        desc: 'https://github.com/akashyeole/notewell',
      },
    ],
  },

  {
    id: 7,
    img: Project7,
    title: 'Flatmate and a flat finder',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project Description : ',
        desc: 'A web application that help user to find the flat or register his/her flat to rent it. An application comes with integrated map to locate the address of the flat.',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'React JS | Express JS | Mongo DB | Maps API',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github Link : ',
        desc: 'https://github.com/akashyeole/flatmates-frontend',
      },
    ],
  },
  
  {
    id: 6,
    img: Project6,
    title: 'Digital Design System (Contributor)',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project Description : ',
        desc: 'A Digital Design System provides the HTML components based on Infineon\'s brand design which can be used different framworks. My contribution- Stepper Component, improvement in existing components and more',
      },
      {
        icon: <FaRegBuilding />,
        title: 'Organisation : ',
        desc: 'Infineon Technologies',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'Stencil JS | Storybook JS | SCSS | Typescript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview Link : ',
        desc: 'https://infineon.github.io/infineon-design-system-stencil',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github Link : ',
        desc: 'https://github.com/Infineon/infineon-design-system-stencil',
      },
    ],
  },

  {
    id: 5,
    img: Project5,
    title: 'Random Problem Picker',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project Description : ',
        desc: 'A random problem picker is an extension that allows a codeforces user to randomly choose a problem within given difficulty range. Has over 50 users',
      },
      {
        icon: <FaCode />,
        title: 'Tenchnology : ',
        desc: 'Javascript | HTML | CSS',
      },
      {
        icon: <FiDownload />,
        title: 'Download Link : ',
        desc: 'https://microsoftedge.microsoft.com/addons/detail/codeforces-problem-picker/glfmjkphohikmafkeloackdijnfpkaee',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github Link : ',
        desc: 'https://github.com/akashyeole/cf-problem-picker',
      },
    ],
  },

  {
    id: 4,
    img: Project4,
    title: 'Flowers Classifier',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project Description : ',
        desc: 'An ML web application that takes images as an input and outputs the flower type if flower, tells not a flower otherwise.',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'Flask | Tensorflow | Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github Link : ',
        desc: 'https://github.com/akashyeole/Flower-Classifier',
      },
    ],
  },

  {
    id: 3,
    img: Project3,
    title: 'Portfolio Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project Description : ',
        desc: 'A web portfolio design using HTML, CSS and Vanilla Javascript. The contact page allows visitor to send messages',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'HTML | CSS | Javascript | Express JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github Link : ',
        desc: 'https://github.com/akashyeole/My-Portfolio',
      },
    ],
  },

  {
    id: 2,
    img: Project2,
    title: 'Workout Buddy',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project Description : ',
        desc: 'A web application to track daily workout activity. It demonstartes the CRUD operations on MongoDB',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'React JS | Express JS | Mongo DB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github Link : ',
        desc: 'https://github.com/akashyeole/workout-buddy',
      },
    ],
  },

  {
    id: 1,
    img: Project1,
    title: 'Online Voting System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project Description : ',
        desc: 'An android application that enables E-voting and help conduct online surveys',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'Android | Java | SQL',
      }
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

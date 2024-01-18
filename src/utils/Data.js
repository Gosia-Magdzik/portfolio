import { FaReact, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import Project1 from '../assets/cinema.png';
import Project2 from '../assets/weather.png';
import CountriesAPI from '../assets/CountriesAPI.png';
import taskify from '../assets/taskify.png';
import kort from '../assets/kort.png';
import pomodoro from '../assets/pomodoro.png';
import goat from '../assets/goat.png';

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 2,
        tech: 'Figma',
        icon: <FaFigma />
    },
    {
        id: 3,
        tech: 'Java Script',
        icon: <SiJavascript />
    },
    {
        id: 4,
        tech: 'TypeScript',
        icon: <SiTypescript />
    },    {
        id: 5,
        tech: 'Redux',
        icon: <SiRedux />
    },
];

export const ProjectDetails = [
    {
        id: 0,
        project_name:"Movies Browser",
        project_desc: "The Movies Browser is a responsive web application collaboratively developed using HTML, CSS, JavaScript, React, Redux, Git, and GitHub. It provides access to an extensive film database, including details about actors and crew.",
        tech_stack: ['React JS', 'Git', 'Data fetching'],
        project_img: Project1,
        project_url: 'https://marcinkpawel.github.io/movies-browser/',
        reverse: false,
    },
    {
        id: 1,
        project_name:"Weather App",
        project_desc: "The application allows you to check the weather conditions based on the city you enter in the input field at the top. This application is using data from openweathermap.org",
        tech_stack: ['React JS', 'Data Fetching'],
        project_img: Project2,
        project_url: 'https://gosia-magdzik.github.io/weather-app/',
        reverse: true,
    },
    {
        id: 2,
        project_name:"Countries API",
        project_desc: "Application was a part of Frontend Mentor Challenges. Challenge was integrating with the REST Countries API to pull country data and display it like in the designs.",
        tech_stack: ['React JS', 'Redux', 'Router', 'theme switcher', 'Data Fetching'],
        project_img: CountriesAPI,
        project_url: 'https://gosia-magdzik.github.io/countries-app-redux/',
        reverse: false,
    },
    {
        id: 3,
        project_name:"To-do List written in TS",
        project_desc: "Taskify was my first project written in TypeScript. It's a to-do list built with React",
        tech_stack: ['React JS', 'Git', 'Drag & Drop', 'TypeScript'],
        project_img: taskify,
        project_url: 'https://gosia-magdzik.github.io/to-do-list-ts/',
        reverse: true,
    },
    {
        id: 4,
        project_name:"Tennis e-commerce shop",
        project_desc: "online store written in React React where you can explore and purchase tennis-related items. This project is designed to provide users with shopping experience, allowing them to browse, add items to their cart, and proceed to the checkout page to review and edit quantities before making a purchase.",
        tech_stack: ['React JS'],
        project_img: kort,
        project_url: 'https://gosia-magdzik.github.io/shopping-cart/',
        reverse: false,
    },
    {
        id: 5,
        project_name:"Pomodoro",
        project_desc: "This time management tool, based on the popular Pomodoro technique, allows users to efficiently allocate their time while providing the flexibility to edit the preset time intervals.",
        tech_stack: ['React JS', 'styled-components', 'useContext Hook'],
        project_img: pomodoro,
        project_url: 'https://gosia-magdzik.github.io/pomodoro/',
        reverse: true,
    },
    {
        id: 6,
        project_name:"Goat Farm",
        project_desc: "Kozia Dolina is a responsive website, inspired by journey, dedicated to showcasing a wanderful goat farm and a passion behind it",
        tech_stack: ['React JS', 'Maps', 'React Router', 'Bootstrap'],
        project_img: goat,
        project_url: 'https://gosia-magdzik.github.io/kozia-dolina/',
        reverse: false,
    },
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'Projects',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'Contact',
        href: 'Contact'
    }
]
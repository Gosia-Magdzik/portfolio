import { FaReact, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Project1 from '../assets/cinema.png';
import Project2 from '../assets/weather.png';

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
];

export const ProjectDetails = [
    {
        id: 0,
        project_name:"Movies Browser",
        project_desc: "The Movies Browser is a responsive web application collaboratively developed using HTML, CSS, JavaScript, React, Redux, Git, and GitHub. It provides access to an extensive film database, including details about actors and crew.",
        tech_stack: ['React JS'],
        project_img: Project1,
        project_url: 'https://marcinkpawel.github.io/movies-browser/',
        reverse: false,
    },
    {
        id: 1,
        project_name:"Weather App",
        project_desc: "The application allows you to check the weather conditions based on the city you enter in the input field at the top. This application is using data from openweathermap.org",
        tech_stack: ['React JS', 'Git'],
        project_img: Project2,
        project_url: 'https://gosia-magdzik.github.io/weather-app/',
        reverse: true,
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
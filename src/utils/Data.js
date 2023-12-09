import { FaReact, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Project1 from '../assets/cinema.png';

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
        project_desc: "Movies Browser is a responsive web application developed as the final project in the YouCode programming course. It utilizes HTML, CSS, JavaScript, React, Redux, Git, and GitHub. With access to a vast film database and details about actors and crew, it provides an immersive movie browsing experience.",
        project_img: Project1,
        project_url: 'https://marcinkpawel.github.io/movies-browser/',
        reverse: false,
    },

]
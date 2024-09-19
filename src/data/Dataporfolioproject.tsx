import { IconType } from 'react-icons';
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiUnity, SiCsharp, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiPhp } from 'react-icons/si';

import { TbBrandReactNative } from 'react-icons/tb';


export interface projectItems {
    name: string;
    langageIcons: { icon: IconType; color: string }[];
    type: 'Jeux vidéo' | 'Mobile' | 'Web';
    link: string;
    image: string;
    description?: string;
}


const Dataporfolioproject: projectItems[] = [
    {
        name: "SuperU E-commerce",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiTailwindcss, color: '#06B6D4' },
        ],
        type: "Web",
        link: "https://superu-project.com",
        image: "1",

    },
    {
        name: "Portfolio 1",
        langageIcons: [
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiJavascript, color: '#F7DF1E' },
            { icon: FaBootstrap, color: '#563D7C' }
        ],
        type: "Web",
        link: "https://taskmanager.com",
        image: "2",
    },
    {
        name: "Aloalo",
        langageIcons: [
            { icon: SiUnity, color: '#000000' },
            { icon: SiCsharp, color: '#178600' }
        ],
        type: "Jeux vidéo",
        link: "https://gamezone.com",
        image: "3",
    },
    {
        name: "New portfolio",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: SiTypescript, color: '#3178C6' },
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiTailwindcss, color: '#06B6D4' },
        ],
        type: "Web",
        link: "https://travelapp.com",
        image: "4",
    },
    {
        name: "Universitech",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiTailwindcss, color: '#06B6D4' },
            { icon: SiPhp, color: "#563D7C" },
        ],
        type: "Web",
        link: "https://travelapp.com",
        image: "5",
    }
    ,
    {
        name: "Webster",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: SiTypescript, color: '#3178C6' },
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiTailwindcss, color: '#06B6D4' },
        ],
        type: "Web",
        link: "https://travelapp.com",
        image: "6",
    },
    {
        name: "Food Shop Service",
        langageIcons: [

            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiJavascript, color: '#F7DF1E' },
            { icon: FaBootstrap, color: '#563D7C' }
        ],
        type: "Web",
        link: "https://travelapp.com",
        image: "7",
    },
    {
        name: "Gaming Sector",
        langageIcons: [
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiJavascript, color: '#F7DF1E' },
        ],
        type: "Web",
        link: "https://travelapp.com",
        image: "8",
    },
    {
        name: "Goball",
        langageIcons: [
            { icon: SiUnity, color: '#000000' },
            { icon: SiCsharp, color: '#178600' }
        ],
        type: "Jeux vidéo",
        link: "https://travelapp.com",
        image: "9",
    },
    {
        name: "Shape runner",
        langageIcons: [
            { icon: SiUnity, color: '#000000' },
            { icon: SiCsharp, color: '#178600' }
        ],
        type: "Jeux vidéo",
        link: "https://travelapp.com",
        image: "10",
    },
];

export default Dataporfolioproject;

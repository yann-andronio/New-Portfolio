import { IconType } from 'react-icons';
import { SiReact, SiMongodb, SiTypescript, SiUnity, SiCsharp, SiTailwindcss, SiJavascript , SiExpress } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaBootstrap,  FaNodeJs,  } from 'react-icons/fa';
import { SiPhp } from 'react-icons/si';

// import { TbBrandReactNative } from 'react-icons/tb';


export interface projectItems {
    id?:number ;
    name: string;
    langageIcons: { icon: IconType; color: string }[];
    type: 'Jeux vidéo' | 'Mobile' | 'Web';
    link: string;
    image: string;
    description?: string;
}


const Dataporfolioproject: projectItems[] = [
    {
        id: 1, 
        name: "SuperU E-commerce",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiTailwindcss, color: '#06B6D4' },
        ],
        type: "Web",
        link: "https://superu-ecommerce.netlify.app",
        image: "1",

    },
    {
        id: 2, 
        name: "Portfolio 1",
        langageIcons: [
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiJavascript, color: '#F7DF1E' },
            { icon: FaBootstrap, color: '#563D7C' }
        ],
        type: "Web",
        link: "https://portfoliotaloha.netlify.app",
        image: "2",
    },
    {
        id: 3, 
        name: "Aloalo",
        langageIcons: [
            { icon: SiUnity, color: '#000000' },
            { icon: SiCsharp, color: '#178600' }
        ],
        type: "Jeux vidéo",
        link: "./fichier/fichievolimineux",
        image: "3",
    },
    {
        id: 4, 
        name: "New portfolio",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: SiTypescript, color: '#3178C6' },
            { icon: FaNodeJs, color: '#68A063' },
            { icon: SiTailwindcss, color: '#06B6D4' },
            {icon: SiExpress ,  color:"#000000" }, 
            {icon: SiMongodb ,  color:"#47A248" }
        ],
        type: "Web",
        link: "https://yann-portfolio.netlify.app/",
        image: "4",
    },
    {
        id: 5, 
        name: "Universitech",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiTailwindcss, color: '#06B6D4' },
            { icon: SiPhp, color: "#563D7C" },
        ],
        type: "Web",
        link: "https://univesitech.com",
        image: "5",
    }
    ,
    {
        id: 6,
        name: "Webster",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: SiTypescript, color: '#3178C6' },
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiTailwindcss, color: '#06B6D4' },
        ],
        type: "Web",
        link: "https://webster.com",
        image: "6",
    },
    {
        id: 7,
        name: "Food Shop Service",
        langageIcons: [

            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiJavascript, color: '#F7DF1E' },
            { icon: FaBootstrap, color: '#563D7C' }
        ],
        type: "Web",
        link: "https://food-shop-service.netlify.app",
        image: "7",
    },
    {
        id: 8,
        name: "Gaming Sector",
        langageIcons: [
            { icon: FaHtml5, color: '#E34F26' },
            { icon: FaCss3Alt, color: '#1572B6' },
            { icon: SiJavascript, color: '#F7DF1E' },
        ],
        type: "Web",
        link: "https://gaming-sector.netlify.app",
        image: "8",
    },
    {
        id: 9, 
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
        id: 10, 
        name: "Shape runner",
        langageIcons: [
            { icon: SiUnity, color: '#000000' },
            { icon: SiCsharp, color: '#178600' }
        ],
        type: "Jeux vidéo",
        link: "./fichier/ShapeRunner.rar",
        image: "10",
    },
    {   
        id: 11, 
        name: "Aventure Training",
        langageIcons: [
            { icon: SiUnity, color: '#000000' },
            { icon: SiCsharp, color: '#178600' }
        ],
        type: "Jeux vidéo",
        link: "https://travelapp.com",
        image: "11",
    },
];

export default Dataporfolioproject;

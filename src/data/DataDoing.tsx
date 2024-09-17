import { FaCode, FaMobileAlt, FaDesktop, FaPencilAlt } from "react-icons/fa";

export interface DoingItems {
    id?: number;
    name: string;
    info?: string;
    icon?: JSX.Element; 
}

const Datadoing: DoingItems[] = [
    {
        id: 1,
        name: "Développement Web",
        info: "Je crée des sites web dynamiques avec différentes fonctionnalités.",
        icon: <FaCode color="rgb(183, 153, 80)" size={35} /> 
    },
    {
        id: 2,
        name: "Applications Mobiles",
        info: "Je développe des applications mobiles interactives et performantes.",
        icon: <FaMobileAlt color="rgb(183, 153, 80)" size={35} /> 
    },
    {
        id: 3,
        name: "Développement Front-end",
        info: "Je crée des interfaces utilisateur attrayantes et réactives avec les dernières technologies.",
        icon: <FaDesktop color="rgb(183, 153, 80)" size={35} /> 
    },
    {
        id: 4,
        name: "Design de Site Web",
        info: "Je conçois des designs de sites web modernes et esthétiques.",
        icon: <FaPencilAlt color="rgb(183, 153, 80)" size={35} /> 
    }
];

export default Datadoing;

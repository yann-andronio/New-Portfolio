import { IconType } from 'react-icons';
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiUnity, SiCsharp } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';


export interface projectItems {
    name: string;
    langageIcons: { icon: IconType; color: string }[];
    type: 'Jeux vidéo' | 'Mobile' | 'Web';
    link: string;
    image: string;
    description: string;
}


const Dataporfolioproject: projectItems[] = [
    {
        name: "SuperU E-commerce",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: SiNodedotjs, color: '#339933' },
            { icon: SiMongodb, color: '#47A248' }
        ],
        type: "Web",
        link: "https://superu-project.com",
        image: "1",
        description: "Une plateforme de vente en ligne pour SuperU avec fonctionnalités de filtrage et gestion du panier."
    },
    {
        name: "Gestionnaire de Tâches",
        langageIcons: [
            { icon: SiReact, color: '#61DAFB' },
            { icon: SiTypescript, color: '#3178C6' },
            { icon: SiNodedotjs, color: '#339933' },
            { icon: SiMongodb, color: '#47A248' }
        ],
        type: "Web",
        link: "https://taskmanager.com",
        image: "2",
        description: "Un gestionnaire de tâches en ligne avec fonctionnalités pour administrateurs et utilisateurs simples."
    },
    {
        name: "GameZone",
        langageIcons: [
            { icon: SiUnity, color: '#000000' },
            { icon: SiCsharp, color: '#178600' }
        ],
        type: "Jeux vidéo",
        link: "https://gamezone.com",
        image: "3",
        description: "Un jeu vidéo d'aventure en 3D développé avec Unity."
    },
    {
        name: "TravelApp",
        langageIcons: [
            { icon: TbBrandReactNative, color: '#61DAFB' },
            { icon: SiTypescript, color: '#3178C6' }
        ],
        type: "Mobile",
        link: "https://travelapp.com",
        image: "4",
        description: "Une application mobile pour réserver des hôtels et afficher les conditions météorologiques en temps réel."
    }
];

export default Dataporfolioproject;

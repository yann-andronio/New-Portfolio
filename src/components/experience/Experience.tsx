import { Fragment } from "react/jsx-runtime";
import { FaBriefcase } from 'react-icons/fa';
import s from "./experience.module.css";
import { motion } from 'framer-motion';

interface Experienceitems {
    date: string;
    title: string;
    description: string;
}

const Dataeducation: Experienceitems[] = [
    {
        date: '2024',
        title: 'New Portfolio en ligne',
        description: "Réalisation de mon portfolio personnel avec un design moderne et interactif. Développé en MERN stack, intégration d'animations et d'effets dynamiques pour améliorer l'expérience utilisateur.",
    },
    {
        date: '2024',
        title: 'Projet e-commerce personnel (front-end)',
        description: "Création du front-end pour une plateforme e-commerce, incluant la gestion du panier, recherche et filtrage des produits par catégories. Développé avec React.js et des librairies associées.",
    },
    {
        date: '2024',
        title: 'Livecoding 2024 – Gestion universitaire en ligne (front-end)',
        description: "Participation au développement du front-end d'une plateforme de gestion universitaire, avec gestion des étudiants et des cours. Utilisation de React.js pour la partie front-end.",
    },
    {
        date: '2023',
        title: 'Développement d\'un site de commande de nourriture en ligne (front-end)',
        description: "Conception d'un site de commande de nourriture avec HTML, CSS ,JavaScript et Bootstrap pour l'interface utilisateur. Implémentation des fonctionnalités de navigation et de commande.",
    },
    {
        date: '2023',
        title: 'Portfolio personnel en ligne',
        description: "Création de mon premier portfolio interactif avec HTML, CSS , JavaScript et Bootstrap pour présenter mes projets, avec utilisation de librairies d'animation JavaScript.",
    },
    {
        date: '2023',
        title: 'Mini-projet de création de site sur le secteur des jeux (front-end)',
        description: "Réalisation d'un site web dédié au secteur des jeux vidéo dans le cadre de mon mini-projet en L1. Utilisation de HTML, CSS, et JavaScript pour la mise en page, avec intégration de fonctionnalités interactives liées aux jeux.",
    },
];

const Experience: React.FC = () => {
    return (
        <Fragment>
            <div className="entete flex gap-4 text-center">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className={`${s.logoo} `}>
                    <FaBriefcase size={20} color="rgb(183, 153, 80)" />
                </motion.div>
                <div className="tille">
                    <h3 className="text-3xl font-semibold tracking-wide">Exprérience</h3>
                </div>
            </div>

            <section className="text-white">
                <div className="container max-w-5xl py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className={`${s.ligne} col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-lignecolor`}>
                                {Dataeducation.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${s.boribory}`}
                                    >
                                        <h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
                                        <time className={`${s.date} text-xl font-semibold tracking-wide uppercase`}>{item.date}</time>

                                        <p className="mt-3">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Experience;

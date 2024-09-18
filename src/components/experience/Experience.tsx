import { Fragment } from "react/jsx-runtime"
import { FaBriefcase } from 'react-icons/fa';
import s from "./experience.module.css";
import { motion } from 'framer-motion';


interface EducationItem {
    date: string;
    title: string;
    description: string;
}

const Dataeducation: EducationItem[] = [
    {
        date: '2022 - 2024',
        title: 'Institut Supérieur Polytechhnique de Madagascar',
        description: "Étudiant en 2ème année à l'Institut Supérieur Polytechnique de Madagascar, je viens de passer en Licence 3 (L3) dans la filière Informatique. ",
    },
    {
        date: '2022 - 2023',
        title: 'Alliance française ',
        description: 'Je suis également titulaire des diplômes DELF/DALF B1 et B2, attestant de mes compétences en français',
    },
    {
        date: '2021 - 2022',
        title: 'Lycée saint joseph de cluny',
        description: " Titulaire d'un baccalauréat série D obtenu au lycée Saint Joseph de Cluny",
    },
];

const Experience: React.FC = () => {
    return (
        <Fragment>
            <div className="entete flex gap-4 text-center">
                <motion.div
                    animate={{ scale: [1 ,1.1, 1 ]   }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className={`${s.logoo} `} >
                    <FaBriefcase size={20} color="rgb(183, 153, 80)" />
                </motion.div>
                <div className="tille">
                    <h3 className="text-3xl font-semibold tracking-wide">Exprérience</h3>
                </div>
            </div>



            <section className=" text-white">
                <div className="container max-w-5xl  py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className={`${s.ligne}  col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-lignecolor `}>
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

export default Experience
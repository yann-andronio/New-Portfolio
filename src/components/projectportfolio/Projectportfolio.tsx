import { Fragment } from "react";
import s from "./projectportfolio.module.css";
import { useState } from "react";
import Dataporfolioproject from "../../data/Dataporfolioproject";
import { projectItems } from "../../data/Dataporfolioproject";
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import {MoonLoader} from "react-spinners";


const Projectportfolio: React.FC = () => {
    const [Dataptojectfilter, Setdataprojectfilter] = useState<projectItems[]>(Dataporfolioproject);
    const [Typeactive, settypeactive] = useState<string>("Tout");
    const [loadingimage, setLoadingimage] = useState<boolean>(true);

    const Filtebytype = (type: string) => {
        settypeactive(type);
        const Filtercardproject = Dataporfolioproject.filter(item => item.type === type);
        Setdataprojectfilter(type === "Tout" ? Dataporfolioproject : Filtercardproject);
    };

    const handleImageLoad = () => {
        setLoadingimage(false);
    };

    return (
        <Fragment>

            <div className={`${s.tabfilter} flex gap-8`}>
                <h1
                    onClick={() => Filtebytype("Tout")}
                    className={` font-semibold text-xl cursor-pointer ${Typeactive === "Tout" ? s.active : s.nonactivve}`}
                >
                    Tout
                </h1>
                <h1
                    onClick={() => Filtebytype("Web")}
                    className={` font-semibold text-xl cursor-pointer hidden md:block lg:block   ${Typeactive === "Web" ? s.active : s.nonactivve}`}
                >
                    Site web
                </h1>
                <h1
                    onClick={() => Filtebytype("Web")}
                    className={` font-semibold text-xl cursor-pointer lg:hidden md:hidden ${Typeactive === "Web" ? s.active : s.nonactivve}`}
                >
                    web
                </h1>
                {/* <h1
                    onClick={() => Filtebytype("Mobile")}
                    className={` font-semibold text-xl cursor-pointer  hidden md:block lg:block  ${Typeactive === "Mobile" ? s.active : s.nonactivve}`}
                >
                    Application mobile
                </h1>
                <h1
                    onClick={() => Filtebytype("Mobile")}
                    className={` font-semibold text-xl cursor-pointer  lg:hidden md:hidden  ${Typeactive === "Mobile" ? s.active : s.nonactivve}`}
                >
                     mobile
                </h1> */}
                <h1
                    onClick={() => Filtebytype("Jeux vidéo")}
                    className={` font-semibold text-xl cursor-pointer  hidden md:block lg:block  ${Typeactive === "Jeux vidéo" ? s.active : s.nonactivve}`}
                >
                    Jeux vidéo
                </h1>
                <h1
                    onClick={() => Filtebytype("Jeux vidéo")}
                    className={` font-semibold text-xl cursor-pointer lg:hidden md:hidden  ${Typeactive === "Jeux vidéo" ? s.active : s.nonactivve}`}
                >
                    Jeux
                </h1>
            </div>


            <div className={`${s.projectList} mb-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
                {Dataptojectfilter.map((item, index) => (
                    <motion.div
                        key={item.id}
                        // micompte be ty oblige  nle id
                        className={`${s.projectCard} rounded-3xl p-4`}
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -30 }}
                        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 150 }}
                    >
                        {loadingimage && (
                            <div className={s.spinnerContainer}>
                                <MoonLoader color="#9f7126" size={100}  loading={loadingimage} />
                            </div>
                        )}
                        <img
                            src={`./image/projet/${item.image}.png`}
                            alt={item.name}
                            className={`${s.projectImage} rounded-lg `}
                            onLoad={handleImageLoad}
                        />
                        <h2 className={`${s.projectName} font-bold text-2xl text-gray-300 mt-2`}>{item.name}</h2>
                        <h3 className={`${s.projectType} text-base `}>{item.type}</h3>
                        <div className={`${s.icons} flex gap-5 mt-4 `}>
                            {item.langageIcons.map((LangIcon, index) => {
                                const IconComponent = LangIcon.icon;
                                return (
                                    <IconComponent key={index} size={30} style={{ color: LangIcon.color }} />
                                );
                            })}
                        </div>
                        <a
                            href={item.link}
                            className={`${s.linkvoir} mt-4 inline-flex items-center`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Voir le projet <FiExternalLink className="ml-2" size={18} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </Fragment>
    );
};

export default Projectportfolio;

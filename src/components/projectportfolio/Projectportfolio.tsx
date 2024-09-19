import { Fragment } from "react";
import s from "./projectportfolio.module.css";
import { useState } from "react";
import Dataporfolioproject from "../../data/Dataporfolioproject";
import { projectItems } from "../../data/Dataporfolioproject";

const Projectportfolio: React.FC = () => {
    const [Dataptojectfilter, Setdataprojectfilter] = useState<projectItems[]>(Dataporfolioproject);
    const [Typeactive, settypeactive] = useState<string>("Tout");

    const Filtebytype = (type: string) => {
        settypeactive(type);
        const Filtercardproject = Dataporfolioproject.filter(item => item.type === type);
        Setdataprojectfilter(type === "Tout" ? Dataporfolioproject : Filtercardproject);
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
                    className={` font-semibold text-xl cursor-pointer ${Typeactive === "Web" ? s.active  : s.nonactivve}`}
                >
                    Site web
                </h1>
                <h1 
                    onClick={() => Filtebytype("Mobile")} 
                    className={` font-semibold text-xl cursor-pointer ${Typeactive === "Mobile" ? s.active : s.nonactivve}`}
                >
                    Application mobile
                </h1>
                <h1 
                    onClick={() => Filtebytype("Jeux vidéo")} 
                    className={` font-semibold text-xl cursor-pointer ${Typeactive === "Jeux vidéo" ? s.active : s.nonactivve}`}
                >
                    Jeux vidéo
                </h1>
            </div>

           
            <div className={`${s.projectList}`}>
                {Dataptojectfilter.map((item, index) => (
                    <div key={index} className={s.projectCard}>
                        <img src={`./image/projet/${item.image}.png`} alt={item.name} className={s.projectImage} />
                        <h2 className={s.projectName}>{item.name}</h2>
                        <h3 className={s.projectType}>{item.type}</h3>
                        <div className={s.icons}>
                            {item.langageIcons.map((LangIcon, i) => {
                                const IconComponent = LangIcon.icon;
                                return (
                                    <IconComponent key={i} size={30} style={{ color: LangIcon.color }} />
                                );
                            })}
                        </div>
                        <a href={item.link} className={s.projectLink} target="_blank" rel="noopener noreferrer">
                            Voir le projet
                        </a>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Projectportfolio;

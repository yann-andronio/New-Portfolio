import { Fragment } from "react/jsx-runtime"
import { useState } from "react";
import Datacompetence from "../../data/Datacompetences";
import { SkillItems } from "../../data/Datacompetences";
import s from "./competence.module.css";

const Competences: React.FC = () => {


    const [datacompetence] = useState<SkillItems[]>(Datacompetence)
    return (
        <Fragment>
            <div className=" gap-4  text-gray-400">
                <h1 className="font-bold text-3xl text-white pb-12 pt-12">Mes compétences</h1>

                <div className={`${s.boxparentskills} grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-10`}>
                    {datacompetence.map((item, index) => (
                        <div className={`${s.boxchildparents}  rounded-lg  `} key={index} >
                            <div className={`${s.childbox} flex items-center   `}
                             style={{ animationDelay: `${index * 0.5}s` }}>
                                <div className="flex items-center justify-center rounded-full p-3 ">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-white text-md">{item.name}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}
export default Competences
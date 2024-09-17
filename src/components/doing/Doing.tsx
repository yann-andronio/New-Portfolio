import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Datadoing from "../../data/DataDoing";
import s from "./doing.module.css";
import { DoingItems } from "../../data/DataDoing";

const Doing: React.FC = () => {
    const [datadoing] = useState<DoingItems[]>(Datadoing);

    return (
        <Fragment>
            <div className=" gap-6  text-gray-400">
                <h1 className="font-bold text-3xl text-white pb-12">Que Fais-je ?</h1>

                <div className={`${s.boxparentsdoing} grid grid-cols-1 sm:grid-cols-2 gap-6`}>
                    {datadoing.map((item, index) => (
                        <div className={`${s.boxchildparents}  rounded-lg p-8`} key={index} >
                            <div className={`${s.childbox} flex items-center gap-4`}>
                                <div className="flex items-center justify-center rounded-full p-3 ">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-white text-md">{item.name}</p>
                                    <p className="text-gray-300 text-sm">{item.info}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Doing;

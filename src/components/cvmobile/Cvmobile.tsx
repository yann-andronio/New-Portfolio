import { Fragment } from "react/jsx-runtime";
import s from "./cvmobile.module.css";
import { useState } from 'react';
import DataAdresse from '../../data/DataAdresse';
import { AdresseItem } from '../../data/DataAdresse';
import { FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import DataSocialmedia from '../../data/DataSocialmedia';
import { MediaItems } from '../../data/DataSocialmedia';


const Cvmobile: React.FC = () => {
    const [dataAdresse] = useState<AdresseItem[]>(DataAdresse);
    const [dataSocialmedia] = useState<MediaItems[]>(DataSocialmedia);
    const [isOpen, setIsOpen] = useState<boolean>(false);

  



    return (
        <Fragment>
            <div className={`${s.boxparents} max-w-96 rounded-xl shadow-lg relative`}>
                <div className={`${s.childbox} flex flex-col w-full justify-center items-center h-full `}>
                    <div className={`${s.profil} px-24 pt-4`}>
                    {/* {loadingprofil && (
                            <div className={s.spinnerContainer}>
                                <GridLoader color="#9f7126" size={25} loading={loadingprofil} />
                            </div>
                        )} */}
                        <img src="./image/4.png" width="100%" alt="" className=""  />
                    </div>
                    <div className={`${s.name} flex flex-col justify-center items-center px-10 py-5`}>
                        <div className={`${s.fullname} flex justify-center font-semibold text-white items-center`}>
                            <h1>TODIVELO Yann Andronio</h1>
                        </div>
                        <div className={`${s.function} flex justify-center font-semibold text-gray-400 mt-3 p-2 rounded-lg text-xl`}>
                            <h2>Full Stack Developer JS</h2>
                        </div>
                    </div>


                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${s.btnopen} flex items-center justify-center rounded-full p-3 my-3 text-white `}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        >
                            <FaReact color="#61DAFB" size={30} />
                        </motion.div>
                    </motion.button>


                    <motion.div
                        className={`${s.adresse}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {dataAdresse.map((item, index) => (
                            <div className={`${s.boxparentsadress} flex gap-5`} key={index}>
                                <a href={item.href} className={`${s.icones} flex items-center justify-center rounded-full p-3 my-3 bg-gray-700 text-white hover:bg-gray-600`}>
                                    {item.icon}
                                </a>
                                <div className={`${s.info} flex flex-col justify-center`}>
                                    <p className="text-white text-md">{item.type}</p>
                                    <p className="text-gray-300 text-sm font-normal">{item.info}</p>
                                </div>
                            </div>
                        ))}

                        <div className={`${s.socialmedia} flex justify-center gap-4 p-5`}>
                            {dataSocialmedia.map((item, index) => (
                                <a key={index} href={item.link} target="_blank" className="transition-transform duration-300 hover:scale-125">
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <div className={`${s.CV} flex justify-center font-semibold mt-3 z-50 p-2 rounded-lg text-xl`}>
                        <a href="./CV/curriculumvitae.pdf">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Cvmobile;

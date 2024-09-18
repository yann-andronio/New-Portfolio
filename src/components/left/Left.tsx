import { Fragment } from 'react';
import s from './left.module.css';
import { useState } from 'react';
import DataAdresse from '../../data/DataAdresse';
import { AdresseItem } from '../../data/DataAdresse';
// import DataSocialmedia from '../../data/DataSocialmedia';
// import { MediaItems } from '../../data/DataSocialmedia';

const Left: React.FC = () => {
    const [dataAdresse] = useState<AdresseItem[]>(DataAdresse);
    // const [dataSocialmedia] = useState<MediaItems[]>(DataSocialmedia);

    return (
        <Fragment>
            <div className={`${s.boxparents} rounded-xl shadow-lg `}>
                <div className={`${s.childbox} flex flex-col w-full justify-center items-center  h-full`}>
                    <div className={`${s.profil} px-24 pt-4`}>
                        <img src="./image/11.jpg" width="100%" alt="" className="" />
                    </div>
                    <div className={`${s.name} flex flex-col justify-center items-center px-10 py-5`}>
                        <div className={`${s.fullname} flex justify-center font-semibold text-white items-center `}>
                            <h1>TODIVELO Yann Andronio</h1>
                        </div>
                        <div className={`${s.function} flex justify-center font-semibold text-gray-400 mt-3 p-2 rounded-lg text-xl`}>
                            <h2>Full Stack Developer JS</h2>
                        </div>
                    </div>
                    <div className={`${s.adresse} `}>
                        {dataAdresse.map((item, index) => (
                            <div className={`${s.boxparentsadress} flex gap-5`} key={index}>
                                <a href={item.href}
                                    className={`${s.icones} flex items-center justify-center rounded-full p-3 my-3 `}
                                >
                                    {item.icon}
                                </a>
                                <div className={`${s.info} flex flex-col justify-center`}>
                                    <p className="text-white text-md">{item.type}</p>
                                    <p className="text-gray-300 text-sm font-normal">{item.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className={`${s.socialmedia} flex gap-4 p-5`}>
                        {dataSocialmedia.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" className="transition-transform duration-300 hover:scale-125">
                                {item.icon}
                            </a>
                        ))}
                    </div> */}

                    <div className={`${s.CV} flex justify-center font-semibold  mt-3 p-2 rounded-lg text-xl`}>
                        <a href="./CV/curriculumvitae.pdf"> Telecharger mon CV</a>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Left;

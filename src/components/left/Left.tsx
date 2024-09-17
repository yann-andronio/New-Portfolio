import { Fragment } from 'react'; // Correction de l'importation
import s from './left.module.css';
import { useState } from 'react';
import DataAdresse from '../../data/DataAdresse';
import { AdresseItem } from '../../data/DataAdresse';
import DataSocialmedia from '../../data/DataSocialmedia';
import { MediaItems } from '../../data/DataSocialmedia';

const Left: React.FC = () => {
    const [dataAdresse] = useState<AdresseItem[]>(DataAdresse);
    const [dataSocialmedia] = useState<MediaItems[]>(DataSocialmedia)

    return (
        <Fragment>
            <div className={`${s.boxparents} max-w-80 rounded-xl`}>
                <div className={`${s.childbox} flex flex-col w-full justify-center items-center `}>
                    <div className={`${s.profil} px-20 pt-10`}>
                        <img src="./image/1.png" width="100%" alt="" className="p-9" />
                    </div>
                    <div className={`${s.name} flex flex-col justify-center items-center px-10 py-10`}>
                        <div className={`${s.fullname} flex justify-center font-semibold text-white items-center text-4xl`}>
                            <h1>Yann Andronio</h1>
                        </div>
                        <div className={`${s.function} flex justify-center font-semibold text-gray-400 mt-3 p-2 rounded-lg text-2xl`}>
                            <h2>Full Stack Developer</h2>
                        </div>
                    </div>
                    <div className={`${s.adresse}`}>
                        {dataAdresse.map((item, index) => (
                            <div className={`${s.boxparentsadress} flex justify-start`} key={index}>
                                <div className={`${s.icon} flex rounded-lg p-2  my-5`} >
                                    {item.icon}
                                </div>
                                <div className={`${s.info}  flex flex-col justify-center pl-8`} >
                                    <p className='text-white text-2xl'>{item.type}</p>
                                    <p className=' text-white text-xl '>{item.info} </p>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`${s.socialmedia} flex  gap-4`}>
                        {
                            dataSocialmedia.map((item, index) => (
                                <a key={index} href={item.link} target="_blank" >
                                    {item.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Left;

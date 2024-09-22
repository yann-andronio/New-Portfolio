import { Fragment, useState } from "react";
import s from "./mapandcontact.module.css";
import { IoIosSend } from "react-icons/io";
import { MoonLoader } from "react-spinners";

// import Datasocialcontact from "../../data/Datasocialcontact";
// import { MediaItemscontact } from "../../data/Datasocialcontact";

interface Inputs {
    fullname?: string;
    email?: string;
    textarea?: string;
}

const Mapandecontact: React.FC = () => {
    // const [datasocialcontact] = useState<MediaItemscontact[]>(Datasocialcontact);
    const [inputs, setInputs] = useState<Inputs>({});
    const [loadingMap, SetloadingMap] = useState<boolean>(true);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputs((values) => ({
            ...values,
            [name]: value,
        }));
    };




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputs.fullname);

    };

    const handleImageLoad = () => {
        SetloadingMap(false);
    };


    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1761.062637291801!2d47.556397578627234!3d-18.922108120840083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d007a174a47%3A0x62a155fa55d89cce!2sJao's%20Pub!5e0!3m2!1sfr!2smg!4v1726839371820!5m2!1sfr!2smg";


    return (
        <Fragment>
            <div className={`${s.container} mb-10`}>
                <div className={`${s.description} text-center mb-6 p-4  `}>
                    <h1 className="text-3xl font-bold text-white">N'hésitez pas à me contacter si vous êtes intéressé !</h1>
                </div>

                {/* <div className={`${s.socialmedia} flex justify-center gap-6 p-5`}>
                    {datasocialcontact.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" className="transition-transform duration-300 hover:scale-125">
                            <div className="p-2 rounded-full  shadow hover:bg-gray-300">
                                {item.icon}
                            </div>
                        </a>
                    ))}
                </div> */}

            </div>



            <div className={`${s.contentmap}`} style={{ height: "450px", width: "100%", position: "relative" }}>

                {loadingMap && (
                    <div className={s.spinnerContainer}>
                        <MoonLoader color="#9f7126" size={50} loading={loadingMap} />
                    </div>
                )}
                <iframe

                    src={`${mapUrl}`}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "0.9rem " }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={handleImageLoad}

                ></iframe>
            </div>



            <div className="mt-11">
                <h1 className="mb-6 text-white text-3xl">Formulaire de contact</h1>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <div className="flex gap-10">
                            <div className="flex-1 mx-0 mb-1 sm:mb-4">
                                <input
                                    type="text"
                                    id="fullname"
                                    placeholder="Nom et prénom"
                                    className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                                    style={{ color: "whitesmoke", backgroundColor: "#2c2b27" }} name="fullname"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex-1 mx-0 mb-1 sm:mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Adresse email"
                                    className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                                    style={{ color: "whitesmoke", backgroundColor: "#2c2b27" }} name="email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mx-0 mb-1 sm:mb-4">
                            <textarea
                                id="textarea"
                                name="textarea"
                                onChange={handleChange}
                                cols={30}
                                rows={5}
                                placeholder="Écrivez votre message..."
                                className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                                style={{ color: "whitesmoke", backgroundColor: "#2c2b27" }}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className={`${s.logoo} text-white mb-7`}>
                            <button
                                type="submit"
                                className={`flex justify-center items-center  px-2 rounded-lg`}
                            >
                                <IoIosSend className="mr-2" />
                                Envoyer le message
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="thank-you text-center mt-4 mb-12">
                <p>Merci pour votre intérêt ! Je vous contacterai bientôt.</p>
            </div>
        </Fragment>
    );
};

export default Mapandecontact;

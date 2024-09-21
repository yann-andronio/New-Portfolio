import { Fragment } from "react";
import test1 from "../../assets/lotties/notfund.json";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import s from "./error.module.css";

const Error: React.FC = () => {
    return (
        <Fragment>
            <div className={`${s.erreur}  w-full h-screen flex justify-center items-center relative gap-6 flex-co`}>
                <Lottie animationData={test1} className={`${s.lottieanimation}`} />
                <Link to="/" className={`${s.errorlink} text-black text-3xl font-bold`}>
                    Retour à la page à propos
                </Link>
            </div>
        </Fragment>
    );
};

export default Error;

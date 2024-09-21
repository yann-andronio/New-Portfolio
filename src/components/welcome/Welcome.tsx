import { Fragment } from "react";
import welcomelottie from "../../assets/lotties/potfo.json";
import Lottie from "lottie-react";
import s from "./welcome.module.css";

const Welcome: React.FC = () => {
  return (
    <Fragment>
      <div className={`${s.welcomescreen}  w-full h-screen flex justify-center items-center fixed top-0 left-0`}>
        <Lottie animationData={welcomelottie} className={`${s.lottieanimation} w-full`} />
      </div>
    </Fragment>
  );
};

export default Welcome;

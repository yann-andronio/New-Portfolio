import { Fragment } from "react/jsx-runtime"
import s from "./about.module.css"
import Left from "../../components/left/Left"
import Rigth from "../../components/rigth/Rigth"

const About: React.FC = () => {


    return (
        <Fragment>
            <div className={`${s.Boxparents} `}>
                <div className={`${s.BoxChild} flex `}>
                    <div className={`${s.leftbox} fixed`}>
                        <Left />
                    </div>

                    <div className={`${s.rigthBox} ml-[28%] rounded-xl `}>
                        <Rigth />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default About
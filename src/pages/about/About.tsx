import { Fragment } from "react/jsx-runtime"
import s from "./about.module.css"
import Left from "../../components/left/Left"

const About: React.FC = () => {


    return (
        <Fragment>
            <div className={`${s.Boxparents}`}>
                <div className={`${s.BoxChild} flex`}>
                    <div className={`${s.leftbox}`}>
                        <Left />
                    </div>

                    <div className={`${s.rigthBox}`}>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default About
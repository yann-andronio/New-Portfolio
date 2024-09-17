import { Fragment } from "react/jsx-runtime"
import s from "./about.module.css"

const About: React.FC = () => {


    return (
        <Fragment>
            <div className={`${s.Boxparents}`}>
                <div className={`${s.BoxChild} flex`}>
                    <div className={`${s.leftbox}`}>

                    </div>

                    <div className={`${s.rigthBox}`}>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default About
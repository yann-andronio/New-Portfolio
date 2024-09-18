import { Fragment } from "react/jsx-runtime"
import Left from "../../components/left/Left"
import s from "./resume.module.css"
import Rigthresume from "../../components/rigthresume/Rigthresume"

const Resume: React.FC = () => {
    return (
        <Fragment>
            <div className={`${s.Boxparents} `}>
                <div className={`${s.BoxChild} flex  `}>
                    <div className={`${s.leftbox} fixed`}>
                        <Left />
                    </div>

                    <div className={`${s.rigthBox}  rounded-xl `}>
                        < Rigthresume />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Resume
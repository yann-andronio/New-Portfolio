import { Fragment } from "react/jsx-runtime"
import s from "./contact.module.css"
import Left from "../../components/left/Left"
import Rigthcontact from "../../components/rigthcontact/Rigthcontact"

const Contact: React.FC = () => {
    return (
        <Fragment>
            <div className={`${s.Boxparents} `}>
                <div className={`${s.BoxChild} flex  `}>
                    <div className={`${s.leftbox} fixed`}>
                        <Left />
                    </div>

                    <div className={`${s.rigthBox}  rounded-xl `}>
                        <Rigthcontact />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
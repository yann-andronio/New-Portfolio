import { Fragment } from "react/jsx-runtime"
import s from "./portfolio.module.css"
import Left from "../../components/left/Left"
import Rightportfolio from "../../components/rightportfolio/Rightportfolio"


const Portfolio: React.FC = () => {
    return (
        <Fragment>
 <div className={`${s.Boxparents} `}>
                <div className={`${s.BoxChild} flex  `}>
                    <div className={`${s.leftbox} fixed`}>
                        <Left />
                    </div>

                    <div className={`${s.rigthBox}  rounded-xl `}>
                        < Rightportfolio/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Portfolio
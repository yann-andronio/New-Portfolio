import { Fragment } from "react/jsx-runtime"
import Navbar from "../navbar/Navbar"
import s from "./rigthresume.module.css"
import Doing from "../doing/Doing"
import Competences from "../competences/Competences"
import Navmobile from "../navmobile/Navmobile"
import Cvmobile from "../cvmobile/Cvmobile"
import Education from "../education/Education"

const Rigthresume: React.FC = () => {
    return (
        <Fragment>

            <div className={`${s.boxparents}`}>
                <div className={`${s.navbar} relative`}>
                    <Navbar />
                </div>
                <div className={`${s.cvmobile}  `}>
                    <Cvmobile />
                </div>

                <div className={`${s.description} p-8 text-gray-400 relative`}>
                    <h1 className={`${s.titleabout} absolute font-bold  text-white pb-4`}>Mon parcours</h1>
                    <div className={`${s.descletter} mt-24`}>
                        <div className={`${s.educationbox} text-white leading-relaxed mb-4`}>
                            <Education />
                        </div>
                        <p className="text-base leading-relaxed mb-3">
                            Je suis aussi disponible pour des missions freelance ou pour travailler sur des projets intéressants. N'hésitez pas à me contacter si vous avez une idée de projet ou si vous voulez discuter d'une collaboration.
                        </p>

                        <Doing />
                        <Competences />

                    </div>
                </div>
                <div className={`${s.navbarmobiile} relative`}>
                    <Navmobile />
                </div>
            </div>

        </Fragment>
    )
}
export default Rigthresume
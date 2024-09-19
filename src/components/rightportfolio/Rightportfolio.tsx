import { Fragment } from "react/jsx-runtime"
import s from "./rigthportfolio.module.css"
import Navmobile from "../navmobile/Navmobile"
import Cvmobile from "../cvmobile/Cvmobile"
import Navbar from "../navbar/Navbar"
import Education from "../education/Education"
import Experience from "../experience/Experience"
import Skills from "../skills/Skills"

const Rightportfolio: React.FC = () => {
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
                    <h1 className={`${s.titleabout} absolute font-bold  text-white pb-4`}>Portfolio</h1>
                    <div className={`${s.descletter} mt-24`}>
                        <div className={`${s.educationbox} text-white leading-relaxed mb-4`}>
                            <Education />
                        </div>
                        <div className={`${s.experiencebox} text-white leading-relaxed mb-4`}>
                            <Experience />
                        </div>

                        <Skills />


                    </div>
                </div>
                <div className={`${s.navbarmobiile} relative`}>
                    <Navmobile />
                </div>
            </div>
        </Fragment>
    )
}
export default Rightportfolio
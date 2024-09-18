import { Fragment } from "react/jsx-runtime"
import Navbar from "../navbar/Navbar"
import s from "./rigthresume.module.css"
import Navmobile from "../navmobile/Navmobile"
import Cvmobile from "../cvmobile/Cvmobile"
import Education from "../education/Education"
import Experience from "../experience/Experience"
import Skills from "../skills/Skills"

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
                        <div className={`${s.experiencebox} text-white leading-relaxed mb-4`}>
                           <Experience />
                        </div>

                        <Skills/>
                      

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
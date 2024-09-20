import { Fragment } from "react/jsx-runtime"
import s from "./rigthcontact.module.css"
import Navmobile from "../navmobile/Navmobile"
import Cvmobile from "../cvmobile/Cvmobile"
import Navbar from "../navbar/Navbar"
import Mapandecontact from "../mapandcontact/Mapandecontact"


const Rigthcontact: React.FC = () => {
    return (
        <Fragment>
            <div className={`${s.boxparents}`}>
                <div className={`${s.navbar} relative`}>
                    <Navbar />
                </div>
                <div className={`${s.cvmobile}  `}>
                    <Cvmobile />
                </div>

                <div className={`${s.description} w-full p-8 text-gray-400 relative`}>
                    <h1 className={`${s.titleabout} absolute font-bold  text-white pb-4`}>Contact</h1>
                    <div className={`${s.descletter} mt-24`}>
                        <div className={`${s.educationbox} text-white leading-relaxed mb-4`}>

                            <Mapandecontact />
                        </div>



                    </div>
                </div>
                <div className={`${s.navbarmobiile} relative`}>
                    <Navmobile />
                </div>
            </div>
        </Fragment>
    )
}
export default Rigthcontact
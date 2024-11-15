import { Fragment } from "react/jsx-runtime"
import Navbar from "../navbar/Navbar"
import s from "./rigth.module.css"
import Doing from "../doing/Doing"
import Competences from "../competences/Competences"
import Navmobile from "../navmobile/Navmobile"
import Cvmobile from "../cvmobile/Cvmobile"

const Rigth: React.FC = () => {
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
               <h1 className={`${s.titleabout} absolute font-bold  text-white pb-4`}>À propos de moi</h1>
               <div className={`${s.descletter} mt-24`}>
                  <p className="text-base text-white leading-relaxed mb-4">
                     Je suis développeur full stack JavaScript, et j'adore créer des sites web et des applications. Je travaille avec des technologies comme React.js pour le front-end et Node.js pour le back-end, et j'utilise MongoDB pour gérer les données. Vous pouvez voir certains de mes projets dans mon portfolio.
                  </p>
                  <p className="text-base leading-relaxed mb-3 text-white">
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
export default Rigth
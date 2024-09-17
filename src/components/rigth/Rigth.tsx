import { Fragment } from "react/jsx-runtime"
import Navbar from "../navbar/Navbar"
import s from "./rigth.module.css"

const Rigth: React.FC = () => {
   return (
      <Fragment>

         <div className={`${s.boxparents}`}>
            <div className={`${s.navbar} relative`}>
               <Navbar />
            </div>
            <div className={`${s.description} p-4 text-gray-400`}>
               <h1 className={`${s.titleabout} relative font-bold text-4xl text-white py-4`}>À propos de moi</h1>
               <div className={`${s.descletter} mt-6`}>
               <p className="text-base leading-relaxed mb-4">
                     Je suis développeur full stack JavaScript, et j'adore créer des sites web et des applications. Je travaille avec des technologies comme React.js pour le front-end et Node.js pour le back-end, et j'utilise MongoDB pour gérer les données. Vous pouvez voir certains de mes projets dans mon portfolio. 
                  </p>
                  <p className="text-base leading-relaxed">
                     Je suis aussi disponible pour des missions freelance ou pour travailler sur des projets intéressants. N'hésitez pas à me contacter si vous avez une idée de projet ou si vous voulez discuter d'une collaboration.
                  </p>
               </div>
            </div>
         </div>

      </Fragment>
   )
}
export default Rigth
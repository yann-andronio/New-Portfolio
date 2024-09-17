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
            <div className={`${s.description} p-4 mt-16`}>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis ex neque sit est laboriosam ratione placeat quasi iusto amet!</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, labore! Voluptas recusandae ratione ducimus eius? Tempora, hic, distinctio molestiae ipsum dolorum cupiditate tempore, soluta animi aperiam alias ad perspiciatis molestias.</p>
            </div>
         </div>

      </Fragment>
   )
}
export default Rigth
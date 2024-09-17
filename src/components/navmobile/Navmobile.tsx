import { Fragment } from "react/jsx-runtime"
import { NavLink } from "react-router-dom"
import s from "./navmobile.module.css"

const Navmobile : React.FC = () => {
    return (
        <Fragment>
              <nav className={`${s.navparents} relative `}>
                <ul className={`${s.navNavLink} fixed flex justify-center gap-6 p-5   `}>
                    <li>  <NavLink to={"/"} className={(nav) => (nav.isActive ? s.active : s.Non_active)}  >Apropos </NavLink></li>
                    <li>  <NavLink to={"/resume"} className={(nav) => (nav.isActive ? s.active : s.Non_active)} >Résumé </NavLink></li>
                    <li>  <NavLink to={"/portfolio"} className={(nav) => (nav.isActive ? s.active : s.Non_active)} >Portfolio </NavLink></li>
                    <li>  <NavLink to={"/contact"} className={(nav) => (nav.isActive ? s.active : s.Non_active)} >Contact </NavLink></li>
                </ul>
            </nav>
        </Fragment>
    )
}
export default Navmobile
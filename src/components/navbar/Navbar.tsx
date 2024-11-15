import { NavLink } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import s from "./navbar.module.css"

const Navbar: React.FC = () => {



    return (
        <Fragment>
            <nav className={`${s.navparents} relative `}>
                <ul className={`${s.navNavLink} absolute flex justify-end gap-12    `}>
                    <li>  <NavLink to={"/"} className={(nav) => (nav.isActive ? s.active : s.Non_active)}  >A propos </NavLink></li>
                    <li>  <NavLink to={"/resume"} className={(nav) => (nav.isActive ? s.active : s.Non_active)} >Résumé </NavLink></li>
                    <li>  <NavLink to={"/portfolio"} className={(nav) => (nav.isActive ? s.active : s.Non_active)} >Portfolio </NavLink></li>
                    <li>  <NavLink to={"/contact"} className={(nav) => (nav.isActive ? s.active : s.Non_active)} >Contact </NavLink></li>
                    <li className={`${s.cvlink}`}> <a href="./CV/curriculumvitae.pdf" className={`${s.Non_active} `}> CV</a></li>
                </ul>

            </nav>
        </Fragment>
    )
}
export default Navbar
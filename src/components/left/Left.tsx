import { Fragment } from "react/jsx-runtime"
import s from "./left.module.css"

const Left: React.FC = () => {
    return (
        <Fragment>
            <div className={`${s.boxparents} max-w-lg`}>
                <div className={`${s.childbox} flex flex-col w-full justify-center `}>
                    <div className={`${s.profil}  px-20 py-10`}>
                        <img src="./image/1.png" width={`100%`} alt="" className="p-9" />
                    </div>
                    <div className={`${s.name}`}>

                    </div>
                    <div className={`${s.adresse}`}>

                    </div>
                    <div className={`${s.socialmedia}`}>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Left
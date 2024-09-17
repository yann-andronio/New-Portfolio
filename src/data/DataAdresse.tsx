import { ReactElement } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import { IoPhonePortraitSharp } from "react-icons/io5";


export interface AdresseItem {
    id: number;
    type: string;
    icon: ReactElement;
    info: string;
}


const DataAdresse: AdresseItem[] = [
    {
        id: 1,
        type: "Email",
        icon: <FaEnvelope color="#B79950" size={20}  />,
        info: "todiveloyannandronio@gmail.com"
    },
    {
        id: 2,
        type: "Phone",
        icon: <IoPhonePortraitSharp color="#B79950" size={20}  />,
        info: "+261 342290407"
    },
    {
        id: 3,
        type: "Localisation",
        icon: <FaMapMarkerAlt color="#B79950" size={20} />,
        info: "123 Main St, City, Country"
    },
    {
        id: 4,
        type: "Anniversaire",
        icon: <FaBirthdayCake color="#B79950" size={20}  />,
        info: "May 2, 2005"
    }
];

export default DataAdresse;

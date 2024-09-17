import { ReactElement } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoPhonePortraitSharp } from 'react-icons/io5';

export interface AdresseItem {
    id: number;
    type: string;
    icon: ReactElement;
    info: string;
    href: string; 
}

const DataAdresse: AdresseItem[] = [
    {
        id: 1,
        type: "Email",
        icon: <FaEnvelope color="#B79950" size={20} />,
        info: "todiveloyannandronio@gmail.com",
        href: "mailto:todiveloyannandronio@gmail.com" 
    },
    {
        id: 2,
        type: "Phone",
        icon: <IoPhonePortraitSharp color="#B79950" size={20} />,
        info: "+261 342290407",
        href: "tel:+261342290407" 
    },
    {
        id: 3,
        type: "Localisation",
        icon: <FaMapMarkerAlt color="#B79950" size={20} />,
        info: "Lot VT 3A Bis ZAI Andohanihato Ambohipo",
        href: "#" 
    }
];

export default DataAdresse;

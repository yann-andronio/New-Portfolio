import { ReactElement } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


export interface MediaItems {
  id: number;
  icon: ReactElement;
  link: string;
}


const DataSocialmedia: MediaItems[] = [
  {
    id: 1,
    icon: <FaFacebook color="#4267B2" size={40} />, 
    link: "https://www.facebook.com/"
  },
  {
    id: 2,
    icon: <FaInstagram color="#C13584" size={40} />, 
    link: "https://www.instagram.com/"
  },
  {
    id: 3,
    icon: <FaGithub color="#333" size={40} />,
    link: "https://github.com/yourprofile"
  },
  {
    id: 4,
    icon: <FaLinkedin color="#0077B5" size={40} />, 
    link: "https://www.linkedin.com/"
  }
];

export default DataSocialmedia;
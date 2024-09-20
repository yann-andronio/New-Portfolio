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
    icon: <FaFacebook color="whitesmoke" size={40} />, 
    link: "https://web.facebook.com/yann.youker"
  },
  {
    id: 2,
    icon: <FaInstagram color="whitesmoke" size={40} />, 
    link: "https://www.instagram.com/yann_andronio/"
  },
  {
    id: 3,
    icon: <FaGithub color="whitesmoke" size={40} />,
    link: "https://github.com/yann-andronio"
  },
  {
    id: 4,
    icon: <FaLinkedin color="whitesmoke" size={40} />, 
    link: "www.linkedin.com/in/yann-andronio-todivelo-💻-254615288"
  }
];

export default DataSocialmedia;

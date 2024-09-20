import { ReactElement } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export interface MediaItemscontact {
  id: number;
  icon: ReactElement;
  link: string;
}

const Datasocialcontact: MediaItemscontact[] = [
  {
    id: 1,
    icon: <FaFacebook size={40} color="#3b5998" />, 
    link: "https://web.facebook.com/yann.youker"
  },
  {
    id: 2,
    icon: <FaInstagram color="#e1306c" size={40} />, 
    link: "https://www.instagram.com/yann_andronio/"
  },
  {
    id: 3,
    icon: <FaGithub color="#333" size={40} />, 
    link: "https://github.com/yann-andronio"
  },
  {
    id: 4,
    icon: <FaLinkedin color="#0077b5" size={40} />, 
    link: "www.linkedin.com/in/yann-andronio-todivelo-💻-254615288"
  }
];

export default Datasocialcontact;

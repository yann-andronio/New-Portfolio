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
    link: "https://www.facebook.com/"
  },
  {
    id: 2,
    icon: <FaInstagram color="#e1306c" size={40} />, 
    link: "https://www.instagram.com/"
  },
  {
    id: 3,
    icon: <FaGithub color="#333" size={40} />, 
    link: "https://github.com/yourprofile"
  },
  {
    id: 4,
    icon: <FaLinkedin color="#0077b5" size={40} />, 
    link: "https://www.linkedin.com/"
  }
];

export default Datasocialcontact;

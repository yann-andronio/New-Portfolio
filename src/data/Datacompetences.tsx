import { ReactElement } from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiCsharp, SiAngular, SiNestjs, SiJavascript } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { FaBolt } from 'react-icons/fa';


export interface SkillItems {
  id: number;
  icon: ReactElement;
  name: string;
}

const Datacompetence: SkillItems[] = [
  {
    id: 1,
    icon: <FaHtml5 color="#E34F26" size={30} />,
    name: "HTML"
  },
  {
    id: 2,
    icon: <FaCss3Alt color="#1572B6" size={30} />,
    name: "CSS"
  },
  {
    id: 3,
    icon: <FaBootstrap color="#563D7C" size={30} />,
    name: "Bootstrap"
  },
  {
    id: 4,
    icon: <SiTailwindcss color="#06B6D4" size={30} />,
    name: "Tailwind CSS"
  },
  {
    id: 5,
    icon: <FaReact color="#61DAFB" size={30} />,
    name: "React.js"
  },
  {
    id: 6,
    icon: <FaNodeJs color="#68A063" size={30} />,
    name: "Node.js"
  },
  {
    id: 7,
    icon: <FaDatabase color="#47A248" size={30} />,
    name: "MongoDB"
  },
  {
    id: 8,
    icon: <SiCsharp color="#239120" size={30} />,
    name: "C# (Unity)"
  },
  {
    id: 9,
    icon: <SiAdobephotoshop color="#31A8FF" size={30} />,
    name: "Photoshop"
  },

  {
    id: 10,
    icon: <SiAngular color="#DD0031" size={30} />,
    name: "Angular"
  },
  {
    id: 11,
    icon: <SiNestjs color="#E0234E" size={30} />,
    name: "NestJS"
  },
  {
    id: 12,
    icon: <SiJavascript color="#F7DF1E" size={30} />,
    name: "JavaScript"
  }, 
  {
    id: 13,
    icon: <FaBolt color="#F7DF1E" size={30} />,
    name: "Vite"
  }
];

export default Datacompetence;

import { Fragment } from "react/jsx-runtime";
import s from "./skills.module.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaDatabase, } from 'react-icons/fa';
import { SiTailwindcss, SiCsharp, SiJavascript, SiExpress ,SiTypescript } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
const Skills: React.FC = () => {

    interface Dataskillsitem {
        name?: string;
        icon?: JSX.Element;
        progressbar?: number;
    }

    const Dataskills: Dataskillsitem[] = [
        {
            icon: <FaReact color="#61DAFB" size={30} />,
            name: "React.js",
            progressbar: 70
        },
        {
            icon: <FaHtml5 color="#E34F26" size={30} />,
            name: "HTML",
            progressbar: 85
        },
        {
            icon: <FaCss3Alt color="#1572B6" size={30} />,
            name: "CSS",
            progressbar: 85
        },
        {
            icon: <SiJavascript color="#F7DF1E" size={30} />,
            name: "JavaScript",
            progressbar: 70
        },
        {
            icon: <SiTailwindcss color="#06B6D4" size={30} />,
            name: "Tailwind CSS",
            progressbar: 60
        },
        {
            icon: <FaBootstrap color="#563D7C" size={30} />,
            name: "Bootstrap",
            progressbar: 65
        },
        {
            icon: <SiExpress color="#000000" size={30} />,
            name: "Express.js",
            progressbar: 50
        },
        {
            icon: <FaDatabase color="#47A248" size={30} />,
            name: "MongoDB",
            progressbar: 60
        },
        {
            icon: <SiCsharp color="#47A248" size={30} />,
            name: "C# (Unity)",
            progressbar: 55
        },
        {
            icon: <SiAdobephotoshop color="#31A8FF" size={30} />,
            name: "Photoshop",
            progressbar: 40
        },
        {
            icon: <SiTypescript color="#3178C6" size={30} />,
            name: "TypeScript",
            progressbar: 60
        },
    ];

    return (
        <Fragment>
            <div className=" mb-24">
                <h1 className="font-bold text-3xl text-white pb-12 pt-4">Compétences</h1>
                <div className={`${s.logoo}`}>
                    {Dataskills.map((item, index) => {
                        return (
                            <div className={`${s.childbox} flex items-center gap-4`} key={index}>
                                <div className={`${s.skillsname} flex items-center  gap-1`}>
                                    <div className="flex items-center justify-center rounded-full p-3">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-white text-md">{item.name}</p>
                                    </div>
                                </div>

                                <div className="flex-1 ml-4">
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-[rgb(183,153,80)] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: `${item.progressbar}%` }}
                                        >
                                            {item.progressbar}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Skills;

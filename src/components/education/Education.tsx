import { Fragment } from "react";
import s from "./education.module.css";

interface TimelineItem {
    date: string;
    title: string;
    description: string;
}

const timelineData: TimelineItem[] = [
    {
        date: '2022 - 2024',
        title: 'Institut Supérieur Polytechhnique de Madagascar',
        description: 'Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
    {
        date: 'Jul 2019',
        title: 'Aliquam sit amet nunc ut',
        description: 'Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.',
    },
    {
        date: 'Jan 2016',
        title: 'Pellentesque habitant morbi',
        description: 'Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.',
    },
];

const Education: React.FC = ()=> {
    return (
        <Fragment>
            <section className=" text-white">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className={`${s.ligne}  col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-lignecolor `}>
                                {timelineData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${s.boribory}`}
                                    >
                                        <h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
                                        <time className={`${s.date} text-xl font-semibold tracking-wide uppercase`}>{item.date}</time>
                                      
                                        <p className="mt-3">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Education ; 
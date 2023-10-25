import type { Project } from "@/.contentlayer/generated";
import React from "react";

type Props = {
	tags: string[];
	project: {
		slug: string;
		title: string;
		tags: string[];
		technos: string[];
		description: string | React.JSX.Element;

	};
	technos: string[];
};

interface TagButtonProps {
    title: string;
}

export const TagButton: React.FC<TagButtonProps> = ({ title }) => {
    const styles: React.CSSProperties = {
        display: 'inline-block',
        padding: '7px 18px',
        borderRadius: '20px',
        backgroundColor: 'transparent',
        color: '#c7b7b7',
        textAlign: 'center',
        cursor: 'default',
		border: title === "Front" ? '2px solid #0081AB' : '2px solid #7F4192' 
    };

    return <div style={styles}>{title}</div>;
};

export const Article: React.FC<Props> = ({ project, tags, technos }) => {
	return (
		<div>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center ">
					{/* <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date}
					</span> */}
					<span className="text-zinc-500 text-xs  flex items-center gap-1">
						{tags.map((tag, index) => {
							return <TagButton key={index} title={tag}/>;
						})}
					</span>
				</div>
				<h2 className="display flex mt-7 z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					<div className="pt-2">{project.title}</div>
					{project.title !== "Next Projet" ?
						<img 
							className="ml-2" 
							src={`images/projets/${project.title}.png`} 
							alt="" 
							width="50" 
							height="50" 
						/> : ""
					}
				</h2>
				<div className="z-20 mt-4 mb-8 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">

					{project.description}
				</div>
				<div className="mt-2 mb-2 display flex flex-wrap wrap">
				{project.title !== "Next Projet" ?
						technos.map((techno: string, index: number) => {
								return <img 
									className="mx-1 pt-1" 
									key={index} 
									src={techno} 
									alt="" 
									width="35" 
									height="35" 
								/>
						}) : <img 
						className="ml-2" 
						src="images/progress.png" 
						alt="" 
						width="150" 
					/>}
					</div>
			</article>

		</div>
	);
};

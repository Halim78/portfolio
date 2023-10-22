"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { useState } from "react";
import Drawer from "../components/drawer";

const certificationsOrganisms = [
	{
        image: "/cyberini.png",
		label: "Formation sécurité web",
		handle: "Cyberini",
	},
	{
        image: "/ocr.png",
		label: "Site de formation en ligne",
		handle: "OpenClassrooms",
	},
    {
        image: "/udemy.png",
		label: "Site de formation en ligne",
		handle: "Udemy",
	},
	{
        image: "/thm.png",
		label: "Plateforme d'apprrentissage de la cybersécurité",
		handle: "TryHackMe",
	},
];


const wildCodeSchoolCertification = [
	"/wcs.png",
];

const udemyCertifications = [
	"/certifications/udemy/kali.png",
	"/certifications/udemy/certification_docker.png",
	"/certifications/udemy/hacking_zscurity.jpg",
];

const thmCertifications = [
	"/certifications/thm/THM-intro_cyber.png",
	"/certifications/thm/THM-YQ7VRRDUNK.png",
];

const openClassRoomCertification = [
	"/certifications/ocr/apprendre_apprendre.png",
	"/certifications/ocr/fullstack_node.png",
	"/certifications/ocr/git_github.png",
	"/certifications/ocr/html_css.png",
	"/certifications/ocr/javascript.png",
	"/certifications/ocr/linux.png",
	"/certifications/ocr/mysql.png",
	"/certifications/ocr/sql.png",
	"/certifications/ocr/terminal.png",
	"/certifications/ocr/ux_design.png",
	"/certifications/ocr/ux_pratique.png",
	"/certifications/ocr/tcp_ip.png",
	"/certifications/ocr/system_info.png",
	"/certifications/ocr/univers_cyber.png",
	"/certifications/ocr/pentest.png",
	"/certifications/ocr/chef_SI.png",
];

const cyberiniCertification = [
	"/certifications/cyberini/certification_tosa.png",
];


export default function Example() {
	const [isOpen, setIsOpen] = useState(false);

	const [currentCertifications, setCurrentCertifications] = useState<string[]>([]);

	const openCloseDrawer=(val: boolean,  organismHandle: string)=>{
		const newStatus = (prevVal: boolean) => !prevVal;
		setIsOpen(newStatus);

		switch (organismHandle) {
			case "WildCodeSchool":
				setCurrentCertifications(wildCodeSchoolCertification);
				break;
			case "OpenClassrooms":
				setCurrentCertifications(openClassRoomCertification);
				break;
			case "Udemy":
				setCurrentCertifications(udemyCertifications);
				break;
			case "TryHackMe":
				setCurrentCertifications(thmCertifications);
				break;
			case "Cyberini":
				setCurrentCertifications(cyberiniCertification);
				break;
			default:
				setCurrentCertifications([]);
		}
	}

	const closeDrawerFromEveryWhere = () => {
		if (isOpen === true){
			setIsOpen(false);
		}
	}

	return (
        <div onClick={() => closeDrawerFromEveryWhere()} className="relative pb-16">
			<Navigation />
			<div  className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Certifications
					</h2>
					<p className="mt-4 text-zinc-400">
                    Voici les certificats obtenues pendant ma carrière et sur mon temps personnel.
					</p>
				</div>
				{/* <div className="w-full h-px bg-zinc-800" /> */}
				<Card >
					<span
						className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
						aria-hidden="true"
					/>
					<div style={{display: "flex", justifyContent: "space-around"}}>
						<span className="relative z-10 flex  ml-10 mt-3 items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
							<img 
								src="/wcs.png" 
								alt="" 
								style={{
									height: "50px", 
									width: "50px",
								}}
							/>
						</span>{" "}
						<div className="z-10 flex flex-col items-center">
							<span className="lg:text-xl pt-2 font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
								WildCodeSchool
							</span>
							<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
								Certifié avoir suivi la formation de Développeur Web spécialité Javascript sur une durée de 9 mois avec 4 mois de stage.
							</span>
						</div>
						<div></div>

					</div>
				</Card>
                <div className="grid w-full grid-cols-1 gap-4 mx-auto mt-16 sm:mt-0 sm:grid-cols-4 lg:gap-8">
					{certificationsOrganisms.map((s,index) => (
						<Card key={index} >
							<Link
                                href={""}
								onClick={() => openCloseDrawer(true,  s.handle)}
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									<img src={s.image} alt="" style={{height: "30px", width: "30px"}}/>
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
			<Drawer
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				image="/path/to/image.jpg"
				certifications={currentCertifications}
			/>
		</div>
	);
}

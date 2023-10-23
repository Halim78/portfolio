// import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article, TagButton } from "./article";


const data = [
	{
		slug: "unkey",
		title: "TPBP",
		tags: ["Front"],
		technos: ["images/technos/vue.png", "images/technos/php.png", "images/technos/mysql.png", "images/technos/kanbane.png", "images/technos/git.png", "images/technos/github.png",  "images/technos/gitlab.png", "images/technos/cypress.png", "images/technos/storybook.png"],
		date: "Janvier - Juillet 2022",
		description: `CRM | Participation à la refonte du front d'un logiciel de gestion de client 
		d'une grande banque Française. Sprint review hebdomadaire, daily meetings, et peer review. 
		Équipe mixte avec 4 développeurs chez SEAROCCO côté front (dont j'ai fait partie) et 
		3 développeurs côté back et 1 Product Owner chez le client.`
	},
	{
		slug: "unkey1",
		title: "PRIMONIAL",
		tags: ["Front", "Back"],
		technos: ["images/technos/angular.png", "images/technos/php.png", "images/technos/mysql.png", "images/technos/kanbane.png", "images/technos/jira.png", "images/technos/git.png", "images/technos/github.png"],
		date: "Janvier - Juillet 2022",
		description: `Participation à la conception du socle technique pour une application
		bancaire. Intégration front en Ionic, réalisation de graphiques avec Chart.js
		& utilisation d'APIs pour la gestion de portefeuilles financiers.`,
	},
	{
		slug: "unkey2",
		title: "TWOCHECK",
		tags: ["Front", "Back"],
		technos: ["images/technos/vue.png", "images/technos/php.png", "images/technos/kanbane.png", "images/technos/mysql.png", "images/technos/jira.png", "images/technos/git.png", "images/technos/github.png"],
		date: "Janvier - Juillet 2022",
		description: `CRM | Participation à l'évolution d'un logiciel de courtier pour la gestion de
		projet du devis à la signature. Intégration et restructuration du front et
		back. Prise de RDV, téléchargement de document, signature et suivi dossier.
		`,
	},
	{
		slug: "unkey3",
		title: "SCANN'APP",
		tags: ["Front"],
		technos: ["images/technos/flutter.png", "images/technos/firebase.png", "images/technos/google_maps.png", "images/technos/kanbane.png", "images/technos/sqlite.png", "images/technos/git.png", "images/technos/github.png"],
		date: "Janvier - Juillet 2022",
		description: `Conception d'une application mobile de scan pour l'automatisation de la
		logistique. Création et intégration du front et back. Scannage simple ou multiple à l'affilé, création de
		fichier csv répertoriant tous les éléments scannés et envoi par mail.`
	},
	// {
	// 	slug: "planetfall66",
	// 	title: "SCRAPJOB",
	// 	tags: ["Front", "Back"],
	// 	technos: ["images/technos/react.png", "images/technos/next.png", "images/technos/node.png", "images/technos/kanbane.png", "images/technos/mongoDB.png", "images/technos/git.png", "images/technos/github.png"],
	// 	date: "Janvier - Juillet 2022",
	// 	description: `Conception et création from scratch d'un logiciel conçu pour centraliser la recherche d'emplois dans le secteur tech. En parcourant plusieurs sites proposant des offres d'emploi, 
	// 	notre application collecte et rassemble toutes les annonces en un seul et unique endroit. L'idée m'est venue de ma propre expérience : j'ai passé des heures à naviguer, 
	// 	filtrer et rechercher sur différents sites lors de ma quête d'un nouvel emploi. 
	// 	Avec SCRAPJOB, fini la perte de temps et la nécessité de jongler entre plusieurs applications. 
	// 	On peut désormais simplifier la recherche d'emploi.`
	// },
	{
		slug: "planetfall",
		title: "MMA",
		tags: ["Front", "Back"],
		technos: ["images/technos/react.png", "images/technos/node.png", "images/technos/firebase.png", "images/technos/kanbane.png", "images/technos/google_maps.png", "images/technos/git.png", "images/technos/github.png", "images/technos/flutter.png", "images/technos/sqlite.png" ],
		date: "Janvier - Juillet 2022",
		description: `CRM | Développement intégral, front-end et back-end, d'une plateforme pour une agence de mannequins. 
		Mise en place de fonctionnalités avancées pour la gestion des profils des mannequins dans la section back-office. 
		Parallèlement, développement d'une application mobile axée sur l'utilisateur, 
		offrant des fonctionnalités telles que la gestion de compte, la sélection de castings, 
		et la possibilité d'échanger directement avec son interlocuteur via l'application.
		Intégration de data depuis WORDPRESS `,
	},
	{
		slug: "planetfall1",
		title: "CLOUDPACK",
		tags: ["Front", "Back"],
		technos: ["images/technos/react.png", "images/technos/node.png", "images/technos/kanbane.png", "images/technos/mysql.png", "images/technos/typescript.png", "images/technos/git.png", "images/technos/github.png"],
		date: "Janvier - Juillet 2022",
		description: `SAAS | Création d'un outil de suivi de projet et de gestion des employés.
		Conception du front et back from scratch`,
	},
	{
		slug: "planetfall2",
		title: "ONSSA",
		tags: ["Front", "Back"],
		technos: ["images/technos/flutter.png", "images/technos/firebase.png", "images/technos/sqlite.png",  "images/technos/kanbane.png", "images/technos/google_maps.png", "images/technos/git.png", "images/technos/github.png"],
		date: "Janvier - Juillet 2022",
		description: `Conception d'une application mobile agroalimentaire pour un organisme
		d'état à l'étranger. Permet la remonté d'information avec localisation et
		images. Création et intégration du front et back.`,
	},
	{
		slug: "planetfall33",
		title: "ITRADE999",
		tags: ["Front", "Back"],
		technos: ["images/technos/react.png", "images/technos/node.png", "images/technos/material-ui.png",  "images/technos/kanbane.png", "images/technos/mysql.png", "images/technos/git.png", "images/technos/github.png"],
		date: "Janvier - Juillet 2022",
		description: `Conception intégrale d'une application de crypto-monnaie. Création d'un
		site web comprenant un suivi en temps réel des cours du marché, ainsi
		qu'une section dédiée à la gestion des portefeuilles clients.
		`,
	},
	{
		slug: "planetfall4",
		title: "COLIS-TRACK",
		tags: ["Front", "Back"],
		technos: ["images/technos/javascript.png", "images/technos/jquery.png", "images/technos/bootstrap.png", "images/technos/mysql.png", "images/technos/google_maps.png", "images/technos/git.png", "images/technos/github.png"],
		date: "Janvier - Juillet 2022",
		description: `Application innovante de suivi de colis, permettant une visualisation en temps réel des envois internationaux sur un globe interactif. 
		Selon le mode de transport - avion ou bateau - un icône approprié trace le parcours du colis. 
		Construite avec les puissantes API Google Maps et Flight, cette plateforme assure précision et réactivité. `
	},
	{
		slug: "planetfall5",
		title: "PORTFOLIO",
		tags: ["Front"],
		technos: ["images/technos/react.png", "images/technos/next.png", "images/technos/tailwind.png", "images/technos/typescript.png", "images/technos/git.png", "images/technos/github.png"],
		date: "Janvier - Juillet 2022",
		description: `Application innovante de suivi de colis, permettant une visualisation en temps réel des envois internationaux sur un globe interactif. 
		Selon le mode de transport - avion ou bateau - un icône approprié trace le parcours du colis. 
		Construite avec les puissantes API Google Maps et Flight, cette plateforme assure précision et réactivité. `
	},
  ];
export default async function ProjectsPage() {
	const featured = data.find((project) => project.slug === "unkey")!;
	const top2 = data.find((project) => project.slug === "planetfall")!;
	
	const sorted = data
	  .filter((project) => project.slug !== featured.slug && project.slug !== top2.slug);

	  return (
		<div className="relative pb-16 " style={{backgroundColor: "black"}}>
		  <Navigation />
		  <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
			<div className="max-w-2xl mx-auto lg:mx-0">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projets</h2>
			  	<p className="mt-4 text-zinc-400">
				  	J'ai activement participé au développement des projets que vous trouverez ci-dessous au cours de ces dernières années. 
					Je suis heureux de partager avec vous des détails sur les technologies utilisées, leur orientation (front-end ou back-end), ainsi que sur la nature précise de mon implication.<br/>
					J'espère que cela vous donnera une meilleure idée de mes compétences et de ma passion pour le développement.
				</p>
			</div>
			<div className="w-full h-px bg-zinc-800" />
	
			<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
			  <Card>
				{/* <Link href={`/projects/${featured.slug}`}> */}
				<div>
				  <article className="relative w-full h-full p-4 md:p-8">
					<div className="flex items-center justify-between gap-2">
					  <div className="text-xs text-zinc-100">
						{featured.date}
					  </div>
					  <span className="flex items-center gap-1 text-xs text-zinc-500">
						Participation 
						{featured.tags.map((tag, index) => {
							return <TagButton key={index} title={tag}/>;
						})}
					  </span>
					</div>
	
					<h2 id="featured-post" className="display flex mt-8 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
					  	{featured.title}
					  	<img 
							className="mx-2 pl-2" 
							src="images/projets/lcl.png" 
							alt="" 
							width="45" 
							height="35" 
						/>
					</h2>
					<p className="mt-4 mb-8 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">{featured.description}</p>
					
					<div className="mt-2 mb-2 display flex flex-wrap wrap">
						{featured.technos.map((techno, index) => {
							return <img 
								className="mx-1" 
								key={index} 
								src={techno} 
								alt="" 
								width="35" 
								height="35" 
							/>;
						})}
					</div>
				  </article>
				</div>
			  </Card>
	
			  <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
				{[top2].map((project) => (
				  <Card key={project.slug}>
					<Article project={project} tags={project.tags} />
				  </Card>
				))}
			  </div>
			</div>
	
			<div className="hidden w-full h-px md:block bg-zinc-800" />
	
			<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
			  <div className="grid grid-cols-1 gap-4">
				{sorted.filter((_, i) => i % 3 === 0).map((project) => (
				  <Card key={project.slug}>
					<Article project={project} tags={project.tags}   />
				  </Card>
				))}
			  </div>
			  <div className="grid grid-cols-1 gap-4">
				{sorted.filter((_, i) => i % 3 === 1).map((project) => (
				  <Card key={project.slug}>
					<Article project={project} tags={project.tags}  />
				  </Card>
				))}
			  </div>
			  <div className="grid grid-cols-1 gap-4">
				{sorted.filter((_, i) => i % 3 === 2).map((project) => (
				  <Card key={project.slug}>
					<Article project={project} tags={project.tags}  />
				  </Card>
				))}
			  </div>
			</div>
		  </div>
		</div>
	);
}
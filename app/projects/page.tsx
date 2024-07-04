"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article, TagButton } from "./article";
import React, { useState } from "react";

const TPBPDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // if(typeof window !== 'undefined'){
  // 	console.log("UNDEFINED WINDOW");
  // }else {
  // 	console.log("IN WINDOW !!!!!!");
  // }

  return (
    <div>
      <p>
        <b>CRM |</b>
      </p>
      <p>
        Participation à la refonte d'un logiciel de gestion de client d'une
        grande banque Française. Au sein d'une équipe chez SEAROCCO, nous
        collaborions étroitement en suivant une méthodologie Agile, marquée par
        des sprint reviews hebdomadaires, des daily meetings et des sessions
        régulières de peer review.
      </p>
      <br />
      <p>
        L'équipe chez SEAROCCO était composée de 4 développeurs front-end, y
        compris moi-même. Du côté du client, nous avions la chance de travailler
        avec 3 développeurs back-end et un Product Owner dédié.
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            <b>Mes principales contributions comprenaient:</b>
          </p>
          <ul style={{ listStyleType: "circle" }}>
            <li>
              Développement de nouvelles fonctionnalités pour enrichir
              l'expérience utilisateur.
            </li>
            <li>
              Intégration de données en utilisant des APIs REST pour récupérer
              et afficher des informations en temps réel depuis le back-end.
            </li>
            <li>
              Optimisation de l'interface pour assurer une expérience
              utilisateur fluide sur tous les appareils grâce à la mise en œuvre
              de techniques responsive.
            </li>
            <li>
              Débogage et résolution de problèmes sur diverses pages pour
              garantir la stabilité et la fiabilité de l'application.
            </li>
            <li>
              <b>Tests</b> <br />
              J'ai employé Cypress pour la réalisation de tests end-to-end et
              Storybook pour visualiser et tester les composants
              individuellement.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const MMADescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>
        <b>CRM |</b>
      </p>
      <p>
        Conception et développement complet d'une plateforme dédiée à une agence
        de mannequins, couplée à une application mobile
      </p>
      <br />
      <p>
        L'équipe chez SEAROCCO était composée de 4 développeurs front-end y
        compris moi-même et 2 développeurs back-end, en plus du tech lead.
      </p>
      <br />
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            <b>Mes principales contributions comprenaient:</b>
          </p>
          <b>Back-office</b> <br />
          Contribution active à la mise en œuvre de fonctionnalités
          sophistiquées pour la gestion des profils de mannequins. Cela englobe
          la création d'utilisateurs, le suivi des abonnements, ainsi que la
          gestion et le suivi des castings.
          <br />
          <br />
          <b>Application mobile</b> <br />
          J'ai piloté le développement front-end et back-end d'une application
          orientée utilisateur offrant :
          <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
            <li>Une interface intuitive pour la gestion de compte.</li>
            <li>
              Une plateforme de sélection et suivi de castings en temps réel.
            </li>
            <li>
              Une fonction de parrainage via un lien privé pour promouvoir
              l'application.
            </li>
            <li>Une intégration d'iframe dédiée à la section d'abonnement.</li>
            <li>
              Une option de communication directe permettant aux utilisateurs
              d'échanger avec leurs interlocuteurs sans quitter l'application.
            </li>
            <li>Création des APIs nécessaires</li>
            <br />
          </ul>
          <b>Intégration</b> <br />
          Les données relatives aux castings ont été harmonieusement intégrées
          via une API WordPress.
        </div>
      )}
    </div>
  );
};

const PrimonialDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>
        Conception du socle technique d'une application bancaire destinée à la
        gestion de patrimoine
      </p>
      <br />
      <p>
        L'équipe chez SEAROCCO était composée de 2 développeurs front-end y
        compris moi-même et 2 développeurs back-end, en plus du product owner
        chez le client.
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            Cette application permet une gestion efficace des comptes et des
            établissements financiers.
          </p>
          <br />
          <p>
            <b>Mes principales contributions:</b>
          </p>
          <p>
            J'ai intégré l'interface utilisateur en utilisant Ionic et développé
            des représentations graphiques avec Chart.js, offrant une analyse
            détaillée du patrimoine financier.
            <br />
            Ces graphiques fournissent également une visualisation géographique
            des investissements. De plus, j'ai incorporé des APIs bancaires
            externes pour optimiser la gestion des portefeuilles financiers.
          </p>
        </div>
      )}
    </div>
  );
};

const TwoCheckDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>
        <b>CRM |</b>
      </p>
      <p>Contribution à la modernisation d'un logiciel destiné aux courtiers</p>
      <br />
      <p>
        L'équipe chez SEAROCCO était composée de 2 développeurs front-end y
        compris moi-même et 1 développeurs back-end, en plus du tech lead.
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            Ce logiciel couvrait l'ensemble du processus de gestion de projet,
            depuis la création du devis jusqu'à la signature finale
          </p>
          <br />
          <p>
            <b>
              Mes responsabilités incluaient l'intégration et la restructuration
              tant du front-end que du back-end:
            </b>
          </p>
          <br />
          <b>J'ai mis en œuvre des fonctionnalités telles que:</b> <br />
          <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
            <li>
              La prise de rendez-vous via un calendrier affichant les
              disponibilités du conseiller et l'agence en question
            </li>
            <li>
              Le téléchargement et la signature électronique de documents.
            </li>
            <li>Le dépôt des documents sur la plateforme</li>
            <li>
              Un suivi complet du dossier, offrant une traçabilité de chaque
              étape via une timeline évolutif
            </li>
            <li>La visualisation des contrats en cours</li>
            <br />
          </ul>
        </div>
      )}
    </div>
  );
};

const ScannAppDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>
        Conception from scratch d'une application mobile dédiée à la
        digitalisation de la logistique par le biais du scan.
      </p>
      <br />
      <p>
        J'ai pris en charge la création et l'intégration complète du design,
        front-end et du back-end.
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            <b>L'application permet:</b>
          </p>
          <br />
          <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
            <li>Un scannage unitaire ou en série</li>
            <li>
              Générer automatiquement un fichier CSV listant tous les éléments
              scannés avec leurs dates respectives
            </li>
            <li>
              Récupérer la zone géographique via Google Maps API pour indiquer
              le centre de scan
            </li>
            <li>La possibilité d'envoyer un récapitulatif par e-mail</li>
          </ul>
          <br />
        </div>
      )}
    </div>
  );
};

const CloudpackDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>
        <b>SAAS |</b>
      </p>
      <p>
        Conception intégrale d'un logiciel de suivi de projet et de gestion des
        employés pour répondre à un besoin interne de l'entreprise.
      </p>
      <br />
      <p>
        Ce projet a été mené en parallèle de mes missions principales, réalisé
        de manière autonome suite à un besoin ressenti au sein de l'entreprise.
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <br />
          <p>
            <b>J'ai mis en œuvre des fonctionnalités telles que:</b> <br />
            <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
              <li>Le portail de connexion sécurisé.</li>
              <li>
                Fonctionnalité pour enregistrer le temps consacré à chaque
                projet.
              </li>
              <li>Filtrage des projets avec une option "favoris".</li>
              <li>Possibilité de personnaliser son profil employé.</li>
              <li>Interface pour demander des jours de congés.</li>
              <li>
                Représentation graphique permettant de visualiser les jours
                travaillés, le nombre total de projets, ainsi que les congés
                imputés
              </li>
              <li>Mis en place des tests unitaires</li>
              <li>Développement des APIs</li>
            </ul>
            <br />
          </p>
          <br />
        </div>
      )}
    </div>
  );
};

const OnssaDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>
        Développement d'une application mobile agroalimentaire pour un organisme
        d'état international.
      </p>
      <br />
      <p>
        Cette application facilite la remontée d'informations cruciales telles
        que les inondations, fuites, coupures d'électricité, etc., en permettant
        aux utilisateurs de fournir des détails localisés accompagnés de photos.
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            <br />
            <b>
              {" "}
              J'ai été responsable de la conception, de l'intégration ainsi que
              du développement front-end et back-end de cette solution.
            </b>{" "}
            <br />
            <br />
            <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
              <li>
                Sachant que certaines régions géographiques ciblées peuvent être
                isolées et sans connexion Internet, l'application a été conçue
                pour fonctionner hors-ligne. Elle stocke les données localement
                et, une fois connectée, synchronise les informations avec la
                base de données distante.
              </li>
              <li>Développement des APIs</li>
              <br />
            </ul>
          </p>
          <br />
        </div>
      )}
    </div>
  );
};

const Itrade999Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>Développement intégral d'une application de crypto-monnaie.</p>
      <br />
      <p>
        J'ai conçu de A à Z une plateforme web offrant un suivi en direct des
        cours du marché des crypto-monnaies, ainsi qu'une interface dédiée à la
        gestion des portefeuilles clients.
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            <br />
            <b>
              Outre la réalisation complète du design, j'ai développé les
              parties front-end et back-end de la plateforme.
            </b>{" "}
            <br />
            <br />
            <b>J'ai mis en œuvre des fonctionnalités telles que:</b> <br />
            <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
              <li>Un portail de connexion sécurisé </li>
              <li>
                intégrant des API pour permettre aux utilisateurs d'accéder à
                leurs comptes crypto externes.
              </li>
              <li>Mis en place des tests unitaires</li>
              <li>Développement des APIs pour le back-end </li>
              <br />
            </ul>
          </p>
          <br />
        </div>
      )}
    </div>
  );
};

const ColisTrackDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>Développement d'une application de suivi de colis en temps réel.</p>
      <br />
      <p>
        J'ai contribué à la création d'une solution innovante permettant de
        visualiser en direct les envois internationaux sur un globe interactif.
        Selon le mode de transport, avion ou bateau, des icônes spécifiques
        illustrent le parcours du colis.
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            <br />
            <b>
              Cette plateforme, élaborée grâce aux puissantes API Google Maps et
              Flight, garantit une précision remarquable.
            </b>{" "}
            <br />
            <br />
            <b> Parmi mes réalisations majeures sur ce projet:</b> <br />
            <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
              <li>Mise en place d'un suivi précis et direct des colis. </li>
              <li>Visualisation des différents statuts pour chaque envoi.</li>
              <li>
                Conception d'une base de données optimisée pour stocker les
                coordonnées géographiques récurrentes, réduisant ainsi les
                appels inutiles à l'API Google Maps.
              </li>
              <br />
            </ul>
          </p>
          <br />
        </div>
      )}
    </div>
  );
};

const PortfolioDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>Développement de mon Portfolio avec React, Next.js et Node.js.</p>
      <br />
      <p>
        J'ai conçu mon site portfolio afin de mettre en avant mes expériences et
        les projets réalisés tout au long de ma carrière
      </p>
      <br />
      <p
        style={{
          color: "#0081AB",
          cursor: "pointer",
          textAlign: "end",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Lire moins" : "Lire plus ..."}
      </p>
      <br />
      {isExpanded && (
        <div>
          <p>
            Cette plateforme multi-pages offre un aperçu détaillé de mon
            parcours tout en proposant les informations nécessaires pour me
            contacter.
            <br />
            J'ai personnellement acquis mon nom de domaine et pris en charge
            l'hébergement du site, assurant la liaison entre l'hébergeur et la
            plateforme d'achat du nom de domaine
          </p>{" "}
          <br />
          <p>
            Notablement, ce projet m'a permis d'expérimenter pour la première
            fois les technologies Next.js et Tailwind, enrichissant ainsi mon
            expertise technique.
          </p>
        </div>
      )}
    </div>
  );
};

const data = [
  {
    slug: "unkey",
    title: "TPBP",
    tags: ["Front"],
    technos: [
      "images/technos/vue.png",
      "images/technos/php.png",
      "images/technos/mysql.png",
      "images/technos/kanbane.png",
      "images/technos/git.png",
      "images/technos/github.png",
      "images/technos/gitlab.png",
      "images/technos/cypress.png",
      "images/technos/storybook.png",
    ],
    description: <TPBPDescription />,
  },
  {
    slug: "unkey1",
    title: "PRIMONIAL",
    tags: ["Front"],
    technos: [
      "images/technos/angular.png",
      "images/technos/php.png",
      "images/technos/mysql.png",
      "images/technos/kanbane.png",
      "images/technos/jira.png",
      "images/technos/git.png",
      "images/technos/github.png",
    ],
    description: <PrimonialDescription />,
  },
  {
    slug: "unkey2",
    title: "TWOCHECK",
    tags: ["Front", "Back"],
    technos: [
      "images/technos/react.png",
      "images/technos/php.png",
      "images/technos/kanbane.png",
      "images/technos/mysql.png",
      "images/technos/jira.png",
      "images/technos/git.png",
      "images/technos/github.png",
    ],
    description: <TwoCheckDescription />,
  },
  {
    slug: "unkey3",
    title: "SCANN'APP",
    tags: ["Front", "Back"],
    technos: [
      "images/technos/flutter.png",
      "images/technos/firebase.png",
      "images/technos/google_maps.png",
      "images/technos/kanbane.png",
      "images/technos/sqlite.png",
      "images/technos/git.png",
      "images/technos/github.png",
    ],
    description: <ScannAppDescription />,
  },
  {
    slug: "planetfall66",
    title: "VIDENDBOOST",
    tags: ["Front", "Back"],
    technos: [
      "images/technos/react.png",
      "images/technos/node.png",
      "images/technos/vercel.png",
      "images/technos/gcp.png",
      "images/technos/github.png",
    ],
    date: "Avril - Juin 2024",
    description: `Conception et création from scratch d'un outil pour la création de miniature Youtube.
  	Avec VidEndBoost, les youtubeurs peuvent désormais créer une miniature/vignette d'une de leur vidéo pour inciter les utilisateurs à la visionner.
  	Outil totalement gratuit pour le moment.`,
  },
  {
    slug: "planetfall",
    title: "MMA",
    tags: ["Front", "Back"],
    technos: [
      "images/technos/react.png",
      "images/technos/node.png",
      "images/technos/firebase.png",
      "images/technos/kanbane.png",
      "images/technos/google_maps.png",
      "images/technos/git.png",
      "images/technos/github.png",
      "images/technos/flutter.png",
      "images/technos/sqlite.png",
    ],
    description: <MMADescription />,
  },
  {
    slug: "planetfall1",
    title: "CLOUDPACK",
    tags: ["Front", "Back"],
    technos: [
      "images/technos/react.png",
      "images/technos/node.png",
      "images/technos/jest.png",
      "images/technos/kanbane.png",
      "images/technos/mysql.png",
      "images/technos/typescript.png",
      "images/technos/git.png",
      "images/technos/github.png",
    ],
    description: <CloudpackDescription />,
  },
  {
    slug: "planetfall2",
    title: "ONSSA",
    tags: ["Front", "Back"],
    technos: [
      "images/technos/flutter.png",
      "images/technos/firebase.png",
      "images/technos/sqlite.png",
      "images/technos/kanbane.png",
      "images/technos/google_maps.png",
      "images/technos/git.png",
      "images/technos/github.png",
    ],
    description: <OnssaDescription />,
  },
  {
    slug: "planetfall33",
    title: "ITRADE999",
    tags: ["Front", "Back"],
    technos: [
      "images/technos/react.png",
      "images/technos/node.png",
      "images/technos/material-ui.png",
      "images/technos/jest.png",
      "images/technos/kanbane.png",
      "images/technos/mysql.png",
      "images/technos/git.png",
      "images/technos/github.png",
    ],
    description: <Itrade999Description />,
  },
  {
    slug: "planetfall5",
    title: "PORTFOLIO",
    tags: ["Front"],
    technos: [
      "images/technos/react.png",
      "images/technos/next.png",
      "images/technos/tailwind.png",
      "images/technos/typescript.png",
      "images/technos/git.png",
      "images/technos/github.png",
    ],
    description: <PortfolioDescription />,
  },
  {
    slug: "planetfall4",
    title: "COLIS-TRACK",
    tags: ["Front", "Back"],
    technos: [
      "images/technos/javascript.png",
      "images/technos/jquery.png",
      "images/technos/bootstrap.png",
      "images/technos/mysql.png",
      "images/technos/google_maps.png",
      "images/technos/git.png",
      "images/technos/github.png",
    ],
    description: <ColisTrackDescription />,
  },
  {
    slug: "planetfall39",
    title: "Next Projet",
    tags: [""],
    technos: [""],
    description: "",
  },
];

export default function ProjectsPage() {
  const featured = data.find((project) => project.slug === "unkey")!;
  const top2 = data.find((project) => project.slug === "planetfall")!;

  const sorted = data.filter(
    (project) => project.slug !== featured.slug && project.slug !== top2.slug
  );

  return (
    <div className="relative pb-16 " style={{ backgroundColor: "black" }}>
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projets
          </h2>
          <p className="mt-4 text-zinc-400">
            J'ai activement participé au développement des projets que vous
            trouverez ci-dessous au cours de ces dernières années. Je suis
            heureux de partager avec vous les détails sur les technologies
            utilisées, leur orientation (front-end ou back-end), ainsi que sur
            la nature précise de mon implication.
            <br />
            J'espère que cela vous donnera une meilleure idée de mes compétences
            et de ma passion pour le développement.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            {/* <Link href={`/projects/${featured.slug}`}> */}
            <div>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  {/* <div className="text-xs text-zinc-100">
						{featured.date}
					  </div> */}
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    Participation
                    {featured.tags.map((tag, index) => {
                      return <TagButton key={index} title={tag} />;
                    })}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="flex mt-8 text-3xl font-bold display text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                  <img
                    className="pl-2 mx-2"
                    src="images/projets/lcl.png"
                    alt=""
                    width="45"
                    height="35"
                  />
                </h2>
                <div className="mt-4 mb-8 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </div>

                <div className="flex flex-wrap mt-2 mb-2 display wrap">
                  {featured.technos.map((techno, index) => {
                    return (
                      <img
                        className="mx-1"
                        key={index}
                        src={techno}
                        alt=""
                        width="35"
                        height="35"
                      />
                    );
                  })}
                </div>
              </article>
            </div>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2].map((project) => (
              <Card key={project.slug}>
                <Article
                  project={project}
                  tags={project.tags}
                  technos={project.technos}
                />
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article
                    project={project}
                    tags={project.tags}
                    technos={project.technos}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article
                    project={project}
                    tags={project.tags}
                    technos={project.technos}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article
                    project={project}
                    tags={project.tags}
                    technos={project.technos}
                  />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

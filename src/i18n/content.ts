import { IEducation } from "@/interfaces/education.interface";
import { IExperience } from "@/interfaces/experience.interface";
import { IProject } from "@/interfaces/project.interface";

import { Locale } from "./config";

export function getExperiences(locale: Locale): IExperience[] {
  if (locale === "fr") {
    return [
      {
        companyName: "Karre",
        role: "Consultant Full Stack",
        description:
          "J'ai rejoint Karre en tant que consultant full-stack et intégré une grande banque dès ma première mission. Cette expérience me permet de renforcer mes compétences techniques dans un environnement exigeant, stimulant et riche en nouveaux défis.",
        skills: ["JavaScript/TypeScript", "React", "Node.js", "Architecture logicielle", "Conseil", "Environnement bancaire"],
        dates: ["2025", null],
      },
      {
        companyName: "YSO Corp",
        role: "Développeur Full Stack / Chef de projet",
        description:
          "Expérience riche dans la conception et le développement de solutions pour des clients reconnus comme BIC et Voodoo, ainsi que sur des projets internes. Pilotage de projets de bout en bout, de la définition des besoins à la mise en production, avec un suivi client complet et des contributions sur les volets marketing/commerciaux.",
        skills: ["JavaScript/TypeScript", "Angular", "React", "Vue.js", "Nuxt.js", "Node.js", "KoaJs", "React Native", "Expo", "Electron", "C#.Net", "Shell", "AntDesign", "Sequelize", "Prisma", "MySQL", "PostgreSQL", "MongoDB", "ElasticSearch", "iOS", "Android", "Cocoapods", "Gradle", "AWS", "Terraform", "Heroku", "Kubernetes", "Docker", "Bitbucket", "Jira", "Contentful", "HubSpot", "Lens", "MonoRepo", "Powens (budget insight)", "DALL.E", "Midjourney", "Discord", "Alter Way", "Expivi"],
        dates: ["2020", "2025"],
      },
      {
        companyName: "ADES",
        role: "Développeur Full Stack C# / .NET - Alternance",
        description:
          "Participation à la conception et au développement d'un Service Desk/CRM sur desktop et web, ainsi qu'une application mobile complémentaire. Création de fonctionnalités pour améliorer la gestion des interactions clients et le suivi des demandes en temps réel.",
        skills: ["C#", ".NET", "WPF", "ASP.Net", "Xamarin", "SQLServer", "Azure", "Microsoft Graph", "WINDev"],
        dates: ["2017", "2020"],
      },
      {
        companyName: "YSO Corp",
        role: "Développeur AngularJS - Stage",
        description:
          "Développement d'une API de test et création d'une application WordPress pour le site MyGSMData afin d'automatiser et simplifier les validations fonctionnelles.",
        skills: ["AngularJs", "Unit test", "WordPress"],
        dates: ["2016", null],
      },
      {
        companyName: "Mairie de Villiers-Le-Bel",
        role: "Administrateur réseaux - Stage",
        description:
          "Stage autour de la gestion de l'infrastructure informatique de la mairie: administration serveur, maintenance quotidienne, sécurisation des données et accompagnement des renouvellements matériels.",
        skills: ["Administration serveurs / parc informatique", "Windows OS", "Active Directory", "Administration comptes utilisateurs", "Maintenance réseau", "Support utilisateurs", "Gestion incidents matériels / logiciels"],
        dates: ["2013", "2015"],
      },
    ];
  }

  if (locale === "pt") {
    return [
      {
        companyName: "Karre",
        role: "Consultor Full Stack",
        description:
          "Entrei na Karre como consultor full-stack e fui alocado em um grande banco já na primeira missão. Essa experiência reforça minhas competências técnicas em um ambiente exigente, estimulante e repleto de novos desafios.",
        skills: ["JavaScript/TypeScript", "React", "Node.js", "Arquitetura de software", "Consultoria", "Ambiente bancário"],
        dates: ["2025", null],
      },
      {
        companyName: "YSO Corp",
        role: "Desenvolvedor Full Stack / Gerente de Projetos",
        description:
          "Experiência ampla no design e desenvolvimento de soluções para clientes reconhecidos, como BIC e Voodoo, além de projetos internos. Condução de projetos de ponta a ponta, da definição de requisitos até a produção, com acompanhamento completo do cliente e contribuições nas frentes de marketing/comercial.",
        skills: ["JavaScript/TypeScript", "Angular", "React", "Vue.js", "Nuxt.js", "Node.js", "KoaJs", "React Native", "Expo", "Electron", "C#.Net", "Shell", "AntDesign", "Sequelize", "Prisma", "MySQL", "PostgreSQL", "MongoDB", "ElasticSearch", "iOS", "Android", "Cocoapods", "Gradle", "AWS", "Terraform", "Heroku", "Kubernetes", "Docker", "Bitbucket", "Jira", "Contentful", "HubSpot", "Lens", "MonoRepo", "Powens (budget insight)", "DALL.E", "Midjourney", "Discord", "Alter Way", "Expivi"],
        dates: ["2020", "2025"],
      },
      {
        companyName: "ADES",
        role: "Desenvolvedor Full Stack C# / .NET - Aprendizagem",
        description:
          "Participação no design e desenvolvimento de um Service Desk/CRM para desktop e web, além de um aplicativo mobile complementar. Criação de funcionalidades para melhorar a gestão de interações com clientes e o acompanhamento de solicitações em tempo real.",
        skills: ["C#", ".NET", "WPF", "ASP.Net", "Xamarin", "SQLServer", "Azure", "Microsoft Graph", "WINDev"],
        dates: ["2017", "2020"],
      },
      {
        companyName: "YSO Corp",
        role: "Desenvolvedor AngularJS - Estágio",
        description:
          "Desenvolvimento de uma API de testes e criação de um aplicativo WordPress para o site MyGSMData, automatizando e simplificando validações funcionais.",
        skills: ["AngularJs", "Unit test", "WordPress"],
        dates: ["2016", null],
      },
      {
        companyName: "Mairie de Villiers-Le-Bel",
        role: "Administrador de redes - Estágio",
        description:
          "Estágio focado na gestão da infraestrutura de TI da prefeitura: administração de servidores, manutenção diária, segurança de dados e suporte a renovações de hardware.",
        skills: ["Administração de servidores / infraestrutura de TI", "Windows OS", "Active Directory", "Administração de contas de usuários", "Manutenção de rede", "Suporte a usuários", "Gestão de incidentes de hardware / software"],
        dates: ["2013", "2015"],
      },
    ];
  }

  return [
    {
      companyName: "Karre",
      role: "Full Stack Consultant",
      description:
        "I joined Karre as a full-stack consultant and was staffed at a major bank from my first assignment. This role helps me strengthen my technical skills while growing in a demanding, stimulating environment full of new challenges.",
      skills: ["JavaScript/TypeScript", "React", "Node.js", "Software architecture", "Consulting", "Banking environment"],
      dates: ["2025", null],
    },
    {
      companyName: "YSO Corp",
      role: "Full Stack Developer / Project Manager",
      description:
        "Rich and versatile experience in designing and developing solutions for renowned clients such as BIC and Voodoo, as well as internal projects. Specialized in JavaScript/TypeScript and DevOps, I have led numerous projects from start to finish, from requirements definition to production deployment, ensuring comprehensive client support.",
      skills: ["JavaScript/TypeScript", "Angular", "React", "Vue.js", "Nuxt.js", "Node.js", "KoaJs", "React Native", "Expo", "Electron", "C#.Net", "Shell", "AntDesign", "Sequelize", "Prisma", "MySQL", "PostgreSQL", "MongoDB", "ElasticSearch", "iOS", "Android", "Cocoapods", "Gradle", "AWS", "Terraform", "Heroku", "Kubernetes", "Docker", "Bitbucket", "Jira", "Contentful", "HubSpot", "Lens", "MonoRepo", "Powens (budget insight)", "DALL.E", "Midjourney", "Discord", "Alter Way", "Expivi"],
      dates: ["2020", "2025"],
    },
    {
      companyName: "ADES",
      role: "Full Stack Developer C# / .NET - Apprenticeship",
      description:
        "Participated in the design and development of a Service Desk/CRM accessible on both desktop and web, as well as a complementary mobile application. My role involved creating features to enable efficient customer interaction management and real-time request tracking.",
      skills: ["C#", ".NET", "WPF", "ASP.Net", "Xamarin", "SQLServer", "Azure", "Microsoft Graph", "WINDev"],
      dates: ["2017", "2020"],
    },
    {
      companyName: "YSO Corp",
      role: "AngularJS Developer - Internship",
      description:
        "Developed a test API and created a WordPress application for the MyGSMData website. I designed and implemented the API to automate and streamline functionality testing.",
      skills: ["AngularJs", "Unit test", "WordPress"],
      dates: ["2016", null],
    },
    {
      companyName: "Villiers-Le-Bel Town Hall",
      role: "Network Administrator - Internship",
      description:
        "Internship in managing the town hall's IT infrastructure, including data server administration, daily maintenance, data security, and hardware modernization projects.",
      skills: ["Server / IT infrastructure administration", "Windows OS", "Active Directory", "User Account Management", "Network Maintenance", "User Support / Assistance", "Hardware / Software Incident Management"],
      dates: ["2013", "2015"],
    },
  ];
}

export function getEducations(locale: Locale): IEducation[] {
  if (locale === "fr") {
    return [
      { diploma: "Titre RNCP Niveau 7 (BAC+5) EIAL", school: "ScholaNova", city: "Paris", yearStart: "2019", yearEnd: "2020", field: "Expert en Ingénierie et Architecture Logicielle" },
      { diploma: "Titre RNCP Niveau 6 (BAC+4) DAI", school: "ScholaNova", city: "Paris", yearStart: "2018", yearEnd: "2019", field: "Concepteur-Développeur Applicatif et Internet" },
      { diploma: "Licence Professionnelle MICDTL", school: "Paris 13", city: "Villetaneuse", yearStart: "2017", yearEnd: "2018", field: "Métiers de l'Informatique : Conception, Développement, Test de Logiciels" },
      { diploma: "BTS SNIR", school: "La Tourelle", city: "Sarcelles", yearStart: "2015", yearEnd: "2017", field: "Systèmes Numériques option Informatique et Réseaux" },
      { diploma: "BAC Professionnelle SENR", school: "La Tourelle", city: "Sarcelles", yearStart: "2012", yearEnd: "2015", field: "Systèmes Electroniques Numériques option Télécom et Réseaux" },
    ];
  }

  if (locale === "pt") {
    return [
      { diploma: "Título RNCP Nível 7 (equivalente a Mestrado) EIAL", school: "ScholaNova", city: "Paris", yearStart: "2019", yearEnd: "2020", field: "Especialista em Engenharia e Arquitetura de Software" },
      { diploma: "Título RNCP Nível 6 (Bacharelado+4) DAI", school: "ScholaNova", city: "Paris", yearStart: "2018", yearEnd: "2019", field: "Concepção e Desenvolvimento de Aplicações e Internet" },
      { diploma: "Licenciatura Profissional MICDTL", school: "Paris 13", city: "Villetaneuse", yearStart: "2017", yearEnd: "2018", field: "Informática: Concepção, Desenvolvimento e Teste de Software" },
      { diploma: "Diploma Técnico Superior SNIR", school: "La Tourelle", city: "Sarcelles", yearStart: "2015", yearEnd: "2017", field: "Sistemas Digitais - Informática e Redes" },
      { diploma: "Bacharelado Profissional SENR", school: "La Tourelle", city: "Sarcelles", yearStart: "2012", yearEnd: "2015", field: "Sistemas Eletrônicos Digitais - Telecom e Redes" },
    ];
  }

  return [
    { diploma: "RNCP Level 7 (Master's equivalent) EIAL", school: "ScholaNova", city: "Paris", yearStart: "2019", yearEnd: "2020", field: "Software Engineering and Architecture Expert" },
    { diploma: "RNCP Level 6 (Bachelor+4) DAI", school: "ScholaNova", city: "Paris", yearStart: "2018", yearEnd: "2019", field: "Application and Internet Design & Development" },
    { diploma: "Professional Bachelor's Degree MICDTL", school: "Paris 13", city: "Villetaneuse", yearStart: "2017", yearEnd: "2018", field: "Computer Science: Design, Development, and Software Testing" },
    { diploma: "Higher National Diploma SNIR", school: "La Tourelle", city: "Sarcelles", yearStart: "2015", yearEnd: "2017", field: "Digital Systems - IT and Networks" },
    { diploma: "Vocational Baccalaureate SENR", school: "La Tourelle", city: "Sarcelles", yearStart: "2012", yearEnd: "2015", field: "Digital Electronic Systems - Telecom and Networks" },
  ];
}

export function getProjects(locale: Locale): IProject[] {
  const summary = {
    portfolio: {
      en: "Personal website rebuilt with Next.js to present experience, projects and contact flow in a cleaner product format.",
      fr: "Site personnel reconstruit avec Next.js pour présenter l'expérience, les projets et le contact avec un format plus produit.",
      pt: "Site pessoal reconstruído com Next.js para apresentar experiência, projetos e contato em um formato mais orientado a produto.",
    },
    bic: {
      en: "Customization experience for BIC products, combining front-end polish and client-facing delivery constraints.",
      fr: "Expérience de personnalisation de produits BIC, combinant qualité front-end et contraintes de livraison client.",
      pt: "Experiência de personalização de produtos BIC, combinando qualidade de front-end e restrições de entrega para o cliente.",
    },
    voodoo: {
      en: "Content platform work for a high-traffic gaming brand with emphasis on maintainability and delivery speed.",
      fr: "Contribution à une plateforme de contenu à fort trafic, avec un focus maintenabilité et vitesse de livraison.",
      pt: "Trabalho em plataforma de conteúdo para uma marca de jogos com alto tráfego, com foco em manutenibilidade e velocidade de entrega.",
    },
    monster: {
      en: "Interactive playable ad workflow involving rapid iteration, performance constraints and cross-team delivery.",
      fr: "Workflow de publicités playables interactives impliquant itérations rapides, contraintes de performance et collaboration transverse.",
      pt: "Flux de anúncios jogáveis interativos com iterações rápidas, restrições de performance e colaboração entre equipes.",
    },
    yso: {
      en: "Internal platform and tooling work to support product operations and collaboration across teams.",
      fr: "Travail sur une plateforme interne et des outils pour soutenir les opérations produit et la collaboration des équipes.",
      pt: "Trabalho em plataforma interna e ferramentas para apoiar operações de produto e colaboração entre equipes.",
    },
    gameutils: {
      en: "Developer tooling and utilities designed to speed up production workflows and repeated delivery tasks.",
      fr: "Outils et utilitaires développeur conçus pour accélérer les workflows de production et les tâches récurrentes.",
      pt: "Ferramentas e utilitários para desenvolvedores criados para acelerar fluxos de produção e tarefas recorrentes.",
    },
    sartliva: {
      en: "Custom product development for a client project with full-stack ownership and iterative delivery.",
      fr: "Développement sur-mesure pour un projet client, avec ownership full-stack et livraisons itératives.",
      pt: "Desenvolvimento sob medida para projeto de cliente, com responsabilidade full-stack e entregas iterativas.",
    },
    hitroad: {
      en: "Client-facing product work blending application features, business constraints and delivery ownership.",
      fr: "Travail produit orienté client mêlant fonctionnalités applicatives, contraintes métier et ownership de livraison.",
      pt: "Trabalho de produto voltado ao cliente, combinando funcionalidades da aplicação, restrições de negócio e responsabilidade de entrega.",
    },
    inovoiz: {
      en: "Product contribution on a business-oriented platform, with focus on usable interfaces and robust integrations.",
      fr: "Contribution produit sur une plateforme orientée business, avec un focus sur l'UX et des intégrations robustes.",
      pt: "Contribuição de produto em uma plataforma orientada a negócios, com foco em interfaces usáveis e integrações robustas.",
    },
  };

  return [
    { name: "Portfolio", client: "NG", summary: summary.portfolio[locale], stack: ["Next.js", "TypeScript", "SCSS", "Resend"], href: "https://portfolio.gomesnicolas.com/", status: "live" },
    { name: "Design My Bic", client: "BIC", summary: summary.bic[locale], stack: ["Vue.js", "TypeScript", "Node.js"], status: "case-study" },
    { name: "Voodoo Blog", client: "Voodoo", summary: summary.voodoo[locale], stack: ["React", "Node.js", "Contentful"], status: "case-study" },
    { name: "Monster Playable", client: "YSO Corp", summary: summary.monster[locale], stack: ["JavaScript", "Canvas", "Webpack"], status: "private" },
    { name: "YSO Network", client: "YSO Corp", summary: summary.yso[locale], stack: ["Nuxt.js", "Node.js", "PostgreSQL"], status: "private" },
    { name: "GameUtils", client: "YSO Corp", summary: summary.gameutils[locale], stack: ["Node.js", "TypeScript", "Shell"], status: "private" },
    { name: "Sartliva", client: "YSO Corp", summary: summary.sartliva[locale], stack: ["React", "Koa", "PostgreSQL"], status: "private" },
    { name: "Hit The Road", client: "LCE", summary: summary.hitroad[locale], stack: ["Angular", "Node.js", "MySQL"], status: "private" },
    { name: "InovoiZ", client: "InovoiZ", summary: summary.inovoiz[locale], stack: ["React", "TypeScript", "API integrations"], status: "private" },
  ];
}

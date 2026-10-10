/**
 * SOHAYB KEZZOULI — PORTFOLIO BILINGUE (FR / EN)
 * Moteur complet de traduction et basculement instantané de langue
 */

(function() {
  'use strict';

  const translations = {
    fr: {
      page: {
        title: "Sohayb Kezzouli | Élève-Ingénieur Cybersécurité & Réseaux — Portfolio PFE",
        metaDesc: "Portfolio de Sohayb Kezzouli, élève-ingénieur en 5e année à l'EMSI Rabat, spécialisé en Cybersécurité, Sécurité Réseau, Pare-feu NGFW, Bastion SSH et supervision SOC/SIEM. En recherche active de Stage PFE dès 2027.",
      },
      nav: {
        about: "À propos",
        exp: "Expériences",
        projects: "Projets",
        skills: "Compétences",
        certs: "Certifications",
        cv: "CV PDF",
        contact: "Contacter",
      },
      gateway: {
        auth: "AUTORISATION DE SÉCURITÉ NIVEAU 5",
        name: "Sohayb <span class=\"gradient-text\">Kezzouli</span>",
        role: "Élève-Ingénieur en Génie Informatique · Réseaux & Cybersécurité",
        schoolLabel: "ÉTABLISSEMENT",
        schoolVal: "EMSI Rabat (Bac+5)",
        goalLabel: "OBJECTIF",
        goalVal: "Stage PFE 2026/2027",
        expLabel: "EXPÉRIENCE",
        expVal: "CDG · TGR · SNRT",
        certsLabel: "ACCRÉDITATIONS",
        certsVal: "16 Certifications",
        initBtn: "INITIALISATION EN COURS...",
        accessBtn: "ACCÉDER AU PORTFOLIO ➔",
        skipBtn: "Passer l'introduction (Accès direct) ➔",
      },
      hero: {
        status: "Recherche de Stage PFE · Début 2027 (Cybersécurité & Réseaux)",
        title: "Sécuriser les flux,<br><span class=\"gradient-text\">durcir l'infrastructure</span>,<br>anticiper la menace.",
        titleText: "Sécuriser les flux, durcir l'infrastructure, anticiper la menace.",
        desc: "Élève-Ingénieur en 5<sup>e</sup> année de <strong>Génie Informatique à l'EMSI Rabat</strong>. Défense en profondeur : <em>Pare-feu NGFW, Bastion d'accès durci, supervision SOC/SIEM et Cloud Security</em>.",
        btnCv: "Télécharger mon CV (PDF)",
        btnContact: "Me contacter pour un PFE",
        btnProjects: "Voir mes projets",
        metric1Num: "3",
        metric1Label: "Stages en institutions majeures<br><span>CDG · TGR · SNRT</span>",
        metric2Num: "16",
        metric2Label: "Certifications validées<br><span>Cisco · Google · Oracle</span>",
        metric3Num: "5<sup>e</sup>",
        metric3Label: "Année d'ingénierie<br><span>EMSI Rabat (Bac+5)</span>",
      },
      profileCard: {
        verified: "PROFIL VÉRIFIÉ",
        role: "Élève-Ingénieur Réseaux & Cybersécurité",
        location: "📍 Rabat, Maroc",
        status: "🟢 Dispo PFE 2026/27",
        flipFrontHint: "↩ Cliquez pour voir les contacts",
        flipBackHint: "↩ Cliquez pour retourner la carte",
        backTitle: "Coordonnées directes",
      },
      statsRibbon: {
        stat1Label: "Stages en institutions nationales",
        stat1Sub: "CDG · TGR · SNRT",
        stat2Label: "Certifications internationales",
        stat2Sub: "Cisco · Google · Oracle",
        stat3Label: "Années d'ingénierie Bac+5",
        stat3Sub: "EMSI Rabat",
        stat4Label: "PFE recherché dès 2027",
        stat4Sub: "Cybersécurité · SOC · Cloud",
      },
      about: {
        tag: "01 // PARCOURS & PROFIL",
        title: "Ingénierie & passion pour la <span class=\"gradient-text\">défense des systèmes</span>",
        subtitle: "Futur ingénieur diplômé de l'EMSI en 2027, combinant rigueur d'audit, conception d'architectures réseau sécurisées et automatisation SecOps.",
        bento1Title: "Spécialisation : Défense en Profondeur",
        bento1Desc: "Mon parcours est guidé par une conviction : la sécurité n'est pas une couche additionnelle, mais la colonne vertébrale de toute infrastructure moderne.",
        bento2Title: "Cible Stage PFE 2026/2027",
        bento2Desc: "Recherche active d'un stage de fin d'études de <strong>4 à 6 mois</strong> à partir de <strong>février / début 2027</strong>.",
        target1: "<strong>Sécurité Périmétrique & Réseaux</strong><span>Pare-feu NGFW, segmentation, VPN IPsec, DMZ</span>",
        target2: "<strong>SOC / SIEM & Détection</strong><span>Analyse d'incidents, Zabbix, Wazuh, Splunk</span>",
        target3: "<strong>Cloud Security & DevSecOps</strong><span>GCP/Oracle, WAF, durcissement et audits</span>",
        mobility: "Mobilité : Rabat, Casablanca ou Hybride / Télétravail",
        bento3Title: "Langues & Échanges",
        langFr: "Courant / Professionnel",
        langEn: "Courant / Professionnel (Fluidité technique & rédactionnelle)",
        langAr: "Langue Maternelle",
        langEs: "Notions de base",
        bento4Title: "Cursus d'Ingénierie & Fondations Réseaux",
        edu1Year: "2022 – 2027",
        edu1School: "EMSI Rabat · École Marocaine des Sciences de l'Ingénieur",
        edu1Desc: "Cycle d'Ingénieur en Génie Informatique (5<sup>e</sup> année en cours). Approfondissement en sécurité des systèmes d'information, protocoles réseau et génie logiciel.",
        edu2Year: "2022 – 2024",
        edu2School: "ISTA Hay Nahda, Rabat",
        edu2Desc: "Diplôme de Technicien Spécialisé en Systèmes et Réseaux Informatiques. Maîtrise pratique du câblage, routage, commutation et administration de serveurs.",
        edu3Year: "2022",
        edu3School: "GS Al Mouwatna",
        edu3Desc: "Baccalauréat Scientifique en Sciences Physiques.",
      },
      experience: {
        tag: "02 // EXPÉRIENCES PROFESSIONNELLES",
        title: "Trois stages réussis au sein <span class=\"gradient-text\">d'institutions d'envergure</span>",
        subtitle: "Des interventions réelles sur des infrastructures publiques et financières majeures au Maroc : CDG, TGR et SNRT.",
        cdgRole: "Stagiaire — Direction des Systèmes d'Information (DSI)",
        cdgType: "Stage Technique",
        cdgProject: "<strong>Projet SecureVision :</strong> Plateforme de supervision, cybersécurité et gestion des risques",
        cdgSummary: "Conception et déploiement d'une solution unifiée permettant aux équipes d'exploitation et de sécurité de surveiller l'état de l'infrastructure et de corréler les alertes en temps réel.",
        cdgP1: "<strong>Centralisation et monitoring actif :</strong> Mise en œuvre d'une interface web réactive centralisant les flux d'alertes sécurité pour une visualisation type SOC/SIEM.",
        cdgP2: "<strong>Interconnexion API Zabbix :</strong> Développement de connecteurs automatisés pour récupérer les métriques d'intégrité, les alertes d'équipements et les anomalies de trafic via l'API REST Zabbix.",
        cdgP3: "<strong>Audit, traçabilité & contrôle :</strong> Module d'analyse des journaux d'audit, génération de rapports de conformité et sécurisation stricte des accès par jetons <strong>JWT chiffrés</strong>.",
        tgrRole: "Stagiaire en Sécurité & Infrastructure",
        tgrType: "Stage d'Application",
        tgrProject: "<strong>Projet Bastion SSH :</strong> Passerelle d'accès durcie et administration par rebond (ProxyJump)",
        tgrSummary: "Sécurisation et cloisonnement des accès d'administration aux serveurs internes critiques de la Trésorerie Générale du Royaume via une passerelle d'authentification centralisée.",
        tgrP1: "<strong>Passerelle mandataire ProxyJump :</strong> Mise en place d'un serveur bastion sous Linux Ubuntu servant d'unique point d'entrée contrôlé vers les sous-réseaux d'administration.",
        tgrP2: "<strong>Chiffrement fort & hachage :</strong> Implémentation d'algorithmes cryptographiques (bcrypt pour les secrets d'authentification, CryptoJS pour les échanges applicatifs) éliminant les identifiants en clair.",
        tgrP3: "<strong>Tableau de bord de pilotage :</strong> Développement d'une interface React.js & Node.js pour déclencher et superviser les sessions SSH avec historique d'audit rigoureux.",
        snrtRole: "Stagiaire Réseaux & Systèmes Informatiques",
        snrtType: "Stage d'Initiation",
        snrtProject: "<strong>Projet Filtrage & Pare-feu :</strong> Déploiement et durcissement d'un firewall pfSense",
        snrtSummary: "Durcissement du périmètre réseau et mise sous contrôle des flux entre les zones LAN et le trafic sortant au sein de la Société Nationale de Radiodiffusion et de Télévision.",
        snrtP1: "<strong>Installation & configuration pfSense :</strong> Déploiement de l'appliance pare-feu open-source pfSense, paramétrage des interfaces WAN/LAN et des règles de filtrage avec inspection d'état.",
        snrtP2: "<strong>Politiques de sécurité & ACL :</strong> Définition de règles restrictives par défaut (Default Deny), blocage des flux non autorisés et isolement des machines sensibles.",
        snrtP3: "<strong>Surveillance des flux & logs :</strong> Analyse des journaux de pare-feu pour détecter les tentatives de scan, anomalies de requêtes et comportements suspects.",
      },
      projects: {
        tag: "03 // RÉALISATIONS TECHNIQUES",
        title: "Projets axés sur la <span class=\"gradient-text\">robustesse et la traçabilité</span>",
        subtitle: "Développement fullstack et sécurisation d'environnements : du protocole réseau aux applications web durcies.",
        p1Title: "SecureVision — Supervision & Risques Cyber",
        p1Desc: "Plateforme web de surveillance des alertes infrastructure et cybersécurité connectée à l'API Zabbix. Tableau de bord interactif des incidents, corrélation d'événements critiques et journalisation immuable des accès.",
        p2Title: "Bastion SSH Sécurisé & ProxyJump",
        p2Desc: "Application web d'administration de serveurs distants par rebond sécurisé. Authentification forte des administrateurs, sessions SSH isolées, hachage bcrypt et journalisation exhaustive pour conformité d'audit.",
        p3Title: "Plateforme Web Sécurisée de Location Automobile",
        p3Desc: "Application complète de réservation, suivi de flotte automobile, contrats de location et facturation avec le framework Laravel. Sécurisation des transactions et prévention des injections SQL via ORM Eloquent.",
        githubTitle: "Code source et dépôts publics",
        githubDesc: "Retrouvez l'ensemble de mes implémentations, configurations et projets open-source sur mon profil GitHub.",
      },
      skills: {
        tag: "04 // STACK & SAVOIR-FAIRE",
        title: "Boîte à outils d'un <span class=\"gradient-text\">Ingénieur Sécurité & Réseau</span>",
        subtitle: "Une combinaison d'outils d'audit, de protocoles réseau, de systèmes d'exploitation et de langages de programmation.",
        d1Title: "Cybersécurité & Réseaux",
        d1Sub: "Défense, filtrage & architecture",
        d2Title: "Systèmes & Infrastructure",
        d2Sub: "Environnements & protocoles",
        d3Title: "Outils d'Audit & Analyse",
        d3Sub: "Détection, capture & diagnostic",
        d4Title: "Développement & Crypto",
        d4Sub: "Automatisation & sécurité du code",
        radarBadge: "MATRICE D'INGÉNIERIE SÉCURITÉ · NIST & SECOPS",
        radarTitle: "Évaluation Multidimensionnelle des Compétences",
        radarGlobalSub: "Indice Global",
        radarHint: "Survolez un pôle ou cliquez pour inspecter le diagnostic",
        diagProofLabel: "Preuve / Application :",
        diagMetricLabel: "Indicateur Clé :",
        diagStackLabel: "Technologies associées :",
        diagPfeReady: "Opérationnel pour missions de stage PFE dès début 2027",
      },
      certs: {
        tag: "05 // ACCRÉDITATIONS & TITRES",
        title: "Un engagement validé par <span class=\"gradient-text\">16 certifications</span>",
        subtitle: "Validation continue de compétences auprès d'organismes de premier plan de l'industrie technologique.",
        verified: "Titre officiel validé",
      },
      contact: {
        tag: "06 // PRISE DE CONTACT",
        title: "Discutons de votre opportunité de <span class=\"gradient-text\">stage PFE</span>",
        subtitle: "Vous recherchez un profil motivé, opérationnel sur le réseau et la sécurité des systèmes dès début 2027 ? Je serais ravi d'échanger avec vous.",
        cardRole: "Élève-Ingénieur Cybersécurité & Réseaux (Bac+5)",
        cardDesc: "Disponible dès février / début 2027 pour un stage PFE de 4 à 6 mois. Mobilité : Rabat, Casablanca, hybride ou télétravail.",
        locTitle: "Localisation & Disponibilité",
        locVal: "Rabat, Maroc (Mobile sur Casa & Télétravail)",
        formTitle: "Envoyer un message rapide",
        lblName: "Votre nom / Entreprise",
        lblEmail: "Votre adresse email",
        lblSubject: "Sujet de l'opportunité",
        lblMessage: "Détails de l'échange ou proposition",
        phName: "Ex: Jean Dupont (Recruteur / RSSI)",
        phEmail: "Ex: recruteur@entreprise.ma",
        phSubject: "Ex: Proposition Stage PFE — Cybersécurité / SOC",
        phMessage: "Bonjour Sohayb, nous avons consulté votre portfolio et souhaitons échanger avec vous...",
        btnSend: "Transmettre le message",
      },
      footer: {
        copy: "Élève-Ingénieur en Génie Informatique (EMSI Rabat) · Cybersécurité & Réseaux. Conçu avec rigueur et passion technique.",
        rights: "© 2026 Sohayb Kezzouli. Tous droits réservés.",
      },
      modalCv: {
        tag: "Curriculum Vitae Officiel // Sohayb Kezzouli",
        title: "Élève-Ingénieur Réseaux & Cybersécurité",
        boxTitle: "Dossier de candidature PFE 2026/2027",
        boxDesc: "Retrouvez le CV complet et mis à jour de Sohayb Kezzouli au format PDF (synthèse académique EMSI, 3 stages institutionnels CDG/TGR/SNRT, et 16 certifications reconnues).",
        btnDownload: "Télécharger le CV (PDF)",
        btnEmail: "Demander par email",
        tip: "ℹ️ Conseil : Pour intégrer votre propre fichier PDF personnalisé, placez-le simplement sous <code>CV - Sohayb Kezzouli.pdf</code>.",
      },
      toast: {
        langSwitched: "Langue changée : Français 🇫🇷",
      }
    },

    en: {
      page: {
        title: "Sohayb Kezzouli | Cybersecurity & Network Engineering Student — PFE Portfolio",
        metaDesc: "Portfolio of Sohayb Kezzouli, 5th-year Computer Engineering student at EMSI Rabat, specializing in Cybersecurity, Network Security, NGFW Firewalls, SSH Bastion, and SOC/SIEM monitoring. Seeking 2027 Final-Year PFE Internship.",
      },
      nav: {
        about: "About",
        exp: "Experience",
        projects: "Projects",
        skills: "Skills",
        certs: "Certifications",
        cv: "Resume PDF",
        contact: "Contact",
      },
      gateway: {
        auth: "SECURITY CLEARANCE LEVEL 5",
        name: "Sohayb <span class=\"gradient-text\">Kezzouli</span>",
        role: "Computer Engineering Student · Networks & Cybersecurity",
        schoolLabel: "INSTITUTION",
        schoolVal: "EMSI Rabat (Master's level)",
        goalLabel: "OBJECTIVE",
        goalVal: "Final-Year Internship (PFE) 2027",
        expLabel: "EXPERIENCE",
        expVal: "CDG · TGR · SNRT",
        certsLabel: "CREDENTIALS",
        certsVal: "16 Certifications",
        initBtn: "INITIALIZING SESSION...",
        accessBtn: "ACCESS PORTFOLIO ➔",
        skipBtn: "Skip introduction (Direct Access) ➔",
      },
      hero: {
        status: "Seeking Final-Year Internship (PFE) · Early 2027 (Cybersecurity & Networks)",
        title: "Securing network flows,<br><span class=\"gradient-text\">hardening infrastructure</span>,<br>anticipating threats.",
        titleText: "Securing network flows, hardening infrastructure, anticipating threats.",
        desc: "5<sup>th</sup>-year Computer Engineering Student at <strong>EMSI Rabat</strong>. Defense in depth: <em>NGFW Firewalls, Hardened Access Bastion, SOC/SIEM monitoring, and Cloud Security</em>.",
        btnCv: "Download Resume (PDF)",
        btnContact: "Contact me for PFE",
        btnProjects: "Explore My Projects",
        metric1Num: "3",
        metric1Label: "Internships at major institutions<br><span>CDG · TGR · SNRT</span>",
        metric2Num: "16",
        metric2Label: "Validated certifications<br><span>Cisco · Google · Oracle</span>",
        metric3Num: "5<sup>th</sup>",
        metric3Label: "Year of engineering studies<br><span>EMSI Rabat (Master's Level)</span>",
      },
      profileCard: {
        verified: "VERIFIED PROFILE",
        role: "Network & Cybersecurity Engineering Student",
        location: "📍 Rabat, Morocco",
        status: "🟢 Available for PFE 2026/27",
        flipFrontHint: "↩ Click to view contact details",
        flipBackHint: "↩ Click to flip card back",
        backTitle: "Direct Contact Details",
      },
      statsRibbon: {
        stat1Label: "National institution internships",
        stat1Sub: "CDG · TGR · SNRT",
        stat2Label: "International certifications",
        stat2Sub: "Cisco · Google · Oracle",
        stat3Label: "Engineering studies (Master's level)",
        stat3Sub: "EMSI Rabat",
        stat4Label: "PFE sought starting early 2027",
        stat4Sub: "Cybersecurity · SOC · Cloud",
      },
      about: {
        tag: "01 // PROFILE & BACKGROUND",
        title: "Engineering mindset & dedication to <span class=\"gradient-text\">systems defense</span>",
        subtitle: "Future engineer graduating from EMSI in 2027, combining audit rigor, secure network architecture design, and SecOps automation.",
        bento1Title: "Specialization: Defense in Depth",
        bento1Desc: "My journey is guided by a firm conviction: security is not an afterthought layer, but the structural backbone of every modern infrastructure.",
        bento2Title: "2026/2027 PFE Internship Target",
        bento2Desc: "Actively seeking a final-year internship of <strong>4 to 6 months</strong> starting from <strong>February / early 2027</strong>.",
        target1: "<strong>Perimeter Security & Networking</strong><span>NGFW Firewalls, segmentation, IPsec VPN, DMZ</span>",
        target2: "<strong>SOC / SIEM & Threat Detection</strong><span>Incident analysis, Zabbix, Wazuh, Splunk</span>",
        target3: "<strong>Cloud Security & DevSecOps</strong><span>GCP/Oracle, WAF, system hardening, and audits</span>",
        mobility: "Mobility: Rabat, Casablanca or Hybrid / Remote",
        bento3Title: "Languages & Communication",
        langFr: "Fluent / Professional",
        langEn: "Fluent / Professional (Technical & written proficiency)",
        langAr: "Native Language",
        langEs: "Elementary Proficiency",
        bento4Title: "Engineering Curriculum & Network Foundations",
        edu1Year: "2022 – 2027",
        edu1School: "EMSI Rabat · Moroccan School of Engineering Sciences",
        edu1Desc: "Computer Engineering Master's Cycle (5<sup>th</sup> year in progress). Advanced focus on information systems security, network protocols, and software engineering.",
        edu2Year: "2022 – 2024",
        edu2School: "ISTA Hay Nahda, Rabat",
        edu2Desc: "Specialized Technician Diploma in Computer Systems & Networks. Practical expertise in structured cabling, routing, switching, and server administration.",
        edu3Year: "2022",
        edu3School: "GS Al Mouwatna",
        edu3Desc: "Scientific Baccalaureate in Physical Sciences.",
      },
      experience: {
        tag: "02 // WORK EXPERIENCE",
        title: "Three successful internships in <span class=\"gradient-text\">major institutions</span>",
        subtitle: "Hands-on engineering missions on critical public and financial infrastructures in Morocco: CDG, TGR, and SNRT.",
        cdgRole: "Intern — Information Systems Department (DSI)",
        cdgType: "Technical Internship",
        cdgProject: "<strong>SecureVision Project:</strong> Infrastructure monitoring, cybersecurity & risk management platform",
        cdgSummary: "Design and deployment of a unified solution allowing operations and security teams to monitor infrastructure health and correlate security alerts in real time.",
        cdgP1: "<strong>Centralization & Active Monitoring:</strong> Built a responsive web portal centralizing security alert feeds for SOC/SIEM-level situational awareness.",
        cdgP2: "<strong>Zabbix API Interconnection:</strong> Engineered automated connectors to retrieve equipment telemetry, integrity metrics, and traffic anomalies via Zabbix REST API.",
        cdgP3: "<strong>Audit Trail, Traceability & Control:</strong> Developed an audit log analysis engine, compliance report generation, and strict access enforcement with <strong>encrypted JWT tokens</strong>.",
        tgrRole: "Security & Infrastructure Intern",
        tgrType: "Application Internship",
        tgrProject: "<strong>SSH Bastion Project:</strong> Hardened access gateway & ProxyJump administration",
        tgrSummary: "Securing and isolating administrative access to critical internal servers of the General Treasury of the Kingdom (TGR) through a centralized authentication gateway.",
        tgrP1: "<strong>ProxyJump Relay Gateway:</strong> Deployed a hardened Ubuntu Linux bastion host serving as the single strictly controlled ingress point to internal management subnets.",
        tgrP2: "<strong>Strong Encryption & Hashing:</strong> Implemented cryptographic algorithms (bcrypt for credential hashing, CryptoJS for payload protection) eliminating plain-text secrets.",
        tgrP3: "<strong>Management Dashboard:</strong> Developed a React.js & Node.js web interface to trigger, supervise, and terminate SSH sessions with granular command audit logs.",
        snrtRole: "Network & Systems Engineering Intern",
        snrtType: "Introductory Internship",
        snrtProject: "<strong>Filtering & Firewalling Project:</strong> pfSense deployment & LAN hardening",
        snrtSummary: "Hardened perimeter security and gained control over traffic flows between local LAN subnets and outbound traffic at the National Broadcasting and Television Company (SNRT).",
        snrtP1: "<strong>pfSense Appliance Deployment:</strong> Installed and customized the open-source pfSense firewall appliance, configuring WAN/LAN interfaces and stateful inspection filter policies.",
        snrtP2: "<strong>Security Policies & ACLs:</strong> Enforced Default-Deny rule sets, blocked unauthorized protocols, and isolated sensitive production hosts.",
        snrtP3: "<strong>Traffic Flow & Log Auditing:</strong> Analyzed firewall logs to detect port scanning attempts, suspicious query anomalies, and rogue network activity.",
      },
      projects: {
        tag: "03 // TECHNICAL PROJECTS",
        title: "Projects focused on <span class=\"gradient-text\">resilience and traceability</span>",
        subtitle: "Fullstack engineering and infrastructure hardening: from low-level network protocols to secure web applications.",
        p1Title: "SecureVision — SOC & Cyber Risk Monitoring",
        p1Desc: "Infrastructure and cyber alert monitoring web platform integrated with the Zabbix API. Features real-time incident dashboards, anomaly correlation, and immutable JWT audit trails.",
        p2Title: "Hardened SSH Bastion & ProxyJump",
        p2Desc: "Secure remote server administration web app utilizing jump-host relays. Enforces strong admin authentication, isolated SSH tunnels, bcrypt hashing, and complete session auditing.",
        p3Title: "Secure Car Rental Web Platform",
        p3Desc: "Full-featured web application for vehicle fleet reservation, rental contracts, and automated invoicing built with Laravel. Hardened against SQL injections and unauthorized transactions.",
        githubTitle: "Source code & public repositories",
        githubDesc: "Explore all of my source code implementations, security configurations, and open-source projects on my GitHub profile.",
      },
      skills: {
        tag: "04 // SKILLS & EXPERTISE",
        title: "Toolbox of a <span class=\"gradient-text\">Security & Network Engineer</span>",
        subtitle: "A balanced blend of audit toolsets, network protocols, operating systems, and scripting languages.",
        d1Title: "Cybersecurity & Networks",
        d1Sub: "Defense, filtering & architecture",
        d2Title: "Systems & Infrastructure",
        d2Sub: "Environments & protocols",
        d3Title: "Audit & Analysis Tools",
        d3Sub: "Detection, capture & diagnostics",
        d4Title: "Development & Cryptography",
        d4Sub: "Automation & application security",
        radarBadge: "SECURITY ENGINEERING MATRIX · NIST & SECOPS",
        radarTitle: "Multidimensional Skill Evaluation",
        radarGlobalSub: "Global Index",
        radarHint: "Hover a vertex or click to inspect diagnostic",
        diagProofLabel: "Proof / Application:",
        diagMetricLabel: "Key Metric:",
        diagStackLabel: "Associated Technologies:",
        diagPfeReady: "Operational for PFE internship roles from early 2027",
      },
      certs: {
        tag: "05 // CERTIFICATIONS & CREDENTIALS",
        title: "A proven commitment with <span class=\"gradient-text\">16 certifications</span>",
        subtitle: "Continuous validation of technical skills through premier IT and security industry bodies.",
        verified: "Official credential verified",
      },
      contact: {
        tag: "06 // GET IN TOUCH",
        title: "Let's discuss your <span class=\"gradient-text\">PFE internship</span> opportunity",
        subtitle: "Are you looking for an agile, proactive candidate ready to take on network and systems security challenges starting early 2027? I would be glad to connect.",
        cardRole: "Cybersecurity & Network Engineering Student (Master's level)",
        cardDesc: "Available starting February / early 2027 for a 4 to 6-month final-year internship. Mobility: Rabat, Casablanca, hybrid or remote.",
        locTitle: "Location & Availability",
        locVal: "Rabat, Morocco (Available for Casablanca & Remote)",
        formTitle: "Send a direct message",
        lblName: "Your Name / Organization",
        lblEmail: "Your Email Address",
        lblSubject: "Opportunity Subject",
        lblMessage: "Message or internship proposal details",
        phName: "e.g. John Doe (Recruiter / CISO)",
        phEmail: "e.g. recruiter@company.com",
        phSubject: "e.g. PFE Internship Opportunity — Cybersecurity / SOC",
        phMessage: "Hello Sohayb, we reviewed your portfolio and would like to schedule an interview...",
        btnSend: "Send Message",
      },
      footer: {
        copy: "Computer Engineering Student (EMSI Rabat) · Cybersecurity & Networks. Crafted with technical precision and care.",
        rights: "© 2026 Sohayb Kezzouli. All rights reserved.",
      },
      modalCv: {
        tag: "Official Curriculum Vitae // Sohayb Kezzouli",
        title: "Network & Cybersecurity Engineering Student",
        boxTitle: "2026/2027 PFE Application Dossier",
        boxDesc: "Access Sohayb Kezzouli's complete and up-to-date resume in PDF format (EMSI academic background, 3 institutional internships at CDG/TGR/SNRT, and 16 accredited certifications).",
        btnDownload: "Download Resume (PDF)",
        btnEmail: "Request via Email",
        tip: "ℹ️ Tip: To provide your customized resume, simply save it as <code>CV - Sohayb Kezzouli.pdf</code>.",
      },
      toast: {
        langSwitched: "Language switched: English 🇬🇧",
      }
    }
  };

  function getSavedLanguage() {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'fr') return saved;
    return 'fr';
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.add('show');
    clearTimeout(window.__toastTimeout);
    window.__toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
  window.showToast = showToast;

  function setLanguage(lang, showToastFeedback = true) {
    if (lang !== 'fr' && lang !== 'en') lang = 'fr';

    const t = translations[lang];
    if (!t) return;

    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    // 1. Update document title & meta description
    if (t.page?.title) document.title = t.page.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.page?.metaDesc) metaDesc.setAttribute('content', t.page.metaDesc);

    // 2. Update all data-i18n elements (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(t, key);
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    });

    // 3. Update all data-i18n-html elements (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = getNestedValue(t, key);
      if (val !== undefined && val !== null) {
        el.innerHTML = val;
      }
    });

    // 4. Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getNestedValue(t, key);
      if (val !== undefined && val !== null) {
        el.setAttribute('placeholder', val);
      }
    });

    // 5. Update titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = getNestedValue(t, key);
      if (val !== undefined && val !== null) {
        el.setAttribute('title', val);
      }
    });

    // 6. Update hero title and glitch data-text
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && t.hero?.title) {
      heroTitle.innerHTML = t.hero.title;
      heroTitle.setAttribute('data-text', t.hero.titleText || heroTitle.innerText);
      heroTitle.setAttribute('data-original-text', heroTitle.innerText);
    }

    // 7. Update scramble elements original text
    document.querySelectorAll('[data-scramble]').forEach(el => {
      el.setAttribute('data-original-text', el.innerText);
    });

    // 8. Update active class on switcher buttons
    const frOpt = document.getElementById('lang-fr');
    const enOpt = document.getElementById('lang-en');
    if (frOpt && enOpt) {
      if (lang === 'en') {
        frOpt.classList.remove('active');
        enOpt.classList.add('active');
      } else {
        frOpt.classList.add('active');
        enOpt.classList.remove('active');
      }
    }

    // 9. Toast notification
    if (showToastFeedback && typeof window.showToast === 'function') {
      window.showToast(t.toast.langSwitched);
    }

    // 10. Dispatch custom event for dynamic components (like the cyber radar)
    window.dispatchEvent(new CustomEvent('portfolioLanguageChanged', { detail: { lang } }));
  }

  function getNestedValue(obj, path) {
    if (!path) return undefined;
    const parts = path.split('.');
    let curr = obj;
    for (const p of parts) {
      if (curr && typeof curr === 'object' && p in curr) {
        curr = curr[p];
      } else {
        return undefined;
      }
    }
    return curr;
  }

  function toggleLanguage() {
    const current = localStorage.getItem('portfolio_lang') === 'en' ? 'en' : 'fr';
    const next = current === 'fr' ? 'en' : 'fr';
    setLanguage(next, true);
  }

  // Expose global methods
  window.setPortfolioLanguage = setLanguage;
  window.togglePortfolioLanguage = toggleLanguage;
  window.portfolioTranslations = translations;

  // Initialize listeners as soon as DOM is ready
  function initLanguageSwitcher() {
    const langBtn = document.getElementById('lang-toggle-btn');
    const langFr = document.getElementById('lang-fr');
    const langEn = document.getElementById('lang-en');

    if (langEn) {
      langEn.addEventListener('click', (e) => {
        e.stopPropagation();
        setLanguage('en', true);
      });
    }

    if (langFr) {
      langFr.addEventListener('click', (e) => {
        e.stopPropagation();
        setLanguage('fr', true);
      });
    }

    if (langBtn) {
      langBtn.addEventListener('click', (e) => {
        // If clicked on child span, it's already handled above
        if (e.target === langFr || e.target === langEn) return;
        toggleLanguage();
      });
    }

    // Apply saved language on load without toast notification
    const initialLang = getSavedLanguage();
    setLanguage(initialLang, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();

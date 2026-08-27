// Translation data structure
const translations = {
    en: {
        // Header
        title: "Account Manager | Tech Sales & AI",
        downloadCV: "Download CV as PDF",

        // Professional Summary
        professionalSummary: "Professional Summary",
        summaryTitle: "Account Manager with a Passion for Tech & AI",
        summaryText1: "I'm an account manager who thrives on building long-lasting, sustainable relationships. I get my energy from creating win–win situations and connecting with people from all over the world. Thanks to my international experience, I understand and adapt easily to different cultures, which helps me build trust and meaningful collaborations.",
        summaryText2: "What sets me apart is my hands-on curiosity for technology — <strong>I actively build with it</strong>. I've been developing platforms and experimenting with AI to deepen my understanding of modern tech, from APIs and full-stack development to AI integrations and debugging. This gives me a genuine technical perspective that complements my commercial background. I'm looking to grow in the tech industry where I can bridge business understanding with real technical skills.",
        valueTag1: "Relationship Building",
        valueTag2: "AI & Platform Building",
        valueTag3: "International Markets",
        valueTag4: "Business Development",
        valueTag5: "Technical Fluency",

        // Core Competencies
        coreCompetencies: "Core Competencies",
        competency1Title: "International Account Management",
        competency1Text: "Extensive experience in <strong>building and maintaining long-term international client relationships</strong>. Expert in cross-cultural communication and global business development.",
        competency2Title: "Negotiation & Contract Management",
        competency2Text: "Skilled in <strong>negotiating prices, creating tailored offers, and managing tenders</strong>. Experience with contract management and strategic deal-making.",
        competency3Title: "AI & Platform Development",
        competency3Text: "Passionate about <strong>building and experimenting with AI-powered platforms</strong>. Hands-on experience developing and iterating on AI tools, fixing bugs, and exploring how modern AI technologies work — from APIs to full-stack applications.",
        competency4Title: "Technical Fluency",
        competency4Text: "Hands-on experience <strong>building web platforms, mobile apps, and AI-powered tools</strong>. This technical background enables me to speak the language of developers, product teams, and technical decision-makers.",

        // Skills & Expertise
        skillsExpertise: "Skills & Expertise",
        skillCategory1: "Sales & Account Management",
        skillCategory2: "AI & Platform Development",
        skillCategory3: "Communication",
        skillCategory4: "Tools & Platforms",
        skillCategory5: "Technical Background",
        skillCategory6: "Entrepreneurial",

        // Skill tags
        skillTags: [
            ["Business Development", "Sales Strategy", "Client Relationship Mgmt", "Negotiation", "Contract Management"],
            ["Claude AI / ChatGPT", "AI Platform Building", "Bug Fixing & Debugging", "Technical Discovery", "API Integration"],
            ["Presentation Skills", "Cross-Cultural Comms", "Stakeholder Management", "Strategic Thinking"],
            ["CRM (HubSpot, Salesforce)", "Microsoft Office / Google", "Adobe Creative Cloud", "Video Editing"],
            ["React / Node.js", "React Native (Mobile)", "REST APIs", "Git / GitHub", "Vercel / Railway"],
            ["Product Development", "B2B E-commerce", "MVP Building", "Market Validation"]
        ],

        // Professional Experience
        professionalExperience: "Professional Experience",
        present: "Present",

        // Job 1 - Dipasa
        job1Title: "International Account Manager",
        job1Company: "Dipasa Europe B.V. • Enschede, Netherlands",
        job1Date: "Nov 2024 – Dec 2025",
        job1Tasks: [
            "Building and maintaining long-term international client relationships",
            "Negotiating prices and creating tailored offers and price calculations",
            "Developing new business and entering new markets",
            "Conducting market analysis and reporting on price trends, competitors, and new opportunities",
            "Running targeted email campaigns to existing clients and prospects",
            "Managing sales pipeline and forecasting via CRM",
            "Onboarding new clients — contracts, logistics, and first orders",
            "Representing the company at trade shows and following up on leads",
            "Implementing cross-sell and upsell strategies for existing accounts",
            "Delivering quarterly sales reports and performance reviews",
            "Managing tenders and contracts",
            "Using AI tools for research, analysis, and sales optimization"
        ],

        // Job 2 - Billy Security
        job2Title: "Account Manager",
        job2Company: "Billy Security • Netherlands",
        job2Date: "Jun 2023 – Oct 2024",
        job2Tasks: [
            "Managed leads and secured new contracts through cold outreach campaigns (email & phone)",
            "Created collaboration proposals, negotiated pricing, and followed up on quotes",
            "Delivered sales presentations and product demos to prospective clients",
            "Built and maintained sales pipeline in CRM",
            "Handled client onboarding and after-sales support",
            "Used AI tools to improve communication and efficiency"
        ],

        // Job 3 - RIBW
        job3Title: "Personal Supervisor (BBL Trainee)",
        job3Company: "RIBW Overijssel • Enschede",
        job3Date: "May 2022 – Jun 2024",
        job3Tasks: [
            "Guided clients in protected living environments",
            "Created SMART care plans and reports",
            "Built partnerships with other care institutions"
        ],

        // Job 4 - GGD
        job4Title: "BCO Employee",
        job4Company: "GGD Flevoland • Lelystad",
        job4Date: "May 2020 – Sep 2022",
        job4Tasks: [
            "Communicated with COVID-19 cases and contacts",
            "Conducted interviews and coordinated reports",
            "Data entry and reporting in national registration systems",
            "Provided information and guidance to contacts on health protocols"
        ],

        // Job 5 - Islamic Relief
        job5Title: "Marketing & Communication Assistant",
        job5Company: "Islamic Relief Netherlands • Amsterdam",
        job5Date: "Jan 2019 – May 2020",
        job5Tasks: [
            "Managed external relationships and CRM donor database",
            "Ran email marketing campaigns for donor acquisition and retention",
            "Social media management and content planning",
            "Donor database management and segmentation",
            "Supported media and design projects",
            "Coordinated events and helped execute national campaigns"
        ],

        // Projects
        projectsInternships: "Projects & Internships",
        project1Title: "International Digital Marketing Strategies (Thesis)",
        project1Company: "Spillz BV • Sep 2019 – Jun 2020",
        project1Desc: "Research on digital marketing strategies for SMEs in international markets. Internal & external analysis, online trends, competitive analysis and SWOT strategic analysis.",
        project2Title: "International Packaging Policy Internship",
        project2Company: "Wood & Soul, Indonesia • Aug 2017 – Dec 2018",
        project2Desc: "Advised on packaging policy and work processes. Created catalog for international tableware company. Customer relationship management and handling international quotations (incoterms).",

        // Education
        education: "Education",
        edu1Title: "Bachelor in International Business Management Studies",
        edu1School: "Saxion University of Applied Sciences, Enschede",
        edu1Period: "2014 – 2018",
        edu2Title: "Junior Account Manager",
        edu2School: "ROC van Twente, Almelo",
        edu2Period: "2012 – 2014",

        // Volunteer Work
        volunteerWork: "Volunteer Work & Community Engagement",
        keyActivities: "Key Activities:",
        contributions: "Contributions:",
        volunteer1Title: "Chairman/Vice-Chairman",
        volunteer1Org: "Turkish Youth Association",
        volunteer1Period: "June 2012 - Present • 13+ years",
        volunteer1Desc: "Leadership role in organizing educational activities for the Turkish community in the Netherlands. Focus on youth work and community building.",
        volunteer1Tasks: [
            "Physical activities: sports and recreation",
            "Educational programs: values, norms and social themes",
            "Social cohesion: movie nights, board games, community activities",
            "PDCA methodology: planning, executing, evaluating and adjusting activities"
        ],
        volunteer1Skills: ["Leadership", "Project Management", "Community Work", "PDCA Cycle"],
        volunteer2Title: "Education Advisory Volunteer",
        volunteer2Org: "Ministry of Education, Culture and Science",
        volunteer2Period: "January 2017 - April 2017 • 4 months",
        volunteer2Desc: "Invited by the ministry to contribute to improving the transition between vocational and higher education, aimed at reducing dropout rates.",
        volunteer2Tasks: [
            "Developing ideas for more effective transitions between education levels",
            "Creating awareness about higher education teaching methodologies",
            "Strategies for increased competitiveness within vocational education",
            "Collaboration with diverse stakeholders in education"
        ],
        volunteer2Skills: ["Policy Advice", "Education Innovation", "Stakeholder Engagement", "Government Collaboration"],

        // Day in the Life
        dayInLife: "A Day in My Work Life",
        daySubtitle: "Discover what a typical workday looks like as an international account manager - from first coffee to last email",
        morning: "Morning",
        midday: "Midday",
        afternoon: "Afternoon",
        evening: "Evening",

        // References
        references: "References & Recommendations",
        referencesIntro: "Former colleagues and partners can share their experiences and recommendations about our collaboration below.",
        shareExperience: "Share your experience",
        shareExperienceSubtitle: "Have you worked with Mikail? Share your experience below.",
        formName: "Name",
        formPosition: "Position & Organization",
        formEmail: "Email",
        formPeriod: "Collaboration Period",
        formRelation: "In what capacity did you work together?",
        formSelect: "Select...",
        formRelation1: "Direct Colleague",
        formRelation2: "Supervisor",
        formRelation3: "Team Member",
        formRelation4: "Client",
        formRelation5: "Supplier/Partner",
        formRelation6: "Project Partner",
        formRelation7: "Other",
        formTestimonial: "Your recommendation",
        formTestimonialPlaceholder: "Share your experience working with Mikail. What were his strengths? How did he contribute to the team/project?",
        formRating: "Overall collaboration rating",
        submitRecommendation: "Submit Recommendation",
        receivedRecommendations: "Received Recommendations",
        referencesPlaceholder: "Recommendations from colleagues will appear here once submitted.",

        // Languages
        languages: "Languages",
        languageNative: "Dutch (Native)",
        languageFluent1: "English (Fluent)",
        languageFluent2: "Turkish (Fluent)",
        languageIntermediate: "Spanish (Intermediate)",

        // Success messages
        successMessage: "Thank you for your recommendation! It is now displayed in the references section.",

        // Featured Projects
        featuredProjects: "Featured Projects",
        featuredProjectsSubtitle: "Explore some of the digital solutions and platforms I've developed",

        // Project 1 - Renovibez
        renovibezDesc: "Online renovation platform connecting homeowners with verified contractors in the Netherlands. Features AI-powered matching, instant quotes within 24 hours, and comprehensive project management tools. Currently in production phase.",
        renovibezFeature1: "Contractor Verification System",
        renovibezFeature2: "24-Hour Quote Delivery",
        renovibezFeature3: "6 Renovation Categories",

        // Project 2 - Hirezon
        hirezonDesc: "AI-powered job search platform currently in development. Features automated cover letter generation, application tracking, and data-driven insights. Built hands-on to grow AI and full-stack development skills — currently in beta while finalizing payment integration before launch.",
        hirezonFeature1: "AI Cover Letter Generator",
        hirezonFeature2: "Application Tracking Dashboard",
        hirezonFeature3: "Beta — Finalizing Payment Integration",

        // Project 3 - CV Website
        cvWebsiteDesc: "Modern, interactive CV website showcasing professional experience and skills. Features bilingual support (EN/NL), dynamic content switching, PDF generation, and responsive design for all devices.",
        cvWebsiteFeature1: "Bilingual Interface (EN/NL)",
        cvWebsiteFeature2: "PDF Export Functionality",
        cvWebsiteFeature3: "Interactive Timeline",

        // Common
        visitWebsite: "Visit Website",
        youreHere: "You're Here!",

        // Floating button
        floatingDownloadCV: "Download CV"
    },
    nl: {
        // Header
        title: "Account Manager | Tech Sales & AI",
        downloadCV: "Download CV als PDF",

        // Professional Summary
        professionalSummary: "Professionele Samenvatting",
        summaryTitle: "Account Manager met een Passie voor Tech & AI",
        summaryText1: "Ik ben een account manager die energie haalt uit het opbouwen van duurzame, langdurige relaties. Ik haal mijn motivatie uit het creëren van win-winsituaties en het verbinden met mensen van over de hele wereld. Dankzij mijn internationale ervaring begrijp en pas ik me gemakkelijk aan verschillende culturen aan, wat me helpt vertrouwen en betekenisvolle samenwerkingen op te bouwen.",
        summaryText2: "Wat mij onderscheidt is mijn hands-on nieuwsgierigheid voor technologie — <strong>ik bouw er actief mee</strong>. Ik ontwikkel platforms en experimenteer met AI om mijn begrip van moderne technologie te verdiepen: van APIs en full-stack development tot AI-integraties en het oplossen van bugs. Dit geeft mij een authentiek technisch perspectief dat mijn commerciële achtergrond aanvult. Ik wil groeien in de tech-industrie waar ik zakelijk inzicht kan verbinden met echte technische vaardigheden.",
        valueTag1: "Relatieopbouw",
        valueTag2: "AI & Platform Bouwen",
        valueTag3: "Internationale Markten",
        valueTag4: "Business Development",
        valueTag5: "Technische Kennis",

        // Core Competencies
        coreCompetencies: "Kerncompetenties",
        competency1Title: "International Account Management",
        competency1Text: "Uitgebreide ervaring in <strong>het opbouwen en onderhouden van langdurige internationale klantrelaties</strong>. Expert in interculturele communicatie en wereldwijde bedrijfsontwikkeling.",
        competency2Title: "Onderhandeling & Contractbeheer",
        competency2Text: "Bedreven in <strong>het onderhandelen over prijzen, het creëren van op maat gemaakte aanbiedingen en het beheren van aanbestedingen</strong>. Ervaring met contractbeheer en strategische dealmaking.",
        competency3Title: "AI & Platform Ontwikkeling",
        competency3Text: "Gepassioneerd over <strong>het bouwen en experimenteren met AI-aangedreven platforms</strong>. Hands-on ervaring met het ontwikkelen en itereren van AI-tools, het oplossen van bugs en het ontdekken van hoe moderne AI-technologieën werken — van APIs tot full-stack applicaties.",
        competency4Title: "Technische Kennis",
        competency4Text: "Hands-on ervaring met <strong>het bouwen van webplatforms, mobiele apps en AI-aangedreven tools</strong>. Deze technische achtergrond stelt mij in staat om de taal te spreken van developers, productteams en technische besluitvormers.",

        // Skills & Expertise
        skillsExpertise: "Vaardigheden & Expertise",
        skillCategory1: "Sales & Account Management",
        skillCategory2: "AI & Platform Ontwikkeling",
        skillCategory3: "Communicatie",
        skillCategory4: "Tools & Platforms",
        skillCategory5: "Technische Achtergrond",
        skillCategory6: "Ondernemerschap",

        // Skill tags
        skillTags: [
            ["Business Development", "Verkoopstrategie", "Klantrelatiebeheer", "Onderhandeling", "Contractbeheer"],
            ["Claude AI / ChatGPT", "AI Platform Bouwen", "Bug Fixing & Debugging", "Technische Discovery", "API Integratie"],
            ["Presentatievaardigheden", "Interculturele Comm.", "Stakeholder Management", "Strategisch Denken"],
            ["CRM (HubSpot, Salesforce)", "Microsoft Office / Google", "Adobe Creative Cloud", "Video Editing"],
            ["React / Node.js", "React Native (Mobiel)", "REST APIs", "Git / GitHub", "Vercel / Railway"],
            ["Productontwikkeling", "B2B E-commerce", "MVP Bouwen", "Marktvalidatie"]
        ],

        // Professional Experience
        professionalExperience: "Werkervaring",
        present: "Heden",

        // Job 1 - Dipasa
        job1Title: "International Account Manager",
        job1Company: "Dipasa Europe B.V. • Enschede, Nederland",
        job1Date: "Nov 2024 – Dec 2025",
        job1Tasks: [
            "Opbouwen en onderhouden van langdurige internationale klantrelaties",
            "Onderhandelen over prijzen en opstellen van op maat gemaakte offertes en prijscalculaties",
            "Ontwikkelen van nieuwe business en betreden van nieuwe markten",
            "Uitvoeren van marktanalyses en rapporteren over prijstrends, concurrenten en nieuwe kansen",
            "Uitvoeren van gerichte e-mailcampagnes naar bestaande klanten en prospects",
            "Beheren van sales pipeline en forecasting via CRM",
            "Onboarding van nieuwe klanten — contracten, logistiek en eerste orders",
            "Vertegenwoordigen van het bedrijf op beurzen en opvolgen van leads",
            "Implementeren van cross-sell en upsell strategieën voor bestaande accounts",
            "Opstellen van kwartaalrapportages en sales performance reviews",
            "Beheren van aanbestedingen en contracten",
            "Gebruik van AI-tools voor onderzoek, analyse en verkoopoptimalisatie"
        ],

        // Job 2 - Billy Security
        job2Title: "Account Manager",
        job2Company: "Billy Security • Nederland",
        job2Date: "Jun 2023 – Okt 2024",
        job2Tasks: [
            "Beheren van leads en binnenhalen van nieuwe contracten via cold outreach campagnes (e-mail & telefoon)",
            "Opstellen van samenwerkingsvoorstellen, onderhandelen over prijzen en opvolgen van offertes",
            "Geven van verkooppresentaties en productdemo's aan potentiële klanten",
            "Opbouwen en bijhouden van sales pipeline in CRM",
            "Verzorgen van klant onboarding en after-sales support",
            "Gebruik van AI-tools om communicatie en efficiëntie te verbeteren"
        ],

        // Job 3 - RIBW
        job3Title: "Persoonlijk Begeleider (BBL Stagiair)",
        job3Company: "RIBW Overijssel • Enschede",
        job3Date: "Mei 2022 – Jun 2024",
        job3Tasks: [
            "Begeleiden van cliënten in beschermde woonvormen",
            "Opstellen van SMART-zorgplannen en rapportages",
            "Opbouwen van samenwerkingen met andere zorginstellingen"
        ],

        // Job 4 - GGD
        job4Title: "BCO Medewerker",
        job4Company: "GGD Flevoland • Lelystad",
        job4Date: "Mei 2020 – Sep 2022",
        job4Tasks: [
            "Communiceren met COVID-19 gevallen en contacten",
            "Uitvoeren van interviews en coördineren van rapportages",
            "Data-invoer en rapportage in landelijke registratiesystemen",
            "Voorlichting en begeleiding van contacten over gezondheidsprotocollen"
        ],

        // Job 5 - Islamic Relief
        job5Title: "Marketing & Communicatie Assistent",
        job5Company: "Islamic Relief Nederland • Amsterdam",
        job5Date: "Jan 2019 – Mei 2020",
        job5Tasks: [
            "Beheren van externe relaties en CRM donateurdatabase",
            "Uitvoeren van e-mailmarketingcampagnes voor donateurswerving en -behoud",
            "Social media beheer en contentplanning",
            "Donateursdatabase beheer en segmentatie",
            "Ondersteunen van media- en designprojecten",
            "Coördineren van evenementen en uitvoeren van nationale campagnes"
        ],

        // Projects
        projectsInternships: "Projecten & Stages",
        project1Title: "Internationale Digitale Marketingstrategieën (Scriptie)",
        project1Company: "Spillz BV • Sep 2019 – Jun 2020",
        project1Desc: "Onderzoek naar digitale marketingstrategieën voor MKB in internationale markten. Interne & externe analyse, online trends, concurrentieanalyse en SWOT strategische analyse.",
        project2Title: "Internationale Verpakkingsbeleid Stage",
        project2Company: "Wood & Soul, Indonesië • Aug 2017 – Dec 2018",
        project2Desc: "Advies over verpakkingsbeleid en werkprocessen. Catalogus gecreëerd voor internationaal serviesbedrijf. Klantrelatiebeheer en afhandeling van internationale offertes (incoterms).",

        // Education
        education: "Opleiding",
        edu1Title: "Bachelor International Business Management Studies",
        edu1School: "Saxion Hogeschool, Enschede",
        edu1Period: "2014 – 2018",
        edu2Title: "Junior Account Manager",
        edu2School: "ROC van Twente, Almelo",
        edu2Period: "2012 – 2014",

        // Volunteer Work
        volunteerWork: "Vrijwilligerswerk & Gemeenschapsbetrokkenheid",
        keyActivities: "Belangrijkste Activiteiten:",
        contributions: "Bijdragen:",
        volunteer1Title: "Voorzitter/Vicevoorzitter",
        volunteer1Org: "Turkse Jongerenvereniging",
        volunteer1Period: "Juni 2012 - Heden • 13+ jaar",
        volunteer1Desc: "Leiderschapsrol bij het organiseren van educatieve activiteiten voor de Turkse gemeenschap in Nederland. Focus op jongerenwerk en gemeenschapsopbouw.",
        volunteer1Tasks: [
            "Fysieke activiteiten: sport en recreatie",
            "Educatieve programma's: waarden, normen en maatschappelijke thema's",
            "Sociale cohesie: filmavonden, bordspellen, gemeenschapsactiviteiten",
            "PDCA-methodiek: plannen, uitvoeren, evalueren en bijsturen van activiteiten"
        ],
        volunteer1Skills: ["Leiderschap", "Projectmanagement", "Gemeenschapswerk", "PDCA Cyclus"],
        volunteer2Title: "Vrijwilliger Onderwijsadvies",
        volunteer2Org: "Ministerie van Onderwijs, Cultuur en Wetenschap",
        volunteer2Period: "Januari 2017 - April 2017 • 4 maanden",
        volunteer2Desc: "Uitgenodigd door het ministerie om bij te dragen aan het verbeteren van de doorstroom tussen mbo en hbo, gericht op het verminderen van uitval.",
        volunteer2Tasks: [
            "Ontwikkelen van ideeën voor effectievere overgangen tussen onderwijsniveaus",
            "Bewustwording creëren over onderwijsmethodieken in het hoger onderwijs",
            "Strategieën voor verhoogde competitiviteit binnen het beroepsonderwijs",
            "Samenwerking met diverse belanghebbenden in het onderwijs"
        ],
        volunteer2Skills: ["Beleidsadvies", "Onderwijsinnovatie", "Stakeholder Engagement", "Overheidsrelaties"],

        // Day in the Life
        dayInLife: "Een Dag uit Mijn Werkleven",
        daySubtitle: "Ontdek hoe een typische werkdag eruit ziet als international account manager - van eerste koffie tot laatste e-mail",
        morning: "Ochtend",
        midday: "Middag",
        afternoon: "Namiddag",
        evening: "Avond",

        // References
        references: "Referenties & Aanbevelingen",
        referencesIntro: "Voormalige collega's en partners kunnen hieronder hun ervaringen en aanbevelingen over onze samenwerking delen.",
        shareExperience: "Deel je ervaring",
        shareExperienceSubtitle: "Heb je met Mikail samengewerkt? Deel hieronder je ervaring.",
        formName: "Naam",
        formPosition: "Functie & Organisatie",
        formEmail: "E-mail",
        formPeriod: "Samenwerkingsperiode",
        formRelation: "In welke hoedanigheid hebben jullie samengewerkt?",
        formSelect: "Selecteer...",
        formRelation1: "Directe Collega",
        formRelation2: "Leidinggevende",
        formRelation3: "Teamlid",
        formRelation4: "Klant",
        formRelation5: "Leverancier/Partner",
        formRelation6: "Projectpartner",
        formRelation7: "Anders",
        formTestimonial: "Jouw aanbeveling",
        formTestimonialPlaceholder: "Deel je ervaring met Mikail. Wat waren zijn sterke punten? Hoe heeft hij bijgedragen aan het team/project?",
        formRating: "Algemene samenwerkingsbeoordeling",
        submitRecommendation: "Aanbeveling Versturen",
        receivedRecommendations: "Ontvangen Aanbevelingen",
        referencesPlaceholder: "Aanbevelingen van collega's verschijnen hier zodra ze zijn ingediend.",

        // Languages
        languages: "Talen",
        languageNative: "Nederlands (Moedertaal)",
        languageFluent1: "Engels (Vloeiend)",
        languageFluent2: "Turks (Vloeiend)",
        languageIntermediate: "Spaans (Gemiddeld)",

        // Success messages
        successMessage: "Bedankt voor je aanbeveling! Deze wordt nu getoond in de referenties sectie.",

        // Featured Projects
        featuredProjects: "Uitgelichte Projecten",
        featuredProjectsSubtitle: "Ontdek enkele digitale oplossingen en platforms die ik heb ontwikkeld",

        // Project 1 - Renovibez
        renovibezDesc: "Online renovatieplatform dat huiseigenaren verbindt met geverifieerde aannemers in Nederland. Beschikt over AI-gestuurde matching, offertes binnen 24 uur en uitgebreide projectbeheertools. Momenteel in productiefase.",
        renovibezFeature1: "Verificatiesysteem voor Aannemers",
        renovibezFeature2: "Offertes binnen 24 Uur",
        renovibezFeature3: "6 Renovatiecategorieën",

        // Project 2 - Hirezon
        hirezonDesc: "AI-aangedreven vacatureplatform momenteel in ontwikkeling. Bevat geautomatiseerde motivatiebriefgeneratie, sollicitatietracking en data-gedreven inzichten. Hands-on gebouwd om AI- en full-stack vaardigheden te ontwikkelen — momenteel in bèta terwijl de betalingsintegratie wordt afgerond voor de lancering.",
        hirezonFeature1: "AI Motivatiebrief Generator",
        hirezonFeature2: "Sollicitatie Tracking Dashboard",
        hirezonFeature3: "Bèta — Betalingsintegratie wordt afgerond",

        // Project 3 - CV Website
        cvWebsiteDesc: "Moderne, interactieve CV-website die professionele ervaring en vaardigheden toont. Beschikt over tweetalige ondersteuning (EN/NL), dynamische inhoudswisseling, PDF-generatie en responsive design voor alle apparaten.",
        cvWebsiteFeature1: "Tweetalige Interface (EN/NL)",
        cvWebsiteFeature2: "PDF Export Functionaliteit",
        cvWebsiteFeature3: "Interactieve Tijdlijn",

        // Common
        visitWebsite: "Bezoek Website",
        youreHere: "Je bent hier!",

        // Floating button
        floatingDownloadCV: "Download CV"
    }
};

// Profile data - overrides per industry
const profiles = {
    general: {
        // No overrides — uses default translations as-is
        accentColor: '#5dade2',
        highlightSkills: [], // no highlighting, all equal
        sectionOrder: null // default order
    },
    tech: {
        accentColor: '#6366f1',
        en: {
            title: "Tech Sales & AI | Full-Stack Builder",
            summaryTitle: "Tech-Savvy Professional Who Builds With Code & AI",
            summaryText1: "I'm a hands-on tech enthusiast who bridges business and engineering. I don't just talk about technology — <strong>I actively build with it</strong>. From developing AI-powered platforms to full-stack web applications, I bring a unique blend of commercial instinct and technical execution.",
            summaryText2: "My experience spans React, Node.js, REST APIs, and AI integrations. I've built platforms like Renovibez (contractor matching) and Hirezon (AI job search), demonstrating my ability to take ideas from concept to production. Combined with my international sales background, I understand both the customer and the codebase.",
            valueTag1: "Full-Stack Development",
            valueTag2: "AI & Platform Building",
            valueTag3: "API Integration",
            valueTag4: "Technical Problem Solving",
            valueTag5: "Product Development",
            competency1Title: "AI & Platform Development",
            competency1Text: "Passionate about <strong>building and experimenting with AI-powered platforms</strong>. Hands-on experience developing and iterating on AI tools, fixing bugs, and exploring how modern AI technologies work — from APIs to full-stack applications.",
            competency2Title: "Full-Stack Web Development",
            competency2Text: "Hands-on experience <strong>building web platforms, mobile apps, and AI-powered tools</strong> using React, Node.js, and modern cloud infrastructure. Comfortable across the entire stack from database to deployment.",
            competency3Title: "Technical Sales & Pre-Sales",
            competency3Text: "Unique ability to <strong>bridge technical teams and business stakeholders</strong>. Can demo products, understand technical requirements, and translate complex solutions into business value for clients.",
            competency4Title: "Product & MVP Development",
            competency4Text: "Proven track record of <strong>taking ideas from concept to working product</strong>. Built multiple platforms from scratch, managing the full development lifecycle including architecture, development, and deployment."
        },
        nl: {
            title: "Tech Sales & AI | Full-Stack Bouwer",
            summaryTitle: "Tech-Savvy Professional die Bouwt met Code & AI",
            summaryText1: "Ik ben een hands-on tech-enthousiasteling die business en engineering verbindt. Ik praat niet alleen over technologie — <strong>ik bouw er actief mee</strong>. Van het ontwikkelen van AI-aangedreven platforms tot full-stack webapplicaties, ik breng een unieke mix van commercieel instinct en technische uitvoering.",
            summaryText2: "Mijn ervaring omvat React, Node.js, REST APIs en AI-integraties. Ik heb platforms gebouwd zoals Renovibez (aannemermatching) en Hirezon (AI vacaturezoeker), wat mijn vermogen aantoont om ideeën van concept tot productie te brengen. Gecombineerd met mijn internationale salesachtergrond begrijp ik zowel de klant als de codebase.",
            valueTag1: "Full-Stack Development",
            valueTag2: "AI & Platform Bouwen",
            valueTag3: "API Integratie",
            valueTag4: "Technisch Probleemoplossen",
            valueTag5: "Productontwikkeling",
            competency1Title: "AI & Platform Ontwikkeling",
            competency1Text: "Gepassioneerd over <strong>het bouwen en experimenteren met AI-aangedreven platforms</strong>. Hands-on ervaring met het ontwikkelen en itereren van AI-tools, het oplossen van bugs en het ontdekken van hoe moderne AI-technologieën werken — van APIs tot full-stack applicaties.",
            competency2Title: "Full-Stack Webontwikkeling",
            competency2Text: "Hands-on ervaring met <strong>het bouwen van webplatforms, mobiele apps en AI-aangedreven tools</strong> met React, Node.js en moderne cloud-infrastructuur. Comfortabel over de gehele stack van database tot deployment.",
            competency3Title: "Technische Sales & Pre-Sales",
            competency3Text: "Uniek vermogen om <strong>technische teams en zakelijke stakeholders te verbinden</strong>. Kan producten demonstreren, technische vereisten begrijpen en complexe oplossingen vertalen naar bedrijfswaarde voor klanten.",
            competency4Title: "Product & MVP Ontwikkeling",
            competency4Text: "Bewezen track record in <strong>het brengen van ideeën van concept naar werkend product</strong>. Meerdere platforms vanaf nul gebouwd, met beheer van de volledige ontwikkelingslevenscyclus inclusief architectuur, ontwikkeling en deployment."
        },
        highlightSkills: [1, 4, 5], // AI & Platform, Technical Background, Entrepreneurial (0-indexed)
        featuredExperience: [0, 1], // Dipasa, Billy Security
        sectionOrder: ['intro', 'expertise', 'featured-projects', 'competencies', 'experience', 'projects', 'education', 'volunteer', 'day-in-life', 'references', 'languages']
    },
    sales: {
        accentColor: '#f59e0b',
        en: {
            title: "Account Manager | Business Development & International Sales",
            summaryTitle: "Results-Driven Account Manager with International Experience",
            summaryText1: "I'm an account manager who thrives on building long-lasting, sustainable relationships. I get my energy from creating win–win situations and connecting with people from all over the world. With proven experience managing international accounts across multiple industries, I consistently deliver revenue growth through strategic relationship building.",
            summaryText2: "My commercial toolkit spans cold outreach, tender management, contract negotiation, and CRM optimization. At Dipasa Europe I managed international B2B relationships across global markets, and at Billy Security I built the sales pipeline from the ground up. I complement my sales expertise with <strong>tech-savviness and AI tools</strong> to work smarter and stay ahead of the competition.",
            valueTag1: "Relationship Building",
            valueTag2: "Revenue Growth",
            valueTag3: "International Markets",
            valueTag4: "Business Development",
            valueTag5: "Negotiation & Contracts",
            competency1Title: "International Account Management",
            competency1Text: "Extensive experience in <strong>building and maintaining long-term international client relationships</strong>. Expert in cross-cultural communication and global business development across multiple industries.",
            competency2Title: "Negotiation & Contract Management",
            competency2Text: "Skilled in <strong>negotiating prices, creating tailored offers, and managing tenders</strong>. Experience with contract management and strategic deal-making that consistently delivers results.",
            competency3Title: "Sales Strategy & Pipeline Management",
            competency3Text: "Proven track record in <strong>building and managing sales pipelines</strong> from cold outreach to closed deals. Expertise in CRM systems, forecasting, and implementing cross-sell and upsell strategies.",
            competency4Title: "Marketing & Campaign Management",
            competency4Text: "Experience in <strong>designing and executing marketing campaigns</strong> for donor acquisition, email marketing, and social media management. Data-driven approach to measuring campaign effectiveness."
        },
        nl: {
            title: "Account Manager | Business Development & Internationale Sales",
            summaryTitle: "Resultaatgerichte Account Manager met Internationale Ervaring",
            summaryText1: "Ik ben een account manager die energie haalt uit het opbouwen van duurzame, langdurige relaties. Ik haal mijn motivatie uit het creëren van win-winsituaties en het verbinden met mensen van over de hele wereld. Met bewezen ervaring in het beheren van internationale accounts in meerdere industrieën, lever ik consistent omzetgroei door strategische relatieopbouw.",
            summaryText2: "Mijn commerciële toolkit omvat cold outreach, aanbestedingsbeheer, contractonderhandeling en CRM-optimalisatie. Bij Dipasa Europe beheerde ik internationale B2B-relaties over wereldwijde markten, en bij Billy Security bouwde ik de sales pipeline vanaf de grond op. Ik vul mijn salesexpertise aan met <strong>tech-savviness en AI-tools</strong> om slimmer te werken en de concurrentie voor te blijven.",
            valueTag1: "Relatieopbouw",
            valueTag2: "Omzetgroei",
            valueTag3: "Internationale Markten",
            valueTag4: "Business Development",
            valueTag5: "Onderhandeling & Contracten",
            competency1Title: "International Account Management",
            competency1Text: "Uitgebreide ervaring in <strong>het opbouwen en onderhouden van langdurige internationale klantrelaties</strong>. Expert in interculturele communicatie en wereldwijde bedrijfsontwikkeling in meerdere industrieën.",
            competency2Title: "Onderhandeling & Contractbeheer",
            competency2Text: "Bedreven in <strong>het onderhandelen over prijzen, het creëren van op maat gemaakte aanbiedingen en het beheren van aanbestedingen</strong>. Ervaring met contractbeheer en strategische dealmaking die consistent resultaten oplevert.",
            competency3Title: "Verkoopstrategie & Pipeline Management",
            competency3Text: "Bewezen track record in <strong>het opbouwen en beheren van sales pipelines</strong> van cold outreach tot gesloten deals. Expertise in CRM-systemen, forecasting en het implementeren van cross-sell en upsell strategieën.",
            competency4Title: "Marketing & Campagnebeheer",
            competency4Text: "Ervaring in <strong>het ontwerpen en uitvoeren van marketingcampagnes</strong> voor donateurswerving, e-mailmarketing en social media management. Data-gedreven aanpak voor het meten van campagne-effectiviteit."
        },
        highlightSkills: [0, 2, 3], // Sales, Communication, Tools
        featuredExperience: [0, 1, 4], // Dipasa, Billy Security, Islamic Relief
        sectionOrder: ['intro', 'competencies', 'experience', 'expertise', 'projects', 'education', 'featured-projects', 'volunteer', 'day-in-life', 'references', 'languages']
    },
    government: {
        accentColor: '#10b981',
        en: {
            title: "Policy & Stakeholder Professional | Public Sector & Community",
            summaryTitle: "Community-Oriented Professional with Public Sector Experience",
            summaryText1: "I'm a dedicated professional with hands-on experience in the public sector, from healthcare coordination at GGD Flevoland to client support at RIBW Overijssel. I understand how government organizations work and thrive in environments where stakeholder management, policy execution, and community impact intersect.",
            summaryText2: "Beyond my public sector work, I've been invited by the <strong>Ministry of Education</strong> to advise on education policy, and I've spent 13+ years leading a youth association focused on community building. My international business background adds a strategic and analytical dimension, while my tech skills enable me to bring innovation and efficiency to traditional organizations.",
            valueTag1: "Stakeholder Management",
            valueTag2: "Policy & Governance",
            valueTag3: "Community Building",
            valueTag4: "Public Sector Experience",
            valueTag5: "Cross-Cultural Communication",
            competency1Title: "Stakeholder & Community Management",
            competency1Text: "Extensive experience in <strong>managing diverse stakeholders across government, healthcare, and community organizations</strong>. Skilled at building consensus, coordinating between departments, and ensuring inclusive decision-making.",
            competency2Title: "Policy Execution & Advisory",
            competency2Text: "Invited by the <strong>Ministry of Education to advise on education policy</strong>. Experience translating policy objectives into actionable plans and programs within public organizations.",
            competency3Title: "Public Health & Social Care",
            competency3Text: "Hands-on experience at <strong>GGD Flevoland (public health) and RIBW Overijssel (social care)</strong>. Understanding of care plans, health protocols, data registration systems, and client-centered approaches.",
            competency4Title: "Digital Innovation in Government",
            competency4Text: "Unique combination of <strong>public sector understanding and technical capability</strong>. Experience building digital platforms and using AI tools that can modernize and improve government services and processes."
        },
        nl: {
            title: "Beleid & Stakeholder Professional | Publieke Sector & Gemeenschap",
            summaryTitle: "Gemeenschapsgerichte Professional met Ervaring in de Publieke Sector",
            summaryText1: "Ik ben een toegewijde professional met hands-on ervaring in de publieke sector, van gezondheidscoördinatie bij GGD Flevoland tot cliëntondersteuning bij RIBW Overijssel. Ik begrijp hoe overheidsorganisaties werken en floreer in omgevingen waar stakeholdermanagement, beleidsuitvoering en maatschappelijke impact samenkomen.",
            summaryText2: "Naast mijn werk in de publieke sector ben ik uitgenodigd door het <strong>Ministerie van Onderwijs</strong> om te adviseren over onderwijsbeleid, en ik leid al 13+ jaar een jongerenvereniging gericht op gemeenschapsopbouw. Mijn internationale bedrijfsachtergrond voegt een strategische en analytische dimensie toe, terwijl mijn technische vaardigheden mij in staat stellen innovatie en efficiëntie te brengen naar traditionele organisaties.",
            valueTag1: "Stakeholder Management",
            valueTag2: "Beleid & Bestuur",
            valueTag3: "Gemeenschapsopbouw",
            valueTag4: "Publieke Sector Ervaring",
            valueTag5: "Interculturele Communicatie",
            competency1Title: "Stakeholder & Gemeenschapsmanagement",
            competency1Text: "Uitgebreide ervaring in <strong>het beheren van diverse stakeholders binnen overheid, gezondheidszorg en maatschappelijke organisaties</strong>. Bedreven in het bouwen van consensus, coördineren tussen afdelingen en het waarborgen van inclusieve besluitvorming.",
            competency2Title: "Beleidsuitvoering & Advisering",
            competency2Text: "Uitgenodigd door het <strong>Ministerie van Onderwijs om te adviseren over onderwijsbeleid</strong>. Ervaring met het vertalen van beleidsdoelstellingen naar uitvoerbare plannen en programma's binnen publieke organisaties.",
            competency3Title: "Publieke Gezondheid & Sociale Zorg",
            competency3Text: "Hands-on ervaring bij <strong>GGD Flevoland (publieke gezondheid) en RIBW Overijssel (sociale zorg)</strong>. Begrip van zorgplannen, gezondheidsprotocollen, data-registratiesystemen en cliëntgerichte benaderingen.",
            competency4Title: "Digitale Innovatie bij de Overheid",
            competency4Text: "Unieke combinatie van <strong>begrip van de publieke sector en technische capaciteit</strong>. Ervaring met het bouwen van digitale platforms en het gebruik van AI-tools die overheidsdiensten en -processen kunnen moderniseren en verbeteren."
        },
        highlightSkills: [2, 0, 3], // Communication, Sales (stakeholder), Tools
        featuredExperience: [2, 3], // RIBW, GGD
        sectionOrder: ['intro', 'competencies', 'volunteer', 'experience', 'expertise', 'education', 'projects', 'featured-projects', 'day-in-life', 'references', 'languages']
    },
    creative: {
        accentColor: '#ec4899',
        en: {
            title: "Creative Producer | AI-Powered Content, Video & Brand Building",
            summaryTitle: "Creative Builder Who Takes Ideas From Blank Page to Finished Work",
            summaryText1: "I'm a creative at heart who doesn't stop at the idea — <strong>I build the whole thing</strong>. Concept, script, visuals, edit, launch. Whether it's a video from scratch, a mascot and brand identity, or a full website, I take ownership of the entire creative pipeline and deliver something people can actually use.",
            summaryText2: "AI is my creative multiplier. I use it across the whole production process — ideation, scriptwriting, visual generation, editing, and iteration — which lets me move from concept to finished product fast and without a big team. Combined with my marketing background and hands-on development skills, I create work that doesn't just look good, but is built to perform.",
            valueTag1: "Concept to Delivery",
            valueTag2: "AI-Powered Creation",
            valueTag3: "Video Production",
            valueTag4: "Brand & Mascot Design",
            valueTag5: "Marketing Campaigns",
            competency1Title: "End-to-End Video Production",
            competency1Text: "Creating video content <strong>from raw idea to finished cut</strong> — concept development, scripting, visuals, editing, and delivery. Comfortable owning the entire production process solo, using AI tools to accelerate every stage.",
            competency2Title: "AI-Powered Creative Production",
            competency2Text: "Using AI as a genuine creative tool, not a gimmick. Hands-on with <strong>generative AI for visuals, copy, video, and ideation</strong>, integrated into a real production workflow that turns concepts into shippable output at speed.",
            competency3Title: "Brand Identity & Character Design",
            competency3Text: "Developing <strong>visual identities, mascots, and brand characters</strong> that give organizations a recognizable personality. From first sketch to consistent brand system across digital and marketing channels.",
            competency4Title: "Web & Digital Experience Building",
            competency4Text: "Designing and <strong>building complete websites and digital platforms</strong> — not just mockups. Combining visual design with real front-end development to ship polished, working products like Renovibez and Hirezon."
        },
        nl: {
            title: "Creative Producer | AI-Gedreven Content, Video & Merkbouw",
            summaryTitle: "Creatieve Bouwer die Ideeën van Leeg Blad naar Eindproduct Brengt",
            summaryText1: "Ik ben een creatieveling in hart en nieren die niet stopt bij het idee — <strong>ik bouw het hele ding</strong>. Concept, script, beeld, montage, lancering. Of het nu gaat om een video vanaf nul, een mascotte en merkidentiteit, of een volledige website: ik neem eigenaarschap over de gehele creatieve pijplijn en lever iets op waar mensen daadwerkelijk mee verder kunnen.",
            summaryText2: "AI is mijn creatieve versneller. Ik zet het in door het hele productieproces heen — ideevorming, scriptschrijven, beeldgeneratie, montage en iteratie — waardoor ik snel en zonder groot team van concept naar eindproduct ga. Gecombineerd met mijn marketingachtergrond en hands-on developmentvaardigheden maak ik werk dat er niet alleen goed uitziet, maar ook is gebouwd om te presteren.",
            valueTag1: "Concept tot Oplevering",
            valueTag2: "AI-Gedreven Creatie",
            valueTag3: "Videoproductie",
            valueTag4: "Merk & Mascotte Design",
            valueTag5: "Marketingcampagnes",
            competency1Title: "End-to-End Videoproductie",
            competency1Text: "Videocontent maken <strong>van ruw idee tot afgemonteerde versie</strong> — conceptontwikkeling, scriptschrijven, beeld, montage en oplevering. Comfortabel met het zelfstandig beheren van het volledige productieproces, met AI-tools om elke fase te versnellen.",
            competency2Title: "AI-Gedreven Creatieve Productie",
            competency2Text: "AI inzetten als serieus creatief gereedschap, niet als truc. Hands-on met <strong>generatieve AI voor beeld, copy, video en ideevorming</strong>, geïntegreerd in een echte productieworkflow die concepten razendsnel omzet in bruikbaar eindresultaat.",
            competency3Title: "Merkidentiteit & Character Design",
            competency3Text: "Ontwikkelen van <strong>visuele identiteiten, mascottes en merkkarakters</strong> die organisaties een herkenbare persoonlijkheid geven. Van eerste schets tot consistent merksysteem over digitale en marketingkanalen heen.",
            competency4Title: "Web & Digitale Ervaring Bouwen",
            competency4Text: "Ontwerpen én <strong>bouwen van complete websites en digitale platforms</strong> — niet alleen mockups. Visueel ontwerp gecombineerd met echte front-end development om verzorgde, werkende producten op te leveren zoals Renovibez en Hirezon."
        },
        highlightSkills: [3, 1, 5], // Tools & Platforms (Adobe, Video), AI & Platform Development, Entrepreneurial
        featuredExperience: [4, 0], // Islamic Relief (Marketing & Comms), Dipasa
        sectionOrder: ['intro', 'featured-projects', 'competencies', 'expertise', 'experience', 'projects', 'volunteer', 'education', 'day-in-life', 'references', 'languages']
    }
};

// Profile switching functionality
let currentProfile = new URLSearchParams(window.location.search).get('profile') || localStorage.getItem('preferredProfile') || 'general';

function setProfile(profileKey) {
    currentProfile = profileKey;
    localStorage.setItem('preferredProfile', profileKey);

    // Update URL without reload
    const url = new URL(window.location);
    if (profileKey === 'general') {
        url.searchParams.delete('profile');
    } else {
        url.searchParams.set('profile', profileKey);
    }
    window.history.replaceState({}, '', url);

    // Update active button
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-profile') === profileKey);
    });

    // Apply accent color
    const profile = profiles[profileKey];
    document.documentElement.style.setProperty('--profile-accent', profile.accentColor);

    // Set body data attribute for CSS-based section reordering
    document.body.setAttribute('data-profile', profileKey);

    // Update content with profile overrides
    updateTranslations();

    // Highlight relevant skills
    applySkillHighlights(profileKey);

    // Reorder sections
    applyProfileSectionOrder(profileKey);

    // Close dropdown
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.remove('open');
}

function applySkillHighlights(profileKey) {
    const profile = profiles[profileKey];
    const skillCategories = document.querySelectorAll('.skill-category');

    skillCategories.forEach((cat, index) => {
        cat.classList.remove('skill-highlighted');
        if (profile.highlightSkills && profile.highlightSkills.includes(index)) {
            cat.classList.add('skill-highlighted');
        }
    });

    // Highlight featured experience
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.classList.remove('experience-highlighted');
        if (profile.featuredExperience && profile.featuredExperience.includes(index)) {
            item.classList.add('experience-highlighted');
        }
    });
}

function applyProfileSectionOrder(profileKey) {
    const profile = profiles[profileKey];
    const container = document.querySelector('.container');
    if (!profile.sectionOrder || !container) return;

    const sectionMap = {
        'intro': '.intro-section',
        'competencies': '.procurement-focus-section',
        'expertise': '.expertise-section',
        'experience': '.experience-section',
        'projects': '.projects-section',
        'education': '.education-section',
        'featured-projects': '.featured-projects-section',
        'volunteer': '.volunteer-section',
        'day-in-life': '.day-in-life-section',
        'references': '.references-section',
        'languages': '.languages-section'
    };

    let order = 1;
    profile.sectionOrder.forEach(key => {
        const selector = sectionMap[key];
        if (selector) {
            const section = container.querySelector(selector);
            if (section) {
                section.style.order = order++;
            }
        }
    });
}

// Language switching functionality
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all translatable elements
    updateTranslations();

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

function updateTranslations() {
    const t = Object.assign({}, translations[currentLanguage]);

    // Apply profile overrides if active
    const profile = profiles[currentProfile];
    if (profile && profile[currentLanguage]) {
        Object.assign(t, profile[currentLanguage]);
    }

    // Header
    document.querySelector('.title').textContent = t.title;
    document.querySelector('.download-cv-btn span').textContent = t.downloadCV;

    // Professional Summary
    document.querySelector('.intro-section .section-title').textContent = t.professionalSummary;
    document.querySelector('.motivation-card h3').innerHTML = `<i class="fas fa-bullseye"></i> ${t.summaryTitle}`;
    const motivationPs = document.querySelectorAll('.motivation-card p');
    motivationPs[0].innerHTML = t.summaryText1;
    if (motivationPs[1]) motivationPs[1].innerHTML = t.summaryText2;

    const valueTags = document.querySelectorAll('.value-tag');
    const valueTagIcons = ['fa-handshake', 'fa-robot', 'fa-globe', 'fa-chart-line', 'fa-code'];
    const valueTagKeys = [t.valueTag1, t.valueTag2, t.valueTag3, t.valueTag4, t.valueTag5];
    valueTags.forEach((tag, i) => {
        if (valueTagKeys[i]) tag.innerHTML = `<i class="fas ${valueTagIcons[i]}"></i> ${valueTagKeys[i]}`;
    });

    // Core Competencies
    document.querySelector('.procurement-focus-section .section-title').textContent = t.coreCompetencies;
    const competencyTitles = document.querySelectorAll('.procurement-content h3');
    const competencyTexts = document.querySelectorAll('.procurement-content p');
    const compTitleKeys = [t.competency1Title, t.competency2Title, t.competency3Title, t.competency4Title];
    const compTextKeys = [t.competency1Text, t.competency2Text, t.competency3Text, t.competency4Text];
    compTitleKeys.forEach((title, i) => {
        if (competencyTitles[i] && title) competencyTitles[i].textContent = title;
        if (competencyTexts[i] && compTextKeys[i]) competencyTexts[i].innerHTML = compTextKeys[i];
    });

    // Skills & Expertise
    document.querySelector('.expertise-section .section-title').textContent = t.skillsExpertise;
    const skillCategories = document.querySelectorAll('.skill-category h3');
    const skillCatKeys = [t.skillCategory1, t.skillCategory2, t.skillCategory3, t.skillCategory4, t.skillCategory5, t.skillCategory6];
    skillCatKeys.forEach((cat, i) => {
        if (skillCategories[i] && cat) skillCategories[i].textContent = cat;
    });

    // Skill tags
    if (t.skillTags) {
        const skillCategoryDivs = document.querySelectorAll('.skill-category');
        skillCategoryDivs.forEach((catDiv, catIndex) => {
            if (t.skillTags[catIndex]) {
                const tags = catDiv.querySelectorAll('.skill-tag');
                tags.forEach((tag, tagIndex) => {
                    if (t.skillTags[catIndex][tagIndex]) tag.textContent = t.skillTags[catIndex][tagIndex];
                });
            }
        });
    }

    // Professional Experience
    document.querySelector('.experience-section .section-title').textContent = t.professionalExperience;
    const timelineItems = document.querySelectorAll('.timeline-item');
    const jobData = [
        { title: t.job1Title, company: t.job1Company, date: t.job1Date, tasks: t.job1Tasks },
        { title: t.job2Title, company: t.job2Company, date: t.job2Date, tasks: t.job2Tasks },
        { title: t.job3Title, company: t.job3Company, date: t.job3Date, tasks: t.job3Tasks },
        { title: t.job4Title, company: t.job4Company, date: t.job4Date, tasks: t.job4Tasks },
        { title: t.job5Title, company: t.job5Company, date: t.job5Date, tasks: t.job5Tasks }
    ];
    timelineItems.forEach((item, i) => {
        if (jobData[i]) {
            const titleEl = item.querySelector('.job-title');
            const companyEl = item.querySelector('.company');
            const dateEl = item.querySelector('.timeline-date');
            const taskEls = item.querySelectorAll('.job-description li');
            if (titleEl) titleEl.textContent = jobData[i].title;
            if (companyEl) companyEl.textContent = jobData[i].company;
            if (dateEl) dateEl.textContent = jobData[i].date;
            if (jobData[i].tasks) {
                // Rebuild the list if task count differs
                const ul = item.querySelector('.job-description');
                if (ul && jobData[i].tasks.length !== taskEls.length) {
                    ul.innerHTML = jobData[i].tasks.map(task => `<li>${task}</li>`).join('');
                } else {
                    taskEls.forEach((li, j) => {
                        if (jobData[i].tasks[j]) li.textContent = jobData[i].tasks[j];
                    });
                }
            }
        }
    });

    // Projects & Internships
    document.querySelector('.projects-section .section-title').textContent = t.projectsInternships;
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    if (projectCards[0]) {
        projectCards[0].querySelector('h3').textContent = t.project1Title;
        projectCards[0].querySelector('.project-company').textContent = t.project1Company;
        projectCards[0].querySelector('.project-description').textContent = t.project1Desc;
    }
    if (projectCards[1]) {
        projectCards[1].querySelector('h3').textContent = t.project2Title;
        projectCards[1].querySelector('.project-company').textContent = t.project2Company;
        projectCards[1].querySelector('.project-description').textContent = t.project2Desc;
    }

    // Education
    document.querySelector('.education-section .section-title').textContent = t.education;
    const eduItems = document.querySelectorAll('.education-item');
    if (eduItems[0]) {
        eduItems[0].querySelector('h3').textContent = t.edu1Title;
        eduItems[0].querySelector('.education-school').textContent = t.edu1School;
        eduItems[0].querySelector('.education-period').textContent = t.edu1Period;
    }
    if (eduItems[1]) {
        eduItems[1].querySelector('h3').textContent = t.edu2Title;
        eduItems[1].querySelector('.education-school').textContent = t.edu2School;
        eduItems[1].querySelector('.education-period').textContent = t.edu2Period;
    }

    // Volunteer Work
    document.querySelector('.volunteer-section .section-title').textContent = t.volunteerWork;
    const volunteerCards = document.querySelectorAll('.volunteer-card');
    if (volunteerCards[0]) {
        volunteerCards[0].querySelector('.volunteer-title h3').textContent = t.volunteer1Title;
        volunteerCards[0].querySelector('.volunteer-org').textContent = t.volunteer1Org;
        volunteerCards[0].querySelector('.volunteer-period').textContent = t.volunteer1Period;
        const desc0 = volunteerCards[0].querySelector('.volunteer-description > p');
        if (desc0) desc0.textContent = t.volunteer1Desc;
        const h4_0 = volunteerCards[0].querySelector('.volunteer-achievements h4');
        if (h4_0) h4_0.textContent = t.keyActivities;
        const tasks0 = volunteerCards[0].querySelectorAll('.volunteer-achievements li');
        if (t.volunteer1Tasks) tasks0.forEach((li, j) => { if (t.volunteer1Tasks[j]) li.textContent = t.volunteer1Tasks[j]; });
        const skills0 = volunteerCards[0].querySelectorAll('.skill-badge');
        if (t.volunteer1Skills) skills0.forEach((badge, j) => { if (t.volunteer1Skills[j]) badge.textContent = t.volunteer1Skills[j]; });
    }
    if (volunteerCards[1]) {
        volunteerCards[1].querySelector('.volunteer-title h3').textContent = t.volunteer2Title;
        volunteerCards[1].querySelector('.volunteer-org').textContent = t.volunteer2Org;
        volunteerCards[1].querySelector('.volunteer-period').textContent = t.volunteer2Period;
        const desc1 = volunteerCards[1].querySelector('.volunteer-description > p');
        if (desc1) desc1.textContent = t.volunteer2Desc;
        const h4_1 = volunteerCards[1].querySelector('.volunteer-achievements h4');
        if (h4_1) h4_1.textContent = t.contributions;
        const tasks1 = volunteerCards[1].querySelectorAll('.volunteer-achievements li');
        if (t.volunteer2Tasks) tasks1.forEach((li, j) => { if (t.volunteer2Tasks[j]) li.textContent = t.volunteer2Tasks[j]; });
        const skills1 = volunteerCards[1].querySelectorAll('.skill-badge');
        if (t.volunteer2Skills) skills1.forEach((badge, j) => { if (t.volunteer2Skills[j]) badge.textContent = t.volunteer2Skills[j]; });
    }

    // Day in the Life
    document.querySelector('.day-in-life-section .section-title').textContent = t.dayInLife;
    document.querySelector('.day-in-life-section .section-subtitle').textContent = t.daySubtitle;
    const timeButtons = document.querySelectorAll('.timeline-btn span:last-child');
    if (timeButtons[0]) timeButtons[0].textContent = t.morning;
    if (timeButtons[1]) timeButtons[1].textContent = t.midday;
    if (timeButtons[2]) timeButtons[2].textContent = t.afternoon;
    if (timeButtons[3]) timeButtons[3].textContent = t.evening;

    // References
    document.querySelector('.references-section .section-title').textContent = t.references;
    document.querySelector('.references-intro').textContent = t.referencesIntro;
    document.querySelector('.form-header h3').textContent = t.shareExperience;
    document.querySelector('.form-header p').textContent = t.shareExperienceSubtitle;

    // Form labels and placeholders
    const formLabels = document.querySelectorAll('.reference-form label');
    if (formLabels[0]) formLabels[0].textContent = `${t.formName} *`;
    if (formLabels[1]) formLabels[1].textContent = `${t.formPosition} *`;
    if (formLabels[2]) formLabels[2].textContent = t.formEmail;
    if (formLabels[3]) formLabels[3].textContent = t.formPeriod;
    if (formLabels[4]) formLabels[4].textContent = `${t.formRelation} *`;
    if (formLabels[5]) formLabels[5].textContent = `${t.formTestimonial} *`;
    if (formLabels[6]) formLabels[6].textContent = t.formRating;

    // Form select options
    const selectOptions = document.querySelectorAll('#refRelation option');
    if (selectOptions[0]) selectOptions[0].textContent = t.formSelect;
    if (selectOptions[1]) selectOptions[1].textContent = t.formRelation1;
    if (selectOptions[2]) selectOptions[2].textContent = t.formRelation2;
    if (selectOptions[3]) selectOptions[3].textContent = t.formRelation3;
    if (selectOptions[4]) selectOptions[4].textContent = t.formRelation4;
    if (selectOptions[5]) selectOptions[5].textContent = t.formRelation5;
    if (selectOptions[6]) selectOptions[6].textContent = t.formRelation6;
    if (selectOptions[7]) selectOptions[7].textContent = t.formRelation7;

    document.getElementById('refTestimonial').placeholder = t.formTestimonialPlaceholder;
    document.querySelector('.submit-reference-btn').innerHTML = `<i class="fas fa-paper-plane"></i> ${t.submitRecommendation}`;
    document.querySelector('.existing-references h3').textContent = t.receivedRecommendations;

    const referencesPlaceholder = document.querySelector('.reference-placeholder p');
    if (referencesPlaceholder) {
        referencesPlaceholder.textContent = t.referencesPlaceholder;
    }

    // Languages
    document.querySelector('.languages-section .section-title').textContent = t.languages;
    const languageNames = document.querySelectorAll('.language-name');
    if (languageNames[0]) languageNames[0].textContent = t.languageNative;
    if (languageNames[1]) languageNames[1].textContent = t.languageFluent1;
    if (languageNames[2]) languageNames[2].textContent = t.languageFluent2;
    if (languageNames[3]) languageNames[3].textContent = t.languageIntermediate;

    // Featured Projects
    const featuredProjectsSection = document.querySelector('.featured-projects-section');
    if (featuredProjectsSection) {
        featuredProjectsSection.querySelector('.section-title').textContent = t.featuredProjects;
        featuredProjectsSection.querySelector('.section-subtitle').textContent = t.featuredProjectsSubtitle;

        const projectCards = featuredProjectsSection.querySelectorAll('.featured-project-card');

        // Renovibez
        if (projectCards[0]) {
            projectCards[0].querySelector('.project-description').textContent = t.renovibezDesc;
            const renovibezFeatures = projectCards[0].querySelectorAll('.feature-item span');
            if (renovibezFeatures[0]) renovibezFeatures[0].textContent = t.renovibezFeature1;
            if (renovibezFeatures[1]) renovibezFeatures[1].textContent = t.renovibezFeature2;
            if (renovibezFeatures[2]) renovibezFeatures[2].textContent = t.renovibezFeature3;
            projectCards[0].querySelector('.project-link span').textContent = t.visitWebsite;
        }

        // Hirezon
        if (projectCards[1]) {
            projectCards[1].querySelector('.project-description').textContent = t.hirezonDesc;
            const hirezonFeatures = projectCards[1].querySelectorAll('.feature-item span');
            if (hirezonFeatures[0]) hirezonFeatures[0].textContent = t.hirezonFeature1;
            if (hirezonFeatures[1]) hirezonFeatures[1].textContent = t.hirezonFeature2;
            if (hirezonFeatures[2]) hirezonFeatures[2].textContent = t.hirezonFeature3;
            projectCards[1].querySelector('.project-link span').textContent = t.visitWebsite;
        }

        // CV Website
        if (projectCards[2]) {
            projectCards[2].querySelector('.project-description').textContent = t.cvWebsiteDesc;
            const cvFeatures = projectCards[2].querySelectorAll('.feature-item span');
            if (cvFeatures[0]) cvFeatures[0].textContent = t.cvWebsiteFeature1;
            if (cvFeatures[1]) cvFeatures[1].textContent = t.cvWebsiteFeature2;
            if (cvFeatures[2]) cvFeatures[2].textContent = t.cvWebsiteFeature3;
            projectCards[2].querySelector('.project-link span').textContent = t.youreHere;
        }
    }

    // Floating CV button
    const floatingCvText = document.querySelector('.floating-cv-text');
    if (floatingCvText) {
        floatingCvText.textContent = t.floatingDownloadCV;
    }
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language from localStorage
    setLanguage(currentLanguage);

    // Add language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Animate language bars when they come into view
    function animateLanguageBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const languageBars = entry.target.querySelectorAll('.language-bar');
                    languageBars.forEach(bar => {
                        const level = bar.getAttribute('data-level');
                        setTimeout(() => {
                            bar.style.width = level + '%';
                        }, 300);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const languagesSection = document.querySelector('.languages-section');
        if (languagesSection) {
            observer.observe(languagesSection);
        }
    }

    // Add smooth scroll animation for sections
    function addScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Add animation to sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    // Add stagger animation for timeline items
    function addTimelineAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const timelineItems = entry.target.querySelectorAll('.timeline-item');
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 200);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        const timeline = document.querySelector('.timeline');
        if (timeline) {
            const timelineItems = timeline.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
            observer.observe(timeline);
        }
    }

    // Add hover effect for skill tags
    function addSkillTagInteractions() {
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Add click to call/email functionality
    function addContactInteractions() {
        const phoneElement = document.querySelector('.contact-item:first-child span');
        const emailElement = document.querySelector('.contact-item:nth-child(2) span');
        
        if (phoneElement) {
            phoneElement.style.cursor = 'pointer';
            phoneElement.addEventListener('click', function() {
                window.open('tel:' + this.textContent.replace(/\s/g, ''));
            });
        }
        
        if (emailElement) {
            emailElement.style.cursor = 'pointer';
            emailElement.addEventListener('click', function() {
                window.open('mailto:' + this.textContent);
            });
        }
    }

    // Add parallax effect to profile image on scroll
    function addParallaxEffect() {
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                profileImage.style.transform = `translateY(${rate}px)`;
            });
        }
    }

    // Add typing effect for name
    function addTypingEffect() {
        const nameElement = document.querySelector('.name');
        if (nameElement) {
            const text = nameElement.textContent;
            nameElement.textContent = '';
            nameElement.style.borderRight = '2px solid #E53E3E';
            nameElement.style.animation = 'blink 1s infinite';
            
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    nameElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        nameElement.style.borderRight = 'none';
                        nameElement.style.animation = 'none';
                    }, 1000);
                }
            }
            
            // Start typing after a short delay
            setTimeout(typeWriter, 500);
        }
    }

    // Add CSS for typing animation
    function addTypingAnimationCSS() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes blink {
                0%, 50% { border-color: #E53E3E; }
                51%, 100% { border-color: transparent; }
            }
            
            .fade-in {
                animation: fadeIn 0.6s ease-in;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .skill-tag {
                cursor: pointer;
            }
            
            .contact-item span:hover {
                color: #E53E3E;
            }
            
            .timeline-item {
                cursor: pointer;
            }
            
            .project-card {
                cursor: pointer;
            }
            
            .education-item {
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    }

    // Add print functionality
    function addPrintFunctionality() {
        // Create print button
        const printButton = document.createElement('button');
        printButton.innerHTML = '<i class="fas fa-print"></i> Print CV';
        printButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #5dade2;
            color: white;
            border: none;
            padding: 12px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-family: Inter, sans-serif;
            font-weight: 500;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: all 0.2s ease;
        `;

        printButton.addEventListener('mouseenter', function() {
            this.style.background = '#48a0d8';
            this.style.transform = 'translateY(-1px)';
        });

        printButton.addEventListener('mouseleave', function() {
            this.style.background = '#5dade2';
            this.style.transform = 'translateY(0)';
        });
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
        
        // Hide print button on mobile
        if (window.innerWidth < 768) {
            printButton.style.display = 'none';
        }
    }

    // Add smooth scrolling for better UX
    function addSmoothScrolling() {
        // Add smooth scrolling to any internal links if they exist
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Add loading animation
    function addLoadingAnimation() {
        const container = document.querySelector('.container');
        if (container) {
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            // Animate in after a brief moment
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    // Day in the Life Interactive Timeline
    function addDayTimelineInteractivity() {
        const timelineButtons = document.querySelectorAll('.timeline-btn');
        const dayPeriods = document.querySelectorAll('.day-period');
        
        timelineButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTime = this.getAttribute('data-time');
                
                // Remove active class from all buttons and periods
                timelineButtons.forEach(btn => btn.classList.remove('active'));
                dayPeriods.forEach(period => period.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding period with animation
                const targetPeriod = document.querySelector(`[data-period="${targetTime}"]`);
                if (targetPeriod) {
                    targetPeriod.classList.add('active');
                    
                    // Reset activity card animations
                    const activityCards = targetPeriod.querySelectorAll('.activity-card');
                    activityCards.forEach((card, index) => {
                        card.style.animation = 'none';
                        setTimeout(() => {
                            card.style.animation = `cardFadeIn 0.6s ease-out forwards ${index * 0.2}s`;
                        }, 50);
                    });
                }
            });
        });
        
        // Auto-advance timeline every 10 seconds
        let currentIndex = 0;
        const autoAdvance = setInterval(() => {
            if (document.querySelector('.day-in-life-section:hover')) {
                return; // Don't auto-advance if user is hovering
            }
            
            currentIndex = (currentIndex + 1) % timelineButtons.length;
            timelineButtons[currentIndex].click();
        }, 8000);
        
        // Pause auto-advance on hover
        const daySection = document.querySelector('.day-in-life-section');
        if (daySection) {
            daySection.addEventListener('mouseenter', () => {
                clearInterval(autoAdvance);
            });
        }
    }
    
    // Add reference form functionality
    function addReferenceFormHandler() {
        const referenceForm = document.getElementById('referenceForm');
        const referencesList = document.getElementById('references-list');
        
        if (referenceForm) {
            referenceForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const referenceData = {
                    name: formData.get('name'),
                    position: formData.get('position'),
                    email: formData.get('email'),
                    period: formData.get('period'),
                    relation: formData.get('relation'),
                    testimonial: formData.get('testimonial'),
                    rating: formData.get('rating') || 5,
                    date: new Date().toLocaleDateString('nl-NL')
                };
                
                // Create reference card
                const referenceCard = createReferenceCard(referenceData);
                
                // Add to references list
                const placeholder = referencesList.querySelector('.reference-placeholder');
                if (placeholder) {
                    placeholder.remove();
                }
                
                referencesList.insertAdjacentHTML('afterbegin', referenceCard);
                
                // Reset form
                this.reset();

                // Show success message
                showSuccessMessage(translations[currentLanguage].successMessage);
                
                // Scroll to references
                document.getElementById('references-list').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        }
    }
    
    function createReferenceCard(data) {
        const stars = '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);
        const relationText = {
            'direct-colleague': 'Directe collega',
            'supervisor': 'Leidinggevende', 
            'subordinate': 'Medewerker',
            'client': 'Klant/Opdrachtgever',
            'supplier': 'Leverancier/Partner',
            'project-partner': 'Projectpartner',
            'other': 'Anders'
        };
        
        return `
            <div class="reference-card animate-in">
                <div class="reference-header">
                    <div class="reference-author">
                        <h4>${data.name}</h4>
                        <p>${data.position}</p>
                        <small>${relationText[data.relation] || data.relation} ${data.period ? `• ${data.period}` : ''}</small>
                    </div>
                    <div class="reference-rating">${stars}</div>
                </div>
                <div class="reference-text">
                    "${data.testimonial}"
                </div>
                <div class="reference-meta">
                    Toegevoegd op ${data.date}
                </div>
            </div>
        `;
    }
    
    function showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(34, 197, 94, 0.3);
            z-index: 1000;
            animation: slideInFromRight 0.5s ease-out;
        `;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.style.animation = 'slideOutToRight 0.5s ease-out forwards';
            setTimeout(() => successDiv.remove(), 500);
        }, 4000);
    }
    
    // Add activity card hover effects with sound simulation
    function addActivityCardInteractions() {
        const activityCards = document.querySelectorAll('.activity-card');
        
        activityCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.activity-icon');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 12px 32px rgba(229, 62, 62, 0.4)';
                
                // Add subtle animation to the specific icon type
                const coffeeIcon = this.querySelector('.coffee-steam');
                const emailIcon = this.querySelector('.email-pulse');
                const priorityIcon = this.querySelector('.priority-sort');
                
                if (coffeeIcon) {
                    coffeeIcon.style.animation = 'none';
                    setTimeout(() => {
                        coffeeIcon.style.animation = '';
                    }, 50);
                }
                
                if (emailIcon) {
                    const dot = emailIcon.querySelector('.notification-dot');
                    if (dot) {
                        dot.style.animation = 'emailPulse 0.5s ease-in-out 3';
                    }
                }
                
                if (priorityIcon) {
                    const bars = priorityIcon.querySelectorAll('.bar');
                    bars.forEach((bar, index) => {
                        bar.style.animation = `barGrow 1s ease-in-out ${index * 0.1}s`;
                    });
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.activity-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = '';
            });
        });
    }
    
    // Add floating CV button functionality
    function addFloatingCVButton() {
        const floatingBtn = document.getElementById('floatingCvBtn');
        if (!floatingBtn) return;

        let lastScrollTop = 0;
        const scrollThreshold = 400; // Show after scrolling 400px

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Show button after scrolling past threshold
            if (scrollTop > scrollThreshold) {
                floatingBtn.classList.add('visible');
            } else {
                floatingBtn.classList.remove('visible');
            }

            lastScrollTop = scrollTop;
        });
    }

    // Profile switcher interactivity
    function addProfileSwitcher() {
        const toggle = document.getElementById('profileToggle');
        const dropdown = document.getElementById('profileDropdown');

        if (toggle && dropdown) {
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.classList.toggle('open');
                toggle.classList.toggle('open');
            });

            document.addEventListener('click', function(e) {
                if (!e.target.closest('.profile-switcher')) {
                    dropdown.classList.remove('open');
                    toggle.classList.remove('open');
                }
            });

            document.querySelectorAll('.profile-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const profileKey = this.getAttribute('data-profile');
                    setProfile(profileKey);
                });
            });
        }

        // Initialize current profile
        setProfile(currentProfile);
    }

    // Initialize all interactions
    function init() {
        addTypingAnimationCSS();
        addLoadingAnimation();
        addTypingEffect();
        animateLanguageBars();
        addScrollAnimation();
        addTimelineAnimation();
        addSkillTagInteractions();
        addContactInteractions();
        addParallaxEffect();
        addSmoothScrolling();
        addDayTimelineInteractivity();
        addReferenceFormHandler();
        addActivityCardInteractions();
        addFloatingCVButton();
        addProfileSwitcher();
    }

    // Start the show
    init();

    // Add resize handler for responsive interactions
    window.addEventListener('resize', function() {
        // Removed print button functionality
    });
});
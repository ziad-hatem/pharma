"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Function to save the language to localStorage
const saveLanguage = (lng: any) => {
  localStorage.setItem("i18nextLng", lng);
};

// Read language from localStorage or default to 'English'
const currentLanguage = localStorage.getItem("i18nextLng") || "English";

i18n.use(initReactI18next).init({
  resources: {
    English: {
      translation: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Get in Touch",
        newsletter: "Newsletter subscription",
        contactinfo: "Contact info",
        business_hours: "Business Hours",
        monday_to_friday: "Monday-Friday:",
        saturday_to_sunday: "Saturday-Sunday:",
        closed: "Closed",
        developed_by: "Developed By Abdallah Elzayat © All rights reserved.",
        slogan1: "Beauty, Health and",
        slogan2: "Hope together.",
        pharmaceutical: "Pharmaceutical",
        armana_description:
          "Founded in Egypt in 2023, Armana Pharmaceuticals leverages its founders' 17 years of regional expertise to innovate and meet unmet healthcare needs in Egypt and West Africa. With a seasoned leadership team, the company focuses on quality, safety, and accessibility while expanding its operations. Armana aims to drive healthcare advancements as a catalyst for positive change, ensuring their high-quality products reach those in need.",
        armana_industry_description:
          "Welcome to Egypt's pharmaceutical industry, a blend of historical medicinal traditions and modern innovation shaping healthcare's future. Since its inception in [insert start year], the industry has committed to advancing healthcare with pioneering research and adherence to rigorous standards. Our facilities utilize state-of-the-art technology and strict quality controls to produce treatments that meet global standards. As we continue to innovate, we strive to enhance global health and redefine healthcare with each breakthrough.",
        call_us_now: "Call us now",
        about_our_company: "About our company",
        vision_heading: "Vision…",
        vision_description:
          "To become the trusted Egyptian brand for beauty and well-being, empowering individuals in West Africa to unlock their natural radiance and lead healthier, happier lives through high-quality cosmeceutical, medical, and healthcare products.",
        mission_heading: "Mission…",
        mission_description:
          "Deliver affordable, accessible, and high-quality pharmaceutical and cosmeceutical solutions that compete globally while celebrating local heritage, catering to the unique needs of our communities.",
        inclusivity_heading: "Inclusivity",
        inclusivity_description:
          "Cater to diverse needs and skin tones of West Africa",
        education_heading: "Education",
        education_description:
          "Empower communities through skincare, health, and well-being education.",
        sustainability_heading: "Sustainability",
        sustainability_description:
          "Source ingredients responsibly and minimize environmental impact.",

        cultural_sensitivity_heading: "Cultural Sensitivity",
        cultural_sensitivity_description:
          "Respect and incorporate local traditions and values into products and marketing.",
        economic_empowerment_heading: "Economic Empowerment",
        economic_empowerment_description:
          "Support local businesses and create fair trade opportunities.",
        accessibility_heading: "Accessibility",
        accessibility_description:
          "Offer affordable and accessible products, especially in rural areas.",
        sun_protection_heading: "Sun Protection",
        sun_protection_description:
          "Develop effective and culturally appropriate sun protection solutions.",
        skin_health_heading: "Skin Health",
        skin_health_description:
          "Address common skin concerns like hyperpigmentation, dryness, and irritation.",

        skin_care: "Skin And Body Care",
        phone: "Phone",
        whatsapp: "WhatsApp",
        egypt: "Egypt",
        burkina_faso: "Burkina Faso",
        location: "Location",
        location_egypt: "Sedi Gaber – Alexandria – Egypt",
        location_burkina_faso:
          "Burkina Faso Ouagadougou, secteur 29, arrondissement nْ 6, province du Kadiogo, parcelle: 11, Lot : 14; Section : XV ; s/c : 12 BV 30103 OUAGA DASSASGHO",

        our_products: "Our Products",
        more_details: "More Details",
        subscribe: "Subscribe",
        email_address: "Email Address",
        find_us_here: "Find Us Here",
        subscribed: "Subscribed!",
        ourvalues: 'Our Values',
        burkinafasochallenges: 'Burkina Faso Challenges',
        call_us: "Call us now",
      },
    },
    French: {
      translation: {
        home: "accueil",
        about: "à propos",
        products: "produits",
        contact: "Contactez-nous",
        newsletter: "Suivez-nous",
        contactinfo: "coordonnées",
        business_hours: "Heures d'ouverture",
        monday_to_friday: "Du lundi au vendredi :",
        saturday_to_sunday: "Du samedi au dimanche :",
        closed: "Fermé",
        developed_by: "Développé par Abdallah Elzayat © Tous droits réservés.",
        slogan1: "Beauté, Santé et",
        slogan2: "Espoir Ensemble",
        pharmaceutical: "Pharmaceutique",
        armana_description:
          "Fondée en Égypte en 2023, Armana Pharma fait parti des 17 années d'expertise régionale de ses fondateurs pour innover et répondre aux besoins de santé non en Égypte et en Afrique de l'Ouest. Avec une équipe de direction expérimentée, l'entreprise se concentre sur la qualité, la sécurité et l'accessibilité tout en élargissant ses opérations. Armana vise à favoriser les avancées dans le domaine de la santé en tant que catalyseur de changement positif, en s'assurant que ses produits de haute qualité atteignent ceux qui en ont besoin.",
        armana_industry_description:
          "Bienvenue dans l'industrie pharmaceutique égyptienne, un mélange de traditions médicinales historiques et d'innovation moderne qui façonne l'avenir des soins de santé. Depuis sa création en [insérer année de début], l'industrie s'est engagée à faire avancer les soins de santé grâce à une recherche pionnière et au respect de normes rigoureuses. Nos installations utilisent des technologies de pointe et des contrôles de qualité stricts pour produire des traitements conformes aux normes mondiales. Alors que nous continuons à innover, nous nous efforçons d'améliorer la santé mondiale et de redéfinir les soins de santé à chaque département.",
        call_us_now: "Apaisante",
        call_us: "Contactez-nous",
        about_our_company: "À propos de notre entreprise",
        vision_heading: "Vision…",
        vision_description:
          "Devenir la marque égyptienne de confiance pour la beauté et le bien-être, en permettant aux individus en Afrique de l'Ouest de révéler leur éclat naturel et de mener une vie plus saine et plus heureuse grâce à des produits Pharmaceutiques et des consommables de haute qualité dans tous les pays de l'Afrique de l'ouest d'issue de 2025.",
        mission_heading: "Mission…",
        mission_description:
          "Fournir des solutions pharmaceutiques et cosméceutiques abordables, accessibles et de haute qualité qui sont compétitives à l'échelle mondiale tout en célébrant l'héritage local, répondant aux besoins uniques de nos communautés.",
        inclusivity_heading: "Inclusivité",
        inclusivity_description:
          "Répondre aux besoins diversifiés et aux différentes carnations de l'Afrique de l'Ouest",
        education_heading: "Éducation",
        education_description:
          "Habiliter les communautés par l'éducation à la santé de la peau, à la santé et au bien-être.",

        sustainability_heading: "Durabilité",
        sustainability_description:
          "Sourcer les ingrédients de manière responsable et minimiser l'impact environnemental.",
        cultural_sensitivity_heading: "Sensibilité Culturelle",
        cultural_sensitivity_description:
          "Respecter et intégrer les traditions et valeurs locales dans les produits et le marketing.",
        economic_empowerment_heading: "Autonomisation Économique",
        economic_empowerment_description:
          "Soutenir les entreprises locales et créer des opportunités de commerce équitable.",

        accessibility_heading: "Accessibilité",
        accessibility_description:
          "Offrir des produits abordables et accessibles, surtout dans les zones rurales.",
        sun_protection_heading: "Protection Solaire",
        sun_protection_description:
          "Développer des solutions de protection solaire efficaces et adaptées à la culture locale.",
        skin_health_heading: "Santé de la Peau",
        skin_health_description:
          "Traiter les problèmes de peau courants tels que l'hyperpigmentation, la sécheresse et l'irritation.",
        skin_care: "Soins de la peau et du corps",
        phone: "Téléphone",
        whatsapp: "WhatsApp",
        egypt: "Égypte",
        burkina_faso: "Burkina Faso",
        location: "Localisation",
        location_egypt: "Sedi Gaber – Alexandrie – Égypte",
        location_burkina_faso:
          "Burkina Faso Ouagadougou, secteur 29, arrondissement nْ 6, province du Kadiogo, parcelle : 11, Lot : 14; Section : XV ; s/c : 12 BV 30103 OUAGA DASSASGHO",
        our_products: "Nos Produits",
        more_details: "Plus de Détails",
        subscribe: "Souscrire",
        email_address: "Entrez votre adresse E-mail",
        find_us_here: "Contactez-nous",
        subscribed: "abonnement!",
        ourvalues: 'Nos valeurs',
         burkinafasochallenges: 'Les défis du Burkina Faso'
      },
    },
  },
  lng: currentLanguage, // Use the language from localStorage or default
  fallbackLng: "English",
  interpolation: {
    escapeValue: false,
  },
});

// Listen to language change and save new language to localStorage
i18n.on("languageChanged", (lng) => {
  saveLanguage(lng);
});

export default i18n;

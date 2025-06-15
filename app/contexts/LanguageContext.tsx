'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.order': 'Commander',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    'nav.reserve': 'Réserver',
    
    // Hero
    'hero.subtitle': 'Ristorante Italiano',
    'hero.title': 'iSapori',
    'hero.description': 'Un voyage sensoriel où chaque plat raconte une histoire de tradition, passion et excellence culinaire au cœur de Genève',
    'hero.order': 'Commander',
    'hero.reserve': 'Réserver une Table',
    
    // About
    'about.label': 'Notre Histoire',
    'about.title': 'Une Tradition Culinaire',
    'about.accent': 'Authentique',
    'about.text1': 'Depuis plus de deux décennies, iSapori incarne l\'excellence de la gastronomie italienne au cœur de Genève. Notre restaurant familial perpétue les traditions culinaires ancestrales tout en apportant une touche de modernité à chaque création.',
    'about.text2': 'Chaque plat est préparé avec des ingrédients soigneusement sélectionnés, importés directement d\'Italie ou sourcés localement selon les saisons. Notre chef, formé dans les meilleures cuisines de la péninsule, sublime ces produits d\'exception.',
    'about.text3': 'L\'atmosphère chaleureuse de notre établissement, alliant élégance contemporaine et convivialité méditerranéenne, vous invite à vivre une expérience gastronomique inoubliable en famille ou entre amis.',
    'about.signature': 'Chef Marco Benedetti',
    
    // Stats
    'stats.title': 'Une Cuisine Qui Satisfaira',
    'stats.subtitle': 'Vos Papilles',
    'stats.description': 'Des années d\'expérience, un espace généreux et une capacité d\'accueil exceptionnelle pour vous offrir le meilleur de la gastronomie italienne.',
    'stats.years': 'Ans',
    'stats.space': 'M²',
    'stats.seats': 'Couverts',
    
    // Menu
    'menu.subtitle': 'Nos Spécialités',
    'menu.title': 'Suggestions du Chef',
    'menu.dish1.name': 'Filets de Perches Suisse',
    'menu.dish1.desc': 'Filets de perches fraîches du lac Léman, préparés selon la tradition suisse, accompagnés de légumes de saison et pommes de terre nouvelles',
    'menu.dish2.name': 'Souris d\'agneau lentilles et légumes',
    'menu.dish2.desc': 'Souris d\'agneau confite lentement, lentilles du Puy cuisinées aux herbes, légumes de saison rôtis, jus corsé aux aromates',
    'menu.dish3.name': 'Entrecôte frites légumes',
    'menu.dish3.desc': 'Entrecôte de bœuf grillée à la perfection, frites maison croustillantes, légumes frais sautés, sauce au choix',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.google': 'Google Reviews',
    
    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Tout ce que vous devez savoir sur notre restaurant',
    'faq.q1': 'Est-ce que vous faites les dîners d\'entreprise?',
    'faq.a1': 'Oui, nous organisons des événements privés et dîners d\'entreprise dans notre restaurant. Nous recommandons de réserver à l\'avance, surtout pour les fins de semaine.',
    'faq.q2': 'Comment puis-je faire une réservation ?',
    'faq.a2': 'Vous pouvez réserver directement en ligne via notre site web ou nous appeler au +41 770075413. Nous acceptons les réservations jusqu\'à 30 jours à l\'avance.',
    'faq.q3': 'Puis-je commander des plats à l\'emporter ?',
    'faq.a3': 'Absolument ! Nous proposons un service de plats à emporter. Vous pouvez commander en ligne ou par téléphone. Les commandes sont généralement prêtes en 20-30 minutes.',
    'faq.q4': 'Est-ce que vous faites de la livraison?',
    'faq.a4': 'Oui, nous livrons dans un rayon de 10km autour du restaurant. Les frais de livraison varient selon la distance. Commande minimum de 25 CHF pour la livraison.',
    'faq.more': 'Plus de questions?',
    'faq.contact': 'Contactez-nous',
    
    // Contact
    'contact.label': 'Contact & Localisation',
    'contact.title': 'Rendez-nous Visite',
    'contact.address': 'Adresse',
    'contact.reservations': 'Réservations',
    'contact.concierge': 'Concierge',
    'contact.events': 'Pour événements spéciaux',
    'contact.hours': 'Horaires d\'Ouverture',
    'contact.monday': 'Lundi',
    'contact.summer': 'NOS HORAIRES D\'ÉTÉ:',
    'contact.tuesday_thursday': 'Mardi à Jeudi',
    'contact.friday_saturday': 'Vendredi et Samedi',
    'contact.sunday': 'Dimanche',
    'contact.reserve_table': 'Réserver une Table',
    'contact.reserve_subtitle': 'Réservez votre table pour une expérience gastronomique exclusive',
    'contact.order_online': 'Commander en Ligne',
    
    // Contact Page
    'contact.page_title': 'CONTACT',
    'contact.page_subtitle': 'Nous serions ravis de vous assister. Contactez-nous pour toute question ou réservation de groupe.',
    'contact.hours_title': 'HORAIRES D\'OUVERTURE',
    'contact.form_title': 'Contactez-nous',
    'contact.form_subtitle': 'Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.',
    'contact.first_name': 'Prénom',
    'contact.last_name': 'Nom',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.subject': 'Sujet',
    'contact.subject_placeholder': 'Sélectionnez un sujet',
    'contact.subject_reservation': 'Réservation',
    'contact.subject_event': 'Événement privé',
    'contact.subject_catering': 'Traiteur',
    'contact.subject_other': 'Autre',
    'contact.message': 'Message',
    'contact.submit': 'Envoyer le message',
    'contact.info_address': 'Adresse',
    'contact.info_phone': 'Téléphone',
    'contact.info_email': 'Email',
    'contact.info_reservations': 'Réservations',
    'contact.info_reservations_desc': 'En ligne ou par téléphone\nRecommandé pour les groupes',
    'contact.location_title': 'Notre Localisation',
    'contact.location_subtitle': 'Trouvez-nous facilement au cœur du Grand-Saconnex',
    
    // Footer
    'footer.address_label': 'Addresse:',
    'footer.contact_label': 'Contact:',
    'footer.hours_label': 'Horaires d\'ouverture:',
    'footer.menu_label': 'Menu',
    'footer.about': 'À propos',
    'footer.reserve': 'Réserver une table',
    'footer.order': 'Commander',
    'footer.contact': 'Contact',
    'footer.rights': '© 2024 iSapori. All rights reserved.',
    'footer.made_by': 'Réalisé par',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.order': 'Order',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    'nav.reserve': 'Reserve',
    
    // Hero
    'hero.subtitle': 'Italian Restaurant',
    'hero.title': 'iSapori',
    'hero.description': 'A sensory journey where each dish tells a story of tradition, passion and culinary excellence in the heart of Geneva',
    'hero.order': 'Order',
    'hero.reserve': 'Reserve a Table',
    
    // About
    'about.label': 'Our Story',
    'about.title': 'A Culinary Tradition',
    'about.accent': 'Authentic',
    'about.text1': 'For more than two decades, iSapori has embodied the excellence of Italian gastronomy in the heart of Geneva. Our family restaurant perpetuates ancestral culinary traditions while bringing a touch of modernity to each creation.',
    'about.text2': 'Each dish is prepared with carefully selected ingredients, imported directly from Italy or sourced locally according to the seasons. Our chef, trained in the best kitchens of the peninsula, sublimates these exceptional products.',
    'about.text3': 'The warm atmosphere of our establishment, combining contemporary elegance and Mediterranean conviviality, invites you to live an unforgettable gastronomic experience with family or friends.',
    'about.signature': 'Chef Marco Benedetti',
    
    // Stats
    'stats.title': 'A Cuisine That Will Satisfy',
    'stats.subtitle': 'Your Taste Buds',
    'stats.description': 'Years of experience, generous space and exceptional seating capacity to offer you the best of Italian gastronomy.',
    'stats.years': 'Years',
    'stats.space': 'M²',
    'stats.seats': 'Seats',
    
    // Menu
    'menu.subtitle': 'Our Specialties',
    'menu.title': 'Chef\'s Suggestions',
    'menu.dish1.name': 'Swiss Perch Fillets',
    'menu.dish1.desc': 'Fresh perch fillets from Lake Geneva, prepared according to Swiss tradition, accompanied by seasonal vegetables and new potatoes',
    'menu.dish2.name': 'Lamb shank with lentils and vegetables',
    'menu.dish2.desc': 'Slowly braised lamb shank, Le Puy lentils cooked with herbs, roasted seasonal vegetables, rich aromatic jus',
    'menu.dish3.name': 'Ribeye steak with fries and vegetables',
    'menu.dish3.desc': 'Perfectly grilled beef ribeye, crispy homemade fries, fresh sautéed vegetables, sauce of your choice',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.google': 'Google Reviews',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about our restaurant',
    'faq.q1': 'Do you cater corporate dinners?',
    'faq.a1': 'Yes, we organize private events and corporate dinners in our restaurant. We recommend booking in advance, especially for weekends.',
    'faq.q2': 'How can I make a reservation?',
    'faq.a2': 'You can book directly online through our website or call us at +41 770075413. We accept reservations up to 30 days in advance.',
    'faq.q3': 'Can I order takeaway dishes?',
    'faq.a3': 'Absolutely! We offer a takeaway service. You can order online or by phone. Orders are usually ready in 20-30 minutes.',
    'faq.q4': 'Do you deliver?',
    'faq.a4': 'Yes, we deliver within a 10km radius around the restaurant. Delivery fees vary depending on distance. Minimum order of 25 CHF for delivery.',
    'faq.more': 'More questions?',
    'faq.contact': 'Contact us',
    
    // Contact
    'contact.label': 'Contact & Location',
    'contact.title': 'Visit Us',
    'contact.address': 'Address',
    'contact.reservations': 'Reservations',
    'contact.concierge': 'Concierge',
    'contact.events': 'For special events',
    'contact.hours': 'Opening Hours',
    'contact.monday': 'Monday',
    'contact.summer': 'OUR SUMMER HOURS:',
    'contact.tuesday_thursday': 'Tuesday to Thursday',
    'contact.friday_saturday': 'Friday and Saturday',
    'contact.sunday': 'Sunday',
    'contact.reserve_table': 'Reserve a Table',
    'contact.reserve_subtitle': 'Reserve your table for an exclusive gastronomic experience',
    'contact.order_online': 'Order Online',
    
    // Contact Page
    'contact.page_title': 'CONTACT',
    'contact.page_subtitle': 'We would be delighted to assist you. Contact us for any questions or group reservations.',
    'contact.hours_title': 'OPENING HOURS',
    'contact.form_title': 'Contact us',
    'contact.form_subtitle': 'Send us a message and we will get back to you as soon as possible.',
    'contact.first_name': 'First Name',
    'contact.last_name': 'Last Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.subject': 'Subject',
    'contact.subject_placeholder': 'Select a subject',
    'contact.subject_reservation': 'Reservation',
    'contact.subject_event': 'Private Event',
    'contact.subject_catering': 'Catering',
    'contact.subject_other': 'Other',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.info_address': 'Address',
    'contact.info_phone': 'Phone',
    'contact.info_email': 'Email',
    'contact.info_reservations': 'Reservations',
    'contact.info_reservations_desc': 'Online or by phone\nRecommended for groups',
    'contact.location_title': 'Our Location',
    'contact.location_subtitle': 'Find us easily in the heart of Grand-Saconnex',
    
    // Footer
    'footer.address_label': 'Address:',
    'footer.contact_label': 'Contact:',
    'footer.hours_label': 'Opening hours:',
    'footer.menu_label': 'Menu',
    'footer.about': 'About',
    'footer.reserve': 'Reserve a table',
    'footer.order': 'Order',
    'footer.contact': 'Contact',
    'footer.rights': '© 2024 iSapori. All rights reserved.',
    'footer.made_by': 'Made by',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 
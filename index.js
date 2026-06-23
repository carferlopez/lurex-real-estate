/* ==========================================================================
   MOCK PROPERTIES DATABASE
   ========================================================================== */
const propertiesDatabase = [
  {
    id: "villa-horizonte",
    title: "Villa Horizonte",
    location: "marbella",
    locationName: "Marbella, Spain",
    type: "villa",
    price: 6450000,
    priceFormatted: "€6,450,000",
    beds: 5,
    baths: 5.5,
    size: 620,
    imgBase: "hori",
    description: "Villa Horizonte represents the pinnacle of modern architectural expression in Marbella. Sitting majestically overlooking the Mediterranean coastline, this signature residence blends glass, marble, and white concrete into a masterpiece of light and space. Enjoy panoramic sea views from every room, an indoor wellness spa, private gym, infinity pool, and state-of-the-art home automation."
  },
  {
    id: "penthouse-one",
    title: "The Penthouse One",
    location: "marbella",
    locationName: "La Zagaleta, Benahavis",
    type: "penthouse",
    price: 9850000,
    priceFormatted: "€9,850,000",
    beds: 4,
    baths: 4.5,
    size: 540,
    imgBase: "pnt",
    description: "Suspended between the mountains and the sea, The Penthouse One is a duplex penthouse offering unprecedented luxury inside the gate-secured estate of La Zagaleta. Combining double-height ceilings, a private glass elevator, sweeping entertainment terraces with plunge pool, and materials sourced from the finest Italian design houses. Absolute security, complete privacy."
  },
  {
    id: "villa-elysium",
    title: "Villa Elysium",
    location: "mallorca",
    locationName: "Port Andratx, Mallorca",
    type: "villa",
    price: 7900000,
    priceFormatted: "€7,900,000",
    beds: 6,
    baths: 6,
    size: 750,
    imgBase: "ely",
    description: "Villa Elysium commands a dramatic cliffside position in Port Andratx, Mallorca's most exclusive natural harbor. Designed to capture the changing hues of the sunset, this estate features expansive outdoor entertainment areas, a modern Gaggenau kitchen, separate staff quarters, a heated saltwater infinity pool, and direct access to a private cove below. A true Mediterranean sanctuary."
  },
  {
    id: "villa-serene",
    title: "Villa Serene",
    location: "ibiza",
    locationName: "Cala Jondal, Ibiza",
    type: "villa",
    price: 5200000,
    priceFormatted: "€5,200,000",
    beds: 4,
    baths: 4,
    size: 480,
    imgBase: "serene",
    description: "Villa Serene captures the bohemian-luxe spirit of Ibiza. Located moments from Cala Jondal, this estate balances raw stone elements with smooth white micro-cement. Featuring a stunning palm-fringed garden, yoga deck, professional outdoor kitchen, and private security. Perfect for tranquil escapes and elegant summer gatherings."
  },
  {
    id: "sky-loft",
    title: "Sky Loft",
    location: "barcelona",
    locationName: "Passeig de Gràcia, Barcelona",
    type: "penthouse",
    price: 3800000,
    priceFormatted: "€3,800,000",
    beds: 3,
    baths: 3,
    size: 310,
    imgBase: "sky",
    description: "An ultra-chic contemporary loft situated on Passeig de Gràcia in the heart of Barcelona. This architectural gem features original Catalan vaulted ceilings combined with industrial steel framing, designer Boffi kitchen, automated smart systems, and a private 80m² rooftop terrace with views of Gaudí's La Pedrera."
  },
  {
    id: "finca-rustica",
    title: "Finca Rústica",
    location: "mallorca",
    locationName: "Valldemossa, Mallorca",
    type: "finca",
    price: 4500000,
    priceFormatted: "€4,500,000",
    beds: 5,
    baths: 5,
    size: 520,
    imgBase: "finca",
    description: "A beautifully restored traditional stone finca nestled in the valleys of Valldemossa, Mallorca. Combining historic 17th-century details with modern luxuries, including a private olive grove, guest cottage, wine cellar, and zero-edge pool overlooking the UNESCO-protected Serra de Tramuntana mountains."
  }
];

/* ==========================================================================
   INTERNATIONALIZATION
   ========================================================================== */
const i18n = {
  es: {
    documentTitle: "LUREX Real Estate | Viviendas extraordinarias",
    metaDescription: "Agencia inmobiliaria boutique especializada en propiedades excepcionales y experiencias de vida en Marbella, Mallorca, Ibiza y Barcelona.",
    navTopNote: "INMOBILIARIA DE LUJO",
    navProperties: "PROPIEDADES",
    navDestinations: "DESTINOS",
    navServices: "SERVICIOS",
    navAbout: "NOSOTROS",
    navJournal: "REVISTA",
    navContact: "CONTACTO",
    bookViewing: "RESERVAR VISITA",
    heroTitle: "Viviendas extraordinarias, seleccionadas con precisión",
    heroSubtitle: "Una agencia inmobiliaria boutique especializada en las propiedades y experiencias de vida más excepcionales.",
    discoverProperties: "DESCUBRIR PROPIEDADES",
    location: "UBICACIÓN",
    propertyType: "TIPO DE PROPIEDAD",
    priceRange: "RANGO DE PRECIO",
    bedsBaths: "DORMITORIOS Y BAÑOS",
    anyLocation: "Cualquier ubicación",
    marbellaSpain: "Marbella, España",
    mallorcaSpain: "Mallorca, España",
    ibizaSpain: "Ibiza, España",
    barcelonaSpain: "Barcelona, España",
    anyType: "Cualquier tipo",
    luxuryVilla: "Villa de lujo",
    penthouse: "Ático",
    traditionalFinca: "Finca tradicional",
    anyPrice: "Cualquier precio",
    under5: "Menos de 5.000.000 €",
    between5And8: "5.000.000 € - 8.000.000 €",
    over8: "Más de 8.000.000 €",
    any: "Cualquiera",
    beds3: "3+ dormitorios",
    beds4: "4+ dormitorios",
    beds5: "5+ dormitorios",
    searchProperties: "BUSCAR PROPIEDADES",
    featuredProperties: "PROPIEDADES DESTACADAS",
    featuredTitle: "Seleccionadas. Excepcionales. Tuyas.",
    viewAllProperties: "VER TODAS LAS PROPIEDADES",
    differenceTag: "DOS VIDAS, UNA CASA",
    differenceTitle: "Lo que la luz revela,<br>la noche lo transforma.",
    differenceText: "Cada propiedad de nuestra cartera está capturada en sus dos horas: el esplendor del mediodía y la intimidad del anochecer. Porque elegir un hogar es elegir cómo quieres sentirte en él a cada hora del día.",
    learnMoreAboutUs: "CONOCER MÁS",
    destinations: "DESTINOS",
    destinationsTitle: "Lugares que cambian con la luz.",
    exploreAllAreas: "EXPLORAR ZONAS",
    balearicIslands: "Islas Baleares",
    catalonia: "Cataluña",
    viewArea: "VER ZONA",
    mapMarbella: "Oficina Marbella",
    mapMallorca: "Oficina Mallorca",
    mapBarcelona: "Oficina Barcelona",
    advisorsTag: "TUS ASESORES DE CONFIANZA",
    advisorsTitle: "Dedicados a ti",
    meetTeam: "CONOCER EQUIPO",
    founder: "FUNDADORA Y CEO",
    seniorAdvisor: "ASESOR SENIOR",
    propertyAdvisor: "ASESORA INMOBILIARIA",
    clientRelations: "RELACIÓN CON CLIENTES",
    testimonial1: "LUREX Real Estate transformó la búsqueda de nuestra segunda residencia en una experiencia sencilla y agradable. Su atención al detalle y discreción son incomparables.",
    testimonial2: "El servicio boutique de Miguel y su equipo fue excepcional. Negociaron para nosotros una propiedad off-market increíble en Mallorca. Verdaderos profesionales.",
    testimonial3: "La discreción era nuestra principal preocupación. LUREX gestionó la compra de nuestro ático con absoluta confidencialidad y eficiencia. Muy recomendable para propiedades premium.",
    london: "LONDRES, REINO UNIDO",
    munich: "MÚNICH, ALEMANIA",
    hongKong: "HONG KONG",
    preFooterTitle: "Encontremos tu vivienda extraordinaria",
    preFooterText: "Tanto si quieres comprar, vender o simplemente explorar tus opciones, nuestro equipo está aquí para acompañarte en cada paso.",
    scheduleConsultation: "AGENDAR CONSULTA PRIVADA",
    contact: "CONTACTO",
    navigation: "NAVEGACIÓN",
    followUs: "SÍGUENOS",
    footerProperties: "Propiedades",
    footerDestinations: "Destinos",
    footerServices: "Servicios",
    footerAbout: "Nosotros",
    footerJournal: "Revista",
    footerContact: "Contacto",
    footerCopyright: "© 2026 LUREX Real Estate. Todos los derechos reservados.",
    marbellaAddress: "Calle de la Calesa 12,<br>Marbella, España",
    sealText: "VIVIENDAS EXTRAORDINARIAS • SELECCIONADAS CON PRECISIÓN • ",
    privacy: "Política de privacidad",
    terms: "Términos y condiciones",
    cookies: "Política de cookies",
    modalBeds: "DORMITORIOS",
    modalBaths: "BAÑOS",
    buildSize: "SUPERFICIE",
    residence: "LA RESIDENCIA",
    requestInfo: "SOLICITAR INFORMACIÓN",
    yourName: "Tu nombre",
    yourEmail: "Tu email",
    inquiryMessage: "Me gustaría recibir información sobre esta propiedad...",
    sendInquiry: "ENVIAR CONSULTA",
    consultationTitle: "Agendar una consulta",
    consultationSubtitle: "Completa el formulario y un asesor especializado contactará contigo en menos de 24 horas.",
    fullName: "NOMBRE COMPLETO",
    emailAddress: "EMAIL",
    phoneNumber: "TELÉFONO",
    preferredDate: "FECHA PREFERIDA",
    interestedIn: "INTERÉS",
    buyLuxuryProperty: "Comprar una propiedad de lujo",
    sellPremiumListing: "Vender una propiedad premium",
    portfolioReview: "Consulta general y revisión de cartera",
    requestAppointment: "SOLICITAR CITA",
    beds: "Dorm.",
    baths: "Baños",
    rooms: "dormitorios",
    found: "Se encontraron",
    matchingProperties: "propiedades",
    noResultsTitle: "No se encontraron propiedades",
    noResultsText: "Prueba a ampliar los filtros o seleccionar otras ubicaciones.",
    saved: "Guardado en favoritos",
    removed: "Eliminado de favoritos",
    inquirySent: "Consulta enviada correctamente para",
    consultationSent: "Consulta solicitada. Nuestro equipo contactará contigo pronto.",
    favoriteAria: "Guardar en favoritos",
    // Claves v2 — concepto DOS VIDAS
    heroTitleDay: "Cada casa vive dos vidas.",
    heroTitleNight: "Esta es la otra.",
    heroSubtitleDay: "Una a plena luz. Otra cuando cae la noche. Toca el sol o la luna y siéntelas las dos antes de cruzar la puerta.",
    heroSubtitleNight: "El mismo encuadre, otra atmósfera. Así se vive aquí cuando se apaga el día.",
    clockMidday: "Mediodía",
    clockNightfall: "Anochecer",
    dosVidasEyebrow: "LA EXPERIENCIA LUREX",
    dosVidasTitle: "No vendemos casas.<br>Vendemos las horas que vivirás en ellas.",
    dosVidasDayLabel: "LA HORA DORADA",
    dosVidasDayText: "El café en la terraza. El mar entrando por el ventanal. La piedra caliente bajo el sol de mediodía. Así amanece tu casa.",
    dosVidasNightLabel: "LA HORA AZUL",
    dosVidasNightText: "Las luces encendidas desde dentro. La piscina como un espejo negro. El silencio cálido de la madrugada. Así descansa tu casa.",
    dosVidasClose: "Toca el sol o la luna. Vívelas las dos.",
    dosVidasToggleAriaDay: "Cambiar a modo noche",
    dosVidasToggleAriaNight: "Cambiar a modo día",
    dvBtnAriaDay: "Ver en la hora dorada",
    dvBtnAriaNight: "Ver en la hora azul",
    bothHours: "Disponible en día y noche",
    imgToggleAriaDay: "Ver de noche",
    imgToggleAriaNight: "Ver de día",
    heroPruebaLabel: "PRUÉBALO"
  },
  en: {
    documentTitle: "LUREX Real Estate | Extraordinary Luxury Homes",
    metaDescription: "A boutique real estate agency specializing in the world's most exceptional properties and lifestyle experiences. Marbella, Mallorca, Ibiza, Barcelona.",
    navTopNote: "LUXURY REAL ESTATE",
    navProperties: "PROPERTIES",
    navDestinations: "DESTINATIONS",
    navServices: "SERVICES",
    navAbout: "ABOUT",
    navJournal: "JOURNAL",
    navContact: "CONTACT",
    bookViewing: "BOOK A VIEWING",
    heroTitle: "Extraordinary Homes, Curated with Precision",
    heroSubtitle: "A boutique real estate agency specializing in the world's most exceptional properties and lifestyle experiences.",
    discoverProperties: "DISCOVER PROPERTIES",
    location: "LOCATION",
    propertyType: "PROPERTY TYPE",
    priceRange: "PRICE RANGE",
    bedsBaths: "BEDS & BATHS",
    anyLocation: "Any Location",
    marbellaSpain: "Marbella, Spain",
    mallorcaSpain: "Mallorca, Spain",
    ibizaSpain: "Ibiza, Spain",
    barcelonaSpain: "Barcelona, Spain",
    anyType: "Any Type",
    luxuryVilla: "Luxury Villa",
    penthouse: "Penthouse",
    traditionalFinca: "Traditional Finca",
    anyPrice: "Any Price",
    under5: "Under €5,000,000",
    between5And8: "€5,000,000 - €8,000,000",
    over8: "Over €8,000,000",
    any: "Any",
    beds3: "3+ Beds",
    beds4: "4+ Beds",
    beds5: "5+ Beds",
    searchProperties: "SEARCH PROPERTIES",
    featuredProperties: "FEATURED PROPERTIES",
    featuredTitle: "Handpicked. Exceptional. Yours.",
    viewAllProperties: "VIEW ALL PROPERTIES",
    differenceTag: "TWO LIVES, ONE HOME",
    differenceTitle: "What the light reveals,<br>the night transforms.",
    differenceText: "Every property in our portfolio is captured in both its hours: the splendour of midday and the intimacy of nightfall. Because choosing a home means choosing how you want to feel inside it at every hour of the day.",
    learnMoreAboutUs: "LEARN MORE ABOUT US",
    destinations: "DESTINATIONS",
    destinationsTitle: "Places that change with the light.",
    exploreAllAreas: "EXPLORE ALL AREAS",
    balearicIslands: "Balearic Islands",
    catalonia: "Catalonia",
    viewArea: "VIEW AREA",
    mapMarbella: "Marbella Office",
    mapMallorca: "Mallorca Office",
    mapBarcelona: "Barcelona Office",
    advisorsTag: "YOUR TRUSTED ADVISORS",
    advisorsTitle: "Dedicated to You",
    meetTeam: "MEET THE TEAM",
    founder: "FOUNDER & CEO",
    seniorAdvisor: "SENIOR ADVISOR",
    propertyAdvisor: "PROPERTY ADVISOR",
    clientRelations: "CLIENT RELATIONS",
    testimonial1: "LUREX Real Estate transformed our search for a second home into an effortless and enjoyable experience. Their attention to detail and discretion are unmatched.",
    testimonial2: "The level of boutique service provided by Miguel and his team was outstanding. They negotiated an incredible off-market property in Mallorca for us. Truly professionals.",
    testimonial3: "Discretion was our primary concern. LUREX managed the purchase of our penthouse with absolute secrecy and efficiency. Highly recommended for premium listings.",
    london: "LONDON, UNITED KINGDOM",
    munich: "MUNICH, GERMANY",
    hongKong: "HONG KONG",
    preFooterTitle: "Let's Find Your Extraordinary",
    preFooterText: "Whether you're looking to buy, sell, or simply explore your options, our team is here to help you every step of the way.",
    scheduleConsultation: "SCHEDULE A PRIVATE CONSULTATION",
    contact: "CONTACT",
    navigation: "NAVIGATION",
    followUs: "FOLLOW US",
    footerProperties: "Properties",
    footerDestinations: "Destinations",
    footerServices: "Services",
    footerAbout: "About",
    footerJournal: "Journal",
    footerContact: "Contact",
    footerCopyright: "© 2026 LUREX Real Estate. All rights reserved.",
    marbellaAddress: "Calle de la Calesa 12,<br>Marbella, Spain",
    sealText: "EXTRAORDINARY HOMES • CURATED WITH PRECISION • ",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    cookies: "Cookies Policy",
    modalBeds: "BEDS",
    modalBaths: "BATHS",
    buildSize: "BUILD SIZE",
    residence: "THE RESIDENCE",
    requestInfo: "REQUEST INFORMATION",
    yourName: "Your Name",
    yourEmail: "Your Email",
    inquiryMessage: "I would like to inquire about this property...",
    sendInquiry: "SEND INQUIRY",
    consultationTitle: "Schedule a Consultation",
    consultationSubtitle: "Please fill out the form below. A dedicated advisor will reach out to you within 24 hours.",
    fullName: "FULL NAME",
    emailAddress: "EMAIL ADDRESS",
    phoneNumber: "PHONE NUMBER",
    preferredDate: "PREFERRED DATE",
    interestedIn: "INTERESTED IN",
    buyLuxuryProperty: "Buying a Luxury Property",
    sellPremiumListing: "Selling a Premium Listing",
    portfolioReview: "General Consultation & Portfolio Review",
    requestAppointment: "REQUEST APPOINTMENT",
    beds: "Beds",
    baths: "Baths",
    rooms: "rooms",
    found: "Found",
    matchingProperties: "matching properties",
    noResultsTitle: "No matching properties found",
    noResultsText: "Try broadening your filters or locations to view other residences.",
    saved: "Saved to favorites",
    removed: "Removed from favorites",
    inquirySent: "Inquiry sent successfully for",
    consultationSent: "Consultation requested. Our team will contact you shortly.",
    favoriteAria: "Toggle favorite",
    // v2 keys — TWO LIVES concept
    heroTitleDay: "Every home lives two lives.",
    heroTitleNight: "This is the other one.",
    heroSubtitleDay: "One in full light. One when night falls. Tap the sun or the moon and feel them both before you ever step inside.",
    heroSubtitleNight: "Same frame, another atmosphere. This is how it feels here when the day goes quiet.",
    clockMidday: "Midday",
    clockNightfall: "Nightfall",
    dosVidasEyebrow: "THE LUREX EXPERIENCE",
    dosVidasTitle: "We don't sell houses.<br>We sell the hours you'll live inside them.",
    dosVidasDayLabel: "THE GOLDEN HOUR",
    dosVidasDayText: "Coffee on the terrace. The sea pouring through the glass. Warm stone under the midday sun. This is how your home wakes up.",
    dosVidasNightLabel: "THE BLUE HOUR",
    dosVidasNightText: "Lights glowing from within. The pool a black mirror. The warm hush of late night. This is how your home rests.",
    dosVidasClose: "Tap the sun or the moon. Live them both.",
    dosVidasToggleAriaDay: "Switch to night mode",
    dosVidasToggleAriaNight: "Switch to day mode",
    dvBtnAriaDay: "See in the golden hour",
    dvBtnAriaNight: "See in the blue hour",
    bothHours: "Shown by day & night",
    imgToggleAriaDay: "View at night",
    imgToggleAriaNight: "View by day",
    heroPruebaLabel: "TRY IT"
  }
};

const propertyI18n = {
  es: {
    "villa-horizonte": {
      locationName: "Marbella, España",
      description: "Villa Horizonte representa la máxima expresión de la arquitectura contemporánea en Marbella. Elevada sobre la costa mediterránea, combina cristal, mármol y hormigón blanco en una residencia llena de luz, con vistas panorámicas al mar, spa interior, gimnasio privado, piscina infinita y domótica avanzada."
    },
    "penthouse-one": {
      title: "The Penthouse One",
      locationName: "La Zagaleta, Benahavís",
      description: "Suspendido entre la montaña y el mar, The Penthouse One es un ático dúplex en la exclusiva urbanización de La Zagaleta. Ofrece techos de doble altura, ascensor privado acristalado, amplias terrazas con piscina y materiales de diseño italiano. Seguridad absoluta y privacidad total."
    },
    "villa-elysium": {
      locationName: "Port Andratx, Mallorca",
      description: "Villa Elysium ocupa una posición privilegiada sobre los acantilados de Port Andratx. Diseñada para capturar los tonos del atardecer, cuenta con zonas exteriores de entretenimiento, cocina Gaggenau, alojamiento para servicio, piscina infinita climatizada y acceso directo a una cala privada."
    },
    "villa-serene": {
      locationName: "Cala Jondal, Ibiza",
      description: "Villa Serene refleja el espíritu bohemio y sofisticado de Ibiza. Situada cerca de Cala Jondal, equilibra piedra natural, microcemento blanco, jardín con palmeras, zona de yoga, cocina exterior profesional y seguridad privada para escapadas tranquilas y reuniones de verano."
    },
    "sky-loft": {
      locationName: "Passeig de Gràcia, Barcelona",
      description: "Un loft contemporáneo en pleno Passeig de Gràcia. Esta pieza arquitectónica combina bóvedas catalanas originales con estructuras de acero, cocina de diseño, sistemas inteligentes y una terraza privada de 80 m² con vistas a La Pedrera."
    },
    "finca-rustica": {
      locationName: "Valldemossa, Mallorca",
      description: "Una finca tradicional de piedra cuidadosamente restaurada en los valles de Valldemossa. Integra detalles históricos del siglo XVII con comodidades actuales, olivar privado, casa de invitados, bodega y piscina con vistas a la Serra de Tramuntana."
    }
  },
  en: {}
};

let currentLang = localStorage.getItem("lurex_language") || "es";

function t(key) {
  return i18n[currentLang][key] || i18n.en[key] || key;
}

function propertyText(property, field) {
  return propertyI18n[currentLang]?.[property.id]?.[field] || property[field];
}

function setText(selector, key) {
  const el = document.querySelector(selector);
  if (!el) return;
  const icons = [...el.querySelectorAll("svg")];
  if (icons.length > 0) {
    el.textContent = "";
    el.appendChild(document.createTextNode(t(key)));
    icons.forEach(icon => el.appendChild(icon));
    return;
  }
  el.textContent = t(key);
}

function setAllText(selector, key) {
  document.querySelectorAll(selector).forEach(el => {
    const icons = [...el.querySelectorAll("svg")];
    if (icons.length > 0) {
      el.textContent = "";
      el.appendChild(document.createTextNode(t(key)));
      icons.forEach(icon => el.appendChild(icon));
    } else {
      el.textContent = t(key);
    }
  });
}

function setHTML(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = t(key);
}

function setOption(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.textContent = t(key);
}

function setPlaceholder(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.placeholder = t(key);
}

function setMetaLanguage(lang) {
  document.documentElement.lang = lang;
  document.title = t("documentTitle");
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("metaDescription"));
}

function syncLanguageButtons() {
  document.querySelectorAll(".language-btn").forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function applyStaticTranslations() {
  setMetaLanguage(currentLang);
  setText('a[href="#properties"].nav-item', "navProperties");
  setText('a[href="#destinations"].nav-item', "navDestinations");
  setText('a[href="#services"].nav-item', "navServices");
  setText('a[href="#about"].nav-item', "navAbout");
  setText('a[href="#journal"].nav-item', "navJournal");
  setText('a[href="#contact"].nav-item', "navContact");
  setText("#open-viewing-btn", "bookViewing");
  setText('#hero-try-label', 'heroPruebaLabel');
  setText('label[for="filter-location"]', "location");
  setText('label[for="filter-type"]', "propertyType");
  setText('label[for="filter-price"]', "priceRange");
  setText('label[for="filter-beds"]', "bedsBaths");
  setOption('#filter-location option[value=""]', "anyLocation");
  setOption('#filter-location option[value="marbella"]', "marbellaSpain");
  setOption('#filter-location option[value="mallorca"]', "mallorcaSpain");
  setOption('#filter-location option[value="ibiza"]', "ibizaSpain");
  setOption('#filter-location option[value="barcelona"]', "barcelonaSpain");
  setOption('#filter-type option[value=""]', "anyType");
  setOption('#filter-type option[value="villa"]', "luxuryVilla");
  setOption('#filter-type option[value="penthouse"]', "penthouse");
  setOption('#filter-type option[value="finca"]', "traditionalFinca");
  setOption('#filter-price option[value=""]', "anyPrice");
  setOption('#filter-price option[value="0-5"]', "under5");
  setOption('#filter-price option[value="5-8"]', "between5And8");
  setOption('#filter-price option[value="8+"]', "over8");
  setOption('#filter-beds option[value=""]', "any");
  setOption('#filter-beds option[value="3"]', "beds3");
  setOption('#filter-beds option[value="4"]', "beds4");
  setOption('#filter-beds option[value="5"]', "beds5");
  setText(".btn-search", "searchProperties");
  setText(".section-properties .section-tag", "featuredProperties");
  setText(".section-properties .section-title", "featuredTitle");
  setText("#view-all-link", "viewAllProperties");
  setText(".section-difference .section-tag", "differenceTag");
  setHTML(".section-difference .section-title", "differenceTitle");
  setText(".section-difference .section-text", "differenceText");
  setText(".section-difference .section-action-link", "learnMoreAboutUs");
  setText(".section-destinations .section-tag", "destinations");
  setText(".section-destinations .section-title", "destinationsTitle");
  setText(".section-destinations .section-action-link", "exploreAllAreas");
  setAllText(".dest-link", "viewArea");
  document.querySelectorAll(".dest-region").forEach(el => {
    if (el.textContent.includes("Balearic") || el.textContent.includes("Baleares")) el.textContent = t("balearicIslands");
    if (el.textContent.includes("Catal")) el.textContent = t("catalonia");
  });
  const markers = document.querySelectorAll(".map-marker");
  if (markers[0]) markers[0].dataset.tooltip = t("mapMarbella");
  if (markers[1]) markers[1].dataset.tooltip = t("mapMallorca");
  if (markers[2]) markers[2].dataset.tooltip = t("mapBarcelona");
  setText(".section-advisors .section-tag", "advisorsTag");
  setText(".section-advisors .section-title", "advisorsTitle");
  setText(".section-advisors .section-action-link", "meetTeam");
  const roles = document.querySelectorAll(".advisor-role");
  if (roles[0]) roles[0].textContent = t("founder");
  if (roles[1]) roles[1].textContent = t("seniorAdvisor");
  if (roles[2]) roles[2].textContent = t("propertyAdvisor");
  if (roles[3]) roles[3].textContent = t("clientRelations");
  const testimonials = document.querySelectorAll(".testimonial-quote");
  if (testimonials[0]) testimonials[0].textContent = t("testimonial1");
  if (testimonials[1]) testimonials[1].textContent = t("testimonial2");
  if (testimonials[2]) testimonials[2].textContent = t("testimonial3");
  const locations = document.querySelectorAll(".author-location");
  if (locations[0]) locations[0].textContent = `— ${t("london")}`;
  if (locations[1]) locations[1].textContent = `— ${t("munich")}`;
  if (locations[2]) locations[2].textContent = `— ${t("hongKong")}`;
  setText(".pre-footer-title", "preFooterTitle");
  setText(".pre-footer-text", "preFooterText");
  setText("#open-consultation-btn", "scheduleConsultation");
  setText(".footer-logo-col .footer-copyright", "footerCopyright");
  setText(".footer-grid > .footer-col:nth-child(2) .footer-col-title", "contact");
  setHTML(".footer-address", "marbellaAddress");
  setText(".footer-grid > nav.footer-col .footer-col-title", "navigation");
  setText(".footer-grid > .footer-col:nth-child(4) .footer-col-title", "followUs");
  const footerLinks = document.querySelectorAll(".footer-links a");
  ["footerProperties", "footerDestinations", "footerServices", "footerAbout", "footerJournal", "footerContact"].forEach((key, idx) => {
    if (footerLinks[idx]) footerLinks[idx].textContent = t(key);
  });
  const sealText = document.querySelector(".seal-text textPath");
  if (sealText) sealText.textContent = t("sealText");
  const legalLinks = document.querySelectorAll(".footer-bottom-links a");
  if (legalLinks[0]) legalLinks[0].textContent = t("privacy");
  if (legalLinks[1]) legalLinks[1].textContent = t("terms");
  if (legalLinks[2]) legalLinks[2].textContent = t("cookies");
  const specLabels = document.querySelectorAll(".modal-specs-row .spec-label");
  if (specLabels[0]) specLabels[0].textContent = t("modalBeds");
  if (specLabels[1]) specLabels[1].textContent = t("modalBaths");
  if (specLabels[2]) specLabels[2].textContent = t("buildSize");
  const blockTitles = document.querySelectorAll(".block-title");
  if (blockTitles[0]) blockTitles[0].textContent = t("residence");
  if (blockTitles[1]) blockTitles[1].textContent = t("requestInfo");
  setPlaceholder('input[name="name"]', "yourName");
  setPlaceholder('input[name="email"]', "yourEmail");
  setPlaceholder('textarea[name="message"]', "inquiryMessage");
  setPlaceholder("#booking-name", "fullName");
  setPlaceholder("#booking-email", "emailAddress");
  setText("#property-inquiry-form .btn", "sendInquiry");
  setText("#modal-booking-title", "consultationTitle");
  setText(".modal-subtitle", "consultationSubtitle");
  setText('label[for="booking-name"]', "fullName");
  setText('label[for="booking-email"]', "emailAddress");
  setText('label[for="booking-phone"]', "phoneNumber");
  setText('label[for="booking-date"]', "preferredDate");
  setText('label[for="booking-service"]', "interestedIn");
  setOption('#booking-service option[value="buy"]', "buyLuxuryProperty");
  setOption('#booking-service option[value="sell"]', "sellPremiumListing");
  setOption('#booking-service option[value="consultation"]', "portfolioReview");
  setText("#consultation-form .btn", "requestAppointment");
  setText('#modal-both-hours', 'bothHours');
  // Sección Dos Vidas
  setText('#dv-eyebrow', 'dosVidasEyebrow');
  setHTML('#dv-title', 'dosVidasTitle');
  setText('#dv-day-label', 'dosVidasDayLabel');
  setText('#dv-day-text', 'dosVidasDayText');
  setText('#dv-night-label', 'dosVidasNightLabel');
  setText('#dv-night-text', 'dosVidasNightText');
  setText('#dv-close-text', 'dosVidasClose');
  const dvBtnDayEl = document.getElementById('dv-btn-day');
  if (dvBtnDayEl) dvBtnDayEl.setAttribute('aria-label', t('dvBtnAriaDay'));
  const dvBtnNightEl = document.getElementById('dv-btn-night');
  if (dvBtnNightEl) dvBtnNightEl.setAttribute('aria-label', t('dvBtnAriaNight'));
  // Copy y reloj dependientes del tema activo
  applyThemeCopy(false);
  updateThemeClock();
  syncLanguageButtons();
}

function initI18n() {
  document.querySelectorAll(".language-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("lurex_language", currentLang);
      applyStaticTranslations();
      renderProperties(getFilteredProperties());
      syncOpenPropertyModal();
    });
  });
  applyStaticTranslations();
}

function getFilteredProperties() {
  const searchForm = document.getElementById("search-properties-form");
  if (!searchForm) return propertiesDatabase;

  const formData = new FormData(searchForm);
  const locationVal = formData.get("location");
  const typeVal = formData.get("type");
  const priceVal = formData.get("price");
  const bedsVal = formData.get("beds");

  return propertiesDatabase.filter(prop => {
    if (locationVal && prop.location !== locationVal) return false;
    if (typeVal && prop.type !== typeVal) return false;
    if (bedsVal && prop.beds < parseInt(bedsVal)) return false;

    if (priceVal) {
      const priceInMillions = prop.price / 1000000;
      if (priceVal === "0-5" && priceInMillions >= 5) return false;
      if (priceVal === "5-8" && (priceInMillions < 5 || priceInMillions > 8)) return false;
      if (priceVal === "8+" && priceInMillions <= 8) return false;
    }

    return true;
  });
}

/* ==========================================================================
   COPY DEPENDIENTE DEL TEMA — hero title/subtitle cambia con día/noche
   ========================================================================== */
function applyThemeCopy() {
  const titleEl = document.querySelector('.hero-title');
  const subtitleEl = document.querySelector('.hero-subtitle');
  if (titleEl) titleEl.textContent = t('heroTitleDay');
  if (subtitleEl) subtitleEl.textContent = t('heroSubtitleDay');

  const isNight = document.documentElement.getAttribute('data-theme') === 'night';

  // Actualiza aria-label del hero toggle según el tema activo
  const heroToggle = document.getElementById('hero-theme-toggle');
  if (heroToggle) {
    heroToggle.setAttribute('aria-label',
      isNight
        ? (currentLang === 'es' ? 'Cambiar a modo día'   : 'Switch to day mode')
        : (currentLang === 'es' ? 'Cambiar a modo noche' : 'Switch to night mode')
    );
  }

  // Actualiza aria-label del botón Dos Vidas según el tema activo
  const dvBtn = document.getElementById('dos-vidas-toggle-btn');
  if (dvBtn) {
    dvBtn.setAttribute('aria-label', t(isNight ? 'dosVidasToggleAriaNight' : 'dosVidasToggleAriaDay'));
  }
}

function updateThemeClock() {
  const el = document.getElementById('theme-clock');
  if (!el) return;
  const isNight = document.documentElement.getAttribute('data-theme') === 'night';
  el.textContent = isNight ? `21:05 · ${t('clockNightfall')}` : `12:40 · ${t('clockMidday')}`;
}

/* ==========================================================================
   TEMA DÍA / NOCHE
   ========================================================================== */
function initTheme() {
  const html = document.documentElement;
  // El inline script del <head> ya restauró data-theme; aquí solo gestionamos el botón.
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function updateToggleState(theme) {
    const isNight = theme === "night";
    btn.setAttribute("aria-pressed", String(isNight));
    btn.setAttribute("aria-label",
      isNight
        ? (currentLang === "es" ? "Cambiar a modo día"   : "Switch to day mode")
        : (currentLang === "es" ? "Cambiar a modo noche" : "Switch to night mode")
    );
  }

  updateToggleState(html.getAttribute("data-theme") || "day");

  btn.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "night" ? "day" : "night";
    html.setAttribute("data-theme", next);
    localStorage.setItem("lurex_theme", next);
    updateToggleState(next);
    applyThemeCopy(true);
    updateThemeClock();
    // Actualiza el icono solo de las cards que siguen el tema global (sin override)
    document.querySelectorAll('.property-card:not([data-image-mode]) .btn-img-toggle').forEach(imgBtn => {
      updateCardToggleBtn(imgBtn, next);
    });
  });

  // Botón CTA de Dos Vidas — alterna el tema
  const dvBtn = document.getElementById('dos-vidas-toggle-btn');
  if (dvBtn) dvBtn.addEventListener('click', () => btn.click());

  // Toggle del hero — delega en el botón del navbar
  const heroToggle = document.getElementById('hero-theme-toggle');
  if (heroToggle) heroToggle.addEventListener('click', () => btn.click());

  // Botones de hora directa de Dos Vidas — activan el modo concreto sin toggle
  const dvBtnDay = document.getElementById('dv-btn-day');
  if (dvBtnDay) {
    dvBtnDay.addEventListener('click', () => {
      if (html.getAttribute('data-theme') !== 'day') btn.click();
    });
  }
  const dvBtnNight = document.getElementById('dv-btn-night');
  if (dvBtnNight) {
    dvBtnNight.addEventListener('click', () => {
      if (html.getAttribute('data-theme') !== 'night') btn.click();
    });
  }
}

/* ==========================================================================
   INITIALIZATION & SELECTION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initI18n();
  initNavbar();
  initPropertiesGrid();
  initSearch();
  initModals();
  initSlider();
  initScrollAnimations();
});

/* ==========================================================================
   NAVBAR & MOBILE TOGGLE
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navItems = document.querySelectorAll(".nav-item");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  mobileToggle.addEventListener("click", () => {
    const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", !isExpanded);
    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open", !isExpanded);
  });

  // Close mobile menu when clicking nav links
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}

/* ==========================================================================
   PROPERTIES GRID RENDERING & FAVORITING
   ========================================================================== */
function initPropertiesGrid() {
  // Render default list
  renderProperties(propertiesDatabase);
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("lurex_favorites")) || [];
  } catch (e) {
    return [];
  }
}

function toggleFavorite(id, buttonEl) {
  let favorites = getFavorites();
  const index = favorites.indexOf(id);
  
  if (index > -1) {
    favorites.splice(index, 1);
    buttonEl.classList.remove("active");
    showToast(t("removed"));
  } else {
    favorites.push(id);
    buttonEl.classList.add("active");
    showToast(t("saved"));
  }
  
  localStorage.setItem("lurex_favorites", JSON.stringify(favorites));
}

function renderProperties(properties) {
  const grid = document.getElementById("properties-grid");
  grid.innerHTML = "";
  
  if (properties.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>${t("noResultsTitle")}</h3>
        <p>${t("noResultsText")}</p>
      </div>
    `;
    return;
  }

  const favorites = getFavorites();

  properties.forEach((prop, idx) => {
    const isFav = favorites.includes(prop.id);
    const card = document.createElement("article");
    card.className = "property-card reveal-on-scroll";
    card.setAttribute("data-id", prop.id);
    // Stagger entry effect on load if browser-sync/initial loading is done
    card.style.transitionDelay = `${idx * 0.1}s`;

    // Restora el modo de imagen guardado por el usuario para esta card
    const savedMode = cardImageModes.get(prop.id);
    if (savedMode) card.setAttribute('data-image-mode', savedMode);
    const initMode = savedMode || document.documentElement.getAttribute('data-theme') || 'day';
    const initIsNight = initMode === 'night';

    card.innerHTML = `
      <div class="property-img-wrapper">
        <div class="scene-img-wrap">
          <img src="assets/assets-dia/${prop.imgBase}_dia.png" alt="${propertyText(prop, "title")}"
               class="scene-layer scene-day" loading="lazy" onerror="this.style.opacity='0'">
          <img src="assets/assets-noche/${prop.imgBase}_nch.png" alt="${propertyText(prop, "title")}"
               class="scene-layer scene-night" loading="lazy" onerror="this.style.opacity='0'">
        </div>
        <button class="btn-img-toggle" type="button"
                aria-label="${t(initIsNight ? 'imgToggleAriaNight' : 'imgToggleAriaDay')}">
          <svg class="icon-img-sun"${initIsNight ? '' : ' style="display:none"'} width="12" height="12"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg class="icon-img-moon"${initIsNight ? ' style="display:none"' : ''} width="12" height="12"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <button class="btn-favorite ${isFav ? 'active' : ''}" aria-label="${t("favoriteAria")}" data-fav-id="${prop.id}">
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
      <div class="property-info">
        <div class="prop-meta">
          <h3 class="prop-title">${propertyText(prop, "title")}</h3>
          <span class="prop-price">${prop.priceFormatted}</span>
        </div>
        <span class="prop-both-hours">${t('bothHours')}</span>
        <p class="prop-location">${propertyText(prop, "locationName")}</p>
        <div class="prop-specs">
          <div class="spec-icon-group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 20h20M4 20v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
            </svg>
            <span>${prop.beds} ${t("beds")}</span>
          </div>
          <div class="spec-icon-group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 6H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4"></path>
              <path d="M3 10h18M7 15h2M15 15h2M11 6V3a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v3"></path>
            </svg>
            <span>${prop.baths} ${t("baths")}</span>
          </div>
          <div class="spec-icon-group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="15" y1="3" x2="15" y2="21"></line>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="3" y1="15" x2="21" y2="15"></line>
            </svg>
            <span>${prop.size} m²</span>
          </div>
        </div>
      </div>
    `;

    // Hook card click events
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-favorite") || e.target.closest(".btn-img-toggle")) return;
      openPropertyModal(prop);
    });

    // Hook favorite click events
    const favBtn = card.querySelector(".btn-favorite");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(prop.id, favBtn);
    });

    // Hook per-card image toggle
    const imgToggleBtn = card.querySelector(".btn-img-toggle");
    imgToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentMode = card.getAttribute('data-image-mode') ||
                          document.documentElement.getAttribute('data-theme') || 'day';
      const nextMode = currentMode === 'night' ? 'day' : 'night';
      card.setAttribute('data-image-mode', nextMode);
      cardImageModes.set(prop.id, nextMode);
      updateCardToggleBtn(imgToggleBtn, nextMode);
    });

    grid.appendChild(card);
  });
  
  // Re-observe scroll reveals for the newly created elements
  observeScrollElements();
}

/* ==========================================================================
   SEARCH & FILTER LOGIC
   ========================================================================== */
function initSearch() {
  const searchForm = document.getElementById("search-properties-form");
  const viewAllLink = document.getElementById("view-all-link");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const filtered = getFilteredProperties();

    // Scroll smoothly to properties grid
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
    
    // Render the results
    renderProperties(filtered);
    
    showToast(`${t("found")} ${filtered.length} ${t("matchingProperties")}`);
  });

  // View All handler (resets filters and renders all)
  viewAllLink.addEventListener("click", (e) => {
    e.preventDefault();
    searchForm.reset();
    renderProperties(propertiesDatabase);
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
  });
}

/* ==========================================================================
   NATIVE DIALOGS (MODALS)
   ========================================================================== */
function initModals() {
  const propModal = document.getElementById("property-detail-modal");
  const viewModal = document.getElementById("viewing-booking-modal");
  
  // Close buttons hooks
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const dialog = btn.closest("dialog");
      if (dialog) dialog.close();
    });
  });

  // Open Viewing Booking Modal from CTA
  document.getElementById("open-viewing-btn").addEventListener("click", () => {
    viewModal.showModal();
  });
  document.getElementById("open-consultation-btn").addEventListener("click", () => {
    viewModal.showModal();
  });

  // ------------------------------------------------------------------------
  // Fallback for Backdrop Click (Light-Dismiss)
  // ------------------------------------------------------------------------
  const setupLightDismissFallback = (dialog) => {
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        // Target is the dialog itself (the backdrop)
        if (event.target !== dialog) return;

        // Check if click was inside the modal-wrapper element
        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );

        if (!isDialogContent) {
          dialog.close();
        }
      });
    }
  };

  setupLightDismissFallback(propModal);
  setupLightDismissFallback(viewModal);

  // Forms Submissions hooks
  document.getElementById("property-inquiry-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const propName = document.getElementById("inquiry-property-name").value;
    propModal.close();
    e.target.reset();
    showToast(`${t("inquirySent")} ${propName}`);
  });

  document.getElementById("consultation-form").addEventListener("submit", (e) => {
    e.preventDefault();
    viewModal.close();
    e.target.reset();
    showToast(t("consultationSent"));
  });
}

// Persistencia del modo de imagen por card, independiente del tema global
const cardImageModes = new Map();

function updateCardToggleBtn(btn, mode) {
  const isNight = mode === 'night';
  const sunIcon = btn.querySelector('.icon-img-sun');
  const moonIcon = btn.querySelector('.icon-img-moon');
  // Muestra el icono del modo OPUESTO: invita a descubrir la otra hora
  if (sunIcon) sunIcon.style.display = isNight ? '' : 'none';
  if (moonIcon) moonIcon.style.display = isNight ? 'none' : '';
  btn.setAttribute('aria-label', t(isNight ? 'imgToggleAriaNight' : 'imgToggleAriaDay'));
}

let activeProperty = null;

function openPropertyModal(property) {
  const modal = document.getElementById("property-detail-modal");
  activeProperty = property;

  // Limpia opacity inline que pudo haber fijado onerror al cargar con src vacío
  modal.querySelectorAll('.scene-layer').forEach(img => { img.style.opacity = ''; });

  // Populate fields — imágenes día/noche

  const _imgTitle = propertyText(property, "title");
  document.getElementById("modal-prop-img-day").src   = `assets/assets-dia/${property.imgBase}_dia.png`;
  document.getElementById("modal-prop-img-day").alt   = _imgTitle;
  document.getElementById("modal-prop-img-night").src = `assets/assets-noche/${property.imgBase}_nch.png`;
  document.getElementById("modal-prop-img-night").alt = _imgTitle;
  document.getElementById("modal-prop-title").textContent = propertyText(property, "title");
  document.getElementById("modal-prop-price").textContent = property.priceFormatted;
  document.getElementById("modal-prop-location").textContent = propertyText(property, "locationName");
  document.getElementById("modal-prop-beds").textContent = `${property.beds} ${t("rooms")}`;
  document.getElementById("modal-prop-baths").textContent = `${property.baths} ${t("baths")}`;
  document.getElementById("modal-prop-size").textContent = `${property.size} m²`;
  document.getElementById("modal-prop-description").textContent = propertyText(property, "description");
  
  // inquiry form hidden field
  document.getElementById("inquiry-property-name").value = propertyText(property, "title");

  if (!modal.open) modal.showModal();
}

function syncOpenPropertyModal() {
  const modal = document.getElementById("property-detail-modal");
  if (activeProperty && modal?.open) {
    openPropertyModal(activeProperty);
  }
}

/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById("toast-container");
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.add("toast-fadeout");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 3500);
}

/* ==========================================================================
   TESTIMONIALS SLIDER
   ========================================================================== */
function initSlider() {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot-btn");
  const container = document.querySelector(".testimonial-slides-container");
  
  let currentSlide = 0;
  let sliderInterval;

  const goToSlide = (index) => {
    currentSlide = index;
    
    // Transform container to show slide
    container.style.transform = `translateX(-${index * 100}%)`;
    
    // Toggle active state for slides
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });
    
    // Toggle active state for dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  };

  const startAutoSlide = () => {
    sliderInterval = setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      goToSlide(nextSlide);
    }, 6000);
  };

  const resetAutoSlide = () => {
    clearInterval(sliderInterval);
    startAutoSlide();
  };

  // Dots click events
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const slideIdx = parseInt(dot.getAttribute("data-slide"));
      goToSlide(slideIdx);
      resetAutoSlide();
    });
  });

  // Start slider
  if (slides.length > 0) {
    startAutoSlide();
  }
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS (INTERSECTIONOBSERVER FALLBACK)
   ========================================================================== */
let observer;

function initScrollAnimations() {
  // If the browser supports native scroll-driven animations, let CSS handle it
  if (CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    return;
  }
  
  // Initialize IntersectionObserver fallback
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Once revealed, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  observeScrollElements();
}

function observeScrollElements() {
  if (!observer) return; // Native CSS is active
  
  const scrollElements = document.querySelectorAll(".reveal-on-scroll");
  scrollElements.forEach(el => {
    observer.observe(el);
  });
}

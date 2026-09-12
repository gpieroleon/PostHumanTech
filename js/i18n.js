/* ============================================================
   POST HUMAN TECHNOLOGIES — i18n.js
   Diccionario inline ES / EN / IT / PT (sin fetch: funciona en file://)
   Convención:
     data-i18n="clave"                      → textContent
     data-i18n-attr="placeholder: clave, aria-label: clave, alt: clave, content: clave"
   API: window.PostHumanI18n = { t(key), setLang(lang), getLang() }
   Al cambiar de idioma se dispara el evento `posthuman:langchange`
   en document (detail.lang). Clave faltante → fallback ES + console.warn.
   ============================================================ */
(function () {
  'use strict';

  var LANGS = ['es', 'en', 'it', 'pt'];

  var DICT = {
    /* ---------- Meta / idioma ---------- */
    'meta.title': {
      es: 'Post Human Technologies | Desarrollo Web de Alto Nivel',
      en: 'Post Human Technologies | High-End Web Development',
      it: 'Post Human Technologies | Sviluppo Web di Alto Livello',
      pt: 'Post Human Technologies | Desenvolvimento Web de Alto Nível'
    },
    'meta.description': {
      es: 'Post Human Technologies — Creamos sitios web de alto impacto. Elige una plantilla premium lista en días, o un desarrollo a medida diseñado desde cero para tu negocio.',
      en: 'Post Human Technologies — We build high-impact websites. Choose a premium template ready in days, or custom development designed from scratch for your business.',
      it: 'Post Human Technologies — Creiamo siti web ad alto impatto. Scegli un template premium pronto in pochi giorni, o uno sviluppo su misura progettato da zero per il tuo business.',
      pt: 'Post Human Technologies — Criamos sites de alto impacto. Escolha um template premium pronto em dias, ou um desenvolvimento sob medida desenhado do zero para o seu negócio.'
    },
    'lang.label': { es: 'Idioma', en: 'Language', it: 'Lingua', pt: 'Idioma' },

    /* ---------- Navegación ---------- */
    'nav.services': { es: 'Servicios', en: 'Services', it: 'Servizi', pt: 'Serviços' },
    'nav.templates': { es: 'Plantillas', en: 'Templates', it: 'Template', pt: 'Templates' },
    'nav.process': { es: 'Proceso', en: 'Process', it: 'Processo', pt: 'Processo' },
    'nav.pricing': { es: 'Precios', en: 'Pricing', it: 'Prezzi', pt: 'Preços' },
    'nav.faq': { es: 'FAQ', en: 'FAQ', it: 'FAQ', pt: 'FAQ' },
    'nav.contact': { es: 'Contacto', en: 'Contact', it: 'Contatti', pt: 'Contato' },
    'nav.cta': { es: 'Empezar proyecto', en: 'Start a project', it: 'Inizia un progetto', pt: 'Começar projeto' },
    'nav.menu_open': { es: 'Abrir menú', en: 'Open menu', it: 'Apri il menu', pt: 'Abrir menu' },
    'nav.menu_close': { es: 'Cerrar menú', en: 'Close menu', it: 'Chiudi il menu', pt: 'Fechar menu' },
    'nav.main': { es: 'Navegación principal', en: 'Main navigation', it: 'Navigazione principale', pt: 'Navegação principal' },
    'nav.mobile': { es: 'Menú móvil', en: 'Mobile menu', it: 'Menu mobile', pt: 'Menu móvel' },

    /* ---------- Hero ---------- */
    'hero.eyebrow': {
      es: 'Estudio de desarrollo web',
      en: 'Web development studio',
      it: 'Studio di sviluppo web',
      pt: 'Estúdio de desenvolvimento web'
    },
    'hero.title_a': {
      es: 'Sitios web que se sienten',
      en: 'Websites that feel',
      it: 'Siti web che sembrano',
      pt: 'Sites que parecem'
    },
    'hero.title_b': {
      es: 'del futuro.',
      en: 'like the future.',
      it: 'del futuro.',
      pt: 'do futuro.'
    },
    'hero.sub': {
      es: 'Diseñamos y desarrollamos experiencias digitales rápidas, elegantes y pensadas para convertir visitantes en clientes. Elige una plantilla premium o construyamos algo completamente a tu medida.',
      en: 'We design and build fast, elegant digital experiences made to turn visitors into customers. Choose a premium template or let us build something completely tailored to you.',
      it: 'Progettiamo e sviluppiamo esperienze digitali veloci, eleganti e pensate per trasformare i visitatori in clienti. Scegli un template premium o costruiamo qualcosa di completamente su misura.',
      pt: 'Desenhamos e desenvolvemos experiências digitais rápidas, elegantes e pensadas para converter visitantes em clientes. Escolha um template premium ou construamos algo completamente sob medida.'
    },
    'hero.cta_primary': { es: 'Empezar mi proyecto', en: 'Start my project', it: 'Inizia il mio progetto', pt: 'Começar meu projeto' },
    'hero.cta_secondary': { es: 'Explorar plantillas', en: 'Browse templates', it: 'Esplora i template', pt: 'Explorar templates' },
    'hero.stat1_label': { es: 'PageSpeed medio', en: 'Average PageSpeed', it: 'PageSpeed medio', pt: 'PageSpeed médio' },
    'hero.stat2_label': { es: 'Proyectos entregados', en: 'Projects delivered', it: 'Progetti consegnati', pt: 'Projetos entregues' },
    'hero.stat3_label': { es: 'Clientes que repiten', en: 'Returning clients', it: 'Clienti che tornano', pt: 'Clientes que voltam' },
    'hero.card_speed': { es: 'PageSpeed', en: 'PageSpeed', it: 'PageSpeed', pt: 'PageSpeed' },
    'hero.card_conversion': { es: 'solicitudes', en: 'inquiries', it: 'richieste', pt: 'solicitações' },
    'hero.scroll': { es: 'desliza', en: 'scroll', it: 'scorri', pt: 'role' },
    'hero.scroll_aria': {
      es: 'Desplázate hacia abajo',
      en: 'Scroll down',
      it: 'Scorri in basso',
      pt: 'Role para baixo'
    },

    /* ---------- Servicios ---------- */
    'services.eyebrow': { es: 'Servicios', en: 'Services', it: 'Servizi', pt: 'Serviços' },
    'services.heading': {
      es: 'Dos caminos, una misma calidad.',
      en: 'Two paths, the same quality.',
      it: 'Due strade, la stessa qualità.',
      pt: 'Dois caminhos, a mesma qualidade.'
    },
    'services.sub': {
      es: 'Empieza rápido con una plantilla profesional o invierte en una experiencia diseñada exclusivamente para tu marca. En ambos casos, mismo estándar de ingeniería y diseño.',
      en: 'Start fast with a professional template or invest in an experience designed exclusively for your brand. Either way, the same standard of engineering and design.',
      it: 'Parti veloce con un template professionale o investi in un\'esperienza progettata esclusivamente per il tuo brand. In entrambi i casi, lo stesso standard di ingegneria e design.',
      pt: 'Comece rápido com um template profissional ou invista em uma experiência desenhada exclusivamente para a sua marca. Nos dois casos, o mesmo padrão de engenharia e design.'
    },
    'services.badge_template': { es: 'Más económico', en: 'Budget-friendly', it: 'Più economico', pt: 'Mais econômico' },
    'services.badge_custom': { es: 'Máximo impacto', en: 'Maximum impact', it: 'Massimo impatto', pt: 'Máximo impacto' },
    'services.t1_title': {
      es: 'Web basada en plantilla',
      en: 'Template-based website',
      it: 'Sito basato su template',
      pt: 'Site baseado em template'
    },
    'services.t1_desc': {
      es: 'Tu web en días, no meses. Partimos de una plantilla premium validada y la transformamos con tu marca, tus colores y tu contenido.',
      en: 'Your website in days, not months. We start from a proven premium template and transform it with your brand, your colors and your content.',
      it: 'Il tuo sito in giorni, non mesi. Partiamo da un template premium collaudato e lo trasformiamo con il tuo brand, i tuoi colori e i tuoi contenuti.',
      pt: 'Seu site em dias, não meses. Partimos de um template premium validado e o transformamos com a sua marca, suas cores e seu conteúdo.'
    },
    'services.t1_f1': {
      es: 'Plantilla premium seleccionada para tu sector',
      en: 'Premium template selected for your industry',
      it: 'Template premium selezionato per il tuo settore',
      pt: 'Template premium selecionado para o seu setor'
    },
    'services.t1_f2': {
      es: 'Identidad completa: logo, colores y tipografías',
      en: 'Full identity: logo, colors and typography',
      it: 'Identità completa: logo, colori e tipografie',
      pt: 'Identidade completa: logo, cores e tipografias'
    },
    'services.t1_f3': {
      es: 'Diseño responsive (móvil, tablet y escritorio)',
      en: 'Responsive design (mobile, tablet and desktop)',
      it: 'Design responsive (mobile, tablet e desktop)',
      pt: 'Design responsivo (celular, tablet e desktop)'
    },
    'services.t1_f4': {
      es: 'SEO base y analítica configurada',
      en: 'Foundational SEO and analytics set up',
      it: 'SEO base e analitica configurata',
      pt: 'SEO base e análise configurada'
    },
    'services.t1_f5': {
      es: 'Formulario de contacto y mapa',
      en: 'Contact form and map',
      it: 'Modulo di contatto e mappa',
      pt: 'Formulário de contato e mapa'
    },
    'services.t1_f6': {
      es: 'Publicación en tu dominio, listo para operar',
      en: 'Deployed to your domain, ready to run',
      it: 'Pubblicazione sul tuo dominio, pronto all\'uso',
      pt: 'Publicação no seu domínio, pronto para operar'
    },
    'services.t2_title': {
      es: 'Desarrollo a medida',
      en: 'Custom development',
      it: 'Sviluppo su misura',
      pt: 'Desenvolvimento sob medida'
    },
    'services.t2_desc': {
      es: 'Diseñado desde cero para tu negocio. Estrategia, diseño exclusivo e ingeniería de alto nivel para cuando la plantilla no es suficiente.',
      en: 'Designed from scratch for your business. Strategy, exclusive design and high-end engineering for when a template is not enough.',
      it: 'Progettato da zero per il tuo business. Strategia, design esclusivo e ingegneria di alto livello per quando il template non basta.',
      pt: 'Desenhado do zero para o seu negócio. Estratégia, design exclusivo e engenharia de alto nível para quando o template não é suficiente.'
    },
    'services.t2_f1': {
      es: 'Investigación, estrategia y arquitectura de contenidos',
      en: 'Research, strategy and content architecture',
      it: 'Ricerca, strategia e architettura dei contenuti',
      pt: 'Pesquisa, estratégia e arquitetura de conteúdo'
    },
    'services.t2_f2': {
      es: 'Diseño UX/UI exclusivo, sin atajos',
      en: 'Exclusive UX/UI design, no shortcuts',
      it: 'Design UX/UI esclusivo, senza scorciatoie',
      pt: 'Design UX/UI exclusivo, sem atalhos'
    },
    'services.t2_f3': {
      es: 'Desarrollo a medida con tecnología moderna',
      en: 'Custom build with modern technology',
      it: 'Sviluppo su misura con tecnologia moderna',
      pt: 'Desenvolvimento sob medida com tecnologia moderna'
    },
    'services.t2_f4': {
      es: 'Animaciones e interacciones avanzadas',
      en: 'Advanced animations and interactions',
      it: 'Animazioni e interazioni avanzate',
      pt: 'Animações e interações avançadas'
    },
    'services.t2_f5': {
      es: 'CMS, pasarelas de pago, reservas o CRM integrados',
      en: 'CMS, payment gateways, booking or CRM integrations',
      it: 'CMS, pagamenti, prenotazioni o CRM integrati',
      pt: 'CMS, gateways de pagamento, reservas ou CRM integrados'
    },
    'services.t2_f6': {
      es: 'SEO avanzado, analítica y soporte prioritario',
      en: 'Advanced SEO, analytics and priority support',
      it: 'SEO avanzato, analitica e supporto prioritario',
      pt: 'SEO avançado, análise e suporte prioritário'
    },
    'services.from': { es: 'desde', en: 'from', it: 'da', pt: 'a partir de' },
    'services.t1_cta': { es: 'Ver plantillas', en: 'View templates', it: 'Vedi i template', pt: 'Ver templates' },
    'services.t2_cta': {
      es: 'Solicitar propuesta',
      en: 'Request a proposal',
      it: 'Richiedi una proposta',
      pt: 'Solicitar proposta'
    },

    /* ---------- Plantillas ---------- */
    'templates.eyebrow': { es: 'Plantillas', en: 'Templates', it: 'Template', pt: 'Templates' },
    'templates.heading': {
      es: 'Empieza con una base probada.',
      en: 'Start from a proven foundation.',
      it: 'Parti da una base collaudata.',
      pt: 'Comece com uma base comprovada.'
    },
    'templates.sub': {
      es: 'Cada plantilla es una estructura profesional que adaptamos por completo a tu marca. Elige la que más se parece a tu negocio y la hacemos tuya.',
      en: 'Every template is a professional structure that we fully adapt to your brand. Pick the one closest to your business and we make it yours.',
      it: 'Ogni template è una struttura professionale che adattiamo completamente al tuo brand. Scegli quella più simile al tuo business e la rendiamo tua.',
      pt: 'Cada template é uma estrutura profissional que adaptamos por completo à sua marca. Escolha a mais parecida com o seu negócio e a tornamos sua.'
    },
    'templates.aurora_desc': {
      es: 'Restaurantes, cafés y cocina',
      en: 'Restaurants, cafés and food',
      it: 'Ristoranti, caffè e cucina',
      pt: 'Restaurantes, cafés e gastronomia'
    },
    'templates.vertex_desc': {
      es: 'Consultoras y servicios B2B',
      en: 'Consulting and B2B services',
      it: 'Consulenza e servizi B2B',
      pt: 'Consultorias e serviços B2B'
    },
    'templates.lumen_desc': {
      es: 'Portafolios y fotografía',
      en: 'Portfolios and photography',
      it: 'Portfolio e fotografia',
      pt: 'Portfólios e fotografia'
    },
    'templates.pulse_desc': {
      es: 'Fitness, yoga y entrenadores',
      en: 'Fitness, yoga and trainers',
      it: 'Fitness, yoga e personal trainer',
      pt: 'Fitness, yoga e personal trainers'
    },
    'templates.choose': {
      es: 'Elegir plantilla',
      en: 'Choose template',
      it: 'Scegli template',
      pt: 'Escolher template'
    },

    /* ---------- Proceso ---------- */
    'process.eyebrow': { es: 'Proceso', en: 'Process', it: 'Processo', pt: 'Processo' },
    'process.heading': {
      es: 'Un método claro, sin sorpresas.',
      en: 'A clear process, no surprises.',
      it: 'Un metodo chiaro, senza sorprese.',
      pt: 'Um método claro, sem surpresas.'
    },
    'process.sub': {
      es: 'Sabrás en qué punto está tu proyecto en cada momento, con entregas visibles y comunicación directa con quienes lo construyen.',
      en: 'You will always know where your project stands, with visible deliverables and direct communication with the people building it.',
      it: 'Saprai sempre a che punto è il tuo progetto, con consegne visibili e comunicazione diretta con chi lo costruisce.',
      pt: 'Você saberá em que ponto está seu projeto a todo momento, com entregas visíveis e comunicação direta com quem o constrói.'
    },
    'process.s1_title': { es: 'Descubrimiento', en: 'Discovery', it: 'Discovery', pt: 'Descoberta' },
    'process.s1_desc': {
      es: 'Entendemos tu negocio, tus clientes y tus objetivos. Definimos qué debe lograr tu web y cómo medirlo.',
      en: 'We understand your business, your customers and your goals. We define what your website must achieve and how to measure it.',
      it: 'Capiremo il tuo business, i tuoi clienti e i tuoi obiettivi. Definiamo cosa deve ottenere il tuo sito e come misurarlo.',
      pt: 'Entendemos seu negócio, seus clientes e seus objetivos. Definimos o que seu site deve alcançar e como medir isso.'
    },
    'process.s2_title': { es: 'Diseño', en: 'Design', it: 'Design', pt: 'Design' },
    'process.s2_desc': {
      es: 'Creamos la propuesta visual: estructura, tipografías, color y micro-interacciones. Iteramos contigo hasta que encaje.',
      en: 'We create the visual proposal: structure, typography, color and micro-interactions. We iterate with you until it fits.',
      it: 'Creiamo la proposta visuale: struttura, tipografie, colore e micro-interazioni. Iteriamo con te finché non encaja.',
      pt: 'Criamos a proposta visual: estrutura, tipografias, cor e micro-interações. Iteramos com você até encaixar.'
    },
    'process.s3_title': { es: 'Desarrollo', en: 'Development', it: 'Sviluppo', pt: 'Desenvolvimento' },
    'process.s3_desc': {
      es: 'Construimos con código limpio y tecnología moderna: rápido, accesible, optimizado para buscadores y fácil de mantener.',
      en: 'We build with clean code and modern technology: fast, accessible, search-engine friendly and easy to maintain.',
      it: 'Costruiamo con codice pulito e tecnologia moderna: veloce, accessibile, ottimizzato per i motori di ricerca e facile da mantenere.',
      pt: 'Construímos com código limpo e tecnologia moderna: rápido, acessível, otimizado para buscadores e fácil de manter.'
    },
    'process.s4_title': {
      es: 'Lanzamiento y soporte',
      en: 'Launch and support',
      it: 'Lancio e supporto',
      pt: 'Lançamento e suporte'
    },
    'process.s4_desc': {
      es: 'Publicamos en tu dominio, medimos resultados y te acompañamos con soporte y mejoras continuas.',
      en: 'We deploy to your domain, measure results and stay with you through support and continuous improvements.',
      it: 'Pubblichiamo sul tuo dominio, misuriamo i risultati e ti accompagniamo con supporto e miglioramenti continui.',
      pt: 'Publicamos no seu domínio, medimos resultados e o acompanhamos com suporte e melhorias contínuas.'
    },

    /* ---------- Calidad ---------- */
    'quality.eyebrow': {
      es: 'Por qué Post Human',
      en: 'Why Post Human',
      it: 'Perché Post Human',
      pt: 'Por que Post Human'
    },
    'quality.heading': {
      es: 'Calidad que se nota en cada píxel.',
      en: 'Quality you can see in every pixel.',
      it: 'Qualità che si vede in ogni pixel.',
      pt: 'Qualidade que se nota em cada pixel.'
    },
    'quality.sub': {
      es: 'Un sitio bonito que carga lento o falla en el móvil pierde clientes. Por eso cada entrega pasa por un estándar técnico exigente.',
      en: 'A pretty site that loads slowly or breaks on mobile loses customers. That is why every delivery goes through a demanding technical standard.',
      it: 'Un sito bello che carica lentamente o si rompe sul mobile perde clienti. Ecco perché ogni consegna supera uno standard tecnico esigente.',
      pt: 'Um site bonito que carrega devagar ou falha no celular perde clientes. Por isso cada entrega passa por um padrão técnico exigente.'
    },
    'quality.q1_title': { es: 'Rendimiento extremo', en: 'Extreme performance', it: 'Prestazioni estreme', pt: 'Performance extrema' },
    'quality.q1_desc': {
      es: 'Objetivo 90+ en PageSpeed: imágenes optimizadas, carga por fases y hosting pensado para velocidad.',
      en: '90+ PageSpeed target: optimized images, phased loading and hosting built for speed.',
      it: 'Obiettivo 90+ su PageSpeed: immagini ottimizzate, caricamento a fasi e hosting pensato per la velocità.',
      pt: 'Meta de 90+ no PageSpeed: imagens otimizadas, carregamento por fases e hosting pensado para velocidade.'
    },
    'quality.q2_title': { es: 'SEO técnico', en: 'Technical SEO', it: 'SEO tecnico', pt: 'SEO técnico' },
    'quality.q2_desc': {
      es: 'Estructura semántica, metadatos, datos enriquecidos y sitemap para que Google te encuentre desde el día uno.',
      en: 'Semantic structure, metadata, structured data and sitemap so Google finds you from day one.',
      it: 'Struttura semantica, metadati, dati strutturati e sitemap perché Google ti trovi dal primo giorno.',
      pt: 'Estrutura semântica, metadados, dados estruturados e sitemap para o Google te encontrar desde o primeiro dia.'
    },
    'quality.q3_title': { es: 'Accesibilidad', en: 'Accessibility', it: 'Accessibilità', pt: 'Acessibilidade' },
    'quality.q3_desc': {
      es: 'Contraste correcto, navegación por teclado y lectores de pantalla: tu web usable para todo el mundo.',
      en: 'Proper contrast, keyboard navigation and screen readers: your website usable for everyone.',
      it: 'Contrasto corretto, navigazione da tastiera e screen reader: il tuo sito usabile da tutti.',
      pt: 'Contraste adequado, navegação por teclado e leitores de tela: seu site utilizável por todos.'
    },
    'quality.q4_title': { es: 'Código limpio', en: 'Clean code', it: 'Codice pulito', pt: 'Código limpo' },
    'quality.q4_desc': {
      es: 'Componentes documentados y mantenibles: cualquier equipo técnico puede continuar el proyecto sin dramas.',
      en: 'Documented, maintainable components: any technical team can continue the project without drama.',
      it: 'Componenti documentati e manutenibili: qualsiasi team tecnico può continuare il progetto senza drammi.',
      pt: 'Componentes documentados e manteníveis: qualquer equipe técnica pode continuar o projeto sem dramas.'
    },
    'quality.q5_title': { es: 'Seguridad', en: 'Security', it: 'Sicurezza', pt: 'Segurança' },
    'quality.q5_desc': {
      es: 'HTTPS, protección contra ataques comunes, copias de seguridad y formularios blindados contra spam.',
      en: 'HTTPS, protection against common attacks, backups and spam-proof forms.',
      it: 'HTTPS, protezione dagli attacchi comuni, backup e moduli protetti dallo spam.',
      pt: 'HTTPS, proteção contra ataques comuns, backups e formulários protegidos contra spam.'
    },
    'quality.q6_title': { es: 'Soporte real', en: 'Real support', it: 'Supporto reale', pt: 'Suporte real' },
    'quality.q6_desc': {
      es: 'Hablas con quien construyó tu web, no con un call center. Respuesta en menos de 24 horas laborables.',
      en: 'You talk to the people who built your website, not a call center. Response within 24 business hours.',
      it: 'Parli con chi ha costruito il tuo sito, non con un call center. Risposta entro 24 ore lavorative.',
      pt: 'Você fala com quem construiu seu site, não com um call center. Resposta em menos de 24 horas úteis.'
    },

    /* ---------- Testimonios ---------- */
    'testimonials.eyebrow': { es: 'Clientes', en: 'Clients', it: 'Clienti', pt: 'Clientes' },
    'testimonials.heading': {
      es: 'Lo que dicen quienes ya lanzaron.',
      en: 'What those who already launched say.',
      it: 'Cosa dicono chi ha già lanciato.',
      pt: 'O que dizem quem já lançou.'
    },
    'testimonials.t1_quote': {
      es: '“Nuestro restaurante pasó de no existir en Google a llenar reservas online en tres semanas. La plantilla quedó irreconocible, parece hecha a medida.”',
      en: '“Our restaurant went from not existing on Google to filling online reservations in three weeks. The template became unrecognizable — it looks custom-made.”',
      it: '“Il nostro ristorante è passato dall’non esistere su Google a riempire le prenotazioni online in tre settimane. Il template è diventato irriconoscibile, sembra fatto su misura.”',
      pt: '“Nosso restaurante passou de não existir no Google a lotar reservas online em três semanas. O template ficou irreconhecível, parece feito sob medida.”'
    },
    'testimonials.t1_role': {
      es: 'Restaurante Aurora, Madrid',
      en: 'Aurora Restaurant, Madrid',
      it: 'Ristorante Aurora, Madrid',
      pt: 'Restaurante Aurora, Madri'
    },
    'testimonials.t2_quote': {
      es: '“Pedimos una web a medida con reservas integradas y superó lo que imaginamos. El proceso fue claro de principio a fin.”',
      en: '“We asked for a custom website with integrated booking and it exceeded what we imagined. The process was clear from start to finish.”',
      it: '“Abbiamo chiesto un sito su misura con prenotazioni integrate e ha superato quanto immaginavamo. Il processo è stato chiaro dall’inizio alla fine.”',
      pt: '“Pedimos um site sob medida com reservas integradas e ele superou o que imaginávamos. O processo foi claro do início ao fim.”'
    },
    'testimonials.t2_role': {
      es: 'Estudio de arquitectura, Milán',
      en: 'Architecture studio, Milan',
      it: 'Studio di architettura, Milano',
      pt: 'Estúdio de arquitetura, Milão'
    },
    'testimonials.t3_quote': {
      es: '“Cargaba en un parpadeo y se ve increíble en el móvil. Nuestros clientes nos felicitan por la página más que por el producto.”',
      en: '“It loads in a blink and looks incredible on mobile. Our customers compliment the website more than the product.”',
      it: '“Carica in un battito di ciglia e sembra incredibile sul mobile. I nostri clienti ci fanno i complimenti per il sito più che per il prodotto.”',
      pt: '“Carrega em um piscar de olhos e fica incrível no celular. Nossos clientes elogiam o site mais que o produto.”'
    },
    'testimonials.t3_role': {
      es: 'Marca de cosmética, Bogotá',
      en: 'Cosmetics brand, Bogotá',
      it: 'Marchio di cosmetica, Bogotá',
      pt: 'Marca de cosméticos, Bogotá'
    },

    /* ---------- Precios ---------- */
    'pricing.eyebrow': { es: 'Inversión', en: 'Investment', it: 'Investimento', pt: 'Investimento' },
    'pricing.heading': {
      es: 'Precios claros, sin letra pequeña.',
      en: 'Clear pricing, no fine print.',
      it: 'Prezzi chiari, senza asterischi.',
      pt: 'Preços claros, sem letras miúdas.'
    },
    'pricing.sub': {
      es: 'Pagos únicos por el proyecto y mantenimiento opcional. El presupuesto final se confirma antes de empezar: nunca habrá sorpresas.',
      en: 'One-time project payments and optional maintenance. The final budget is confirmed before we start: there will never be surprises.',
      it: 'Pagamenti unici per il progetto e manutenzione opzionale. Il budget finale viene confermato prima di iniziare: nessuna sorpresa.',
      pt: 'Pagamentos únicos por projeto e manutenção opcional. O orçamento final é confirmado antes de começar: nunca haverá surpresas.'
    },
    'pricing.p1_name': { es: 'Plantilla Pro', en: 'Template Pro', it: 'Template Pro', pt: 'Template Pro' },
    'pricing.from': { es: 'desde', en: 'from', it: 'da', pt: 'a partir de' },
    'pricing.p1_note': {
      es: 'Pago único · entrega en 7–10 días',
      en: 'One-time payment · delivered in 7–10 days',
      it: 'Pagamento unico · consegna in 7–10 giorni',
      pt: 'Pagamento único · entrega em 7–10 dias'
    },
    'pricing.p1_f1': {
      es: 'Todo lo incluido en el camino de plantilla',
      en: 'Everything included in the template path',
      it: 'Tutto ciò che include il percorso template',
      pt: 'Tudo o que está incluído no caminho de template'
    },
    'pricing.p1_f2': {
      es: 'Hasta 6 secciones personalizadas',
      en: 'Up to 6 customized sections',
      it: 'Fino a 6 sezioni personalizzate',
      pt: 'Até 6 seções personalizadas'
    },
    'pricing.p1_f3': {
      es: '1 ronda de revisiones de contenido',
      en: '1 round of content revisions',
      it: '1 round di revisioni dei contenuti',
      pt: '1 rodada de revisões de conteúdo'
    },
    'pricing.p1_f4': {
      es: 'Capacitación para editar tu contenido',
      en: 'Training to edit your own content',
      it: 'Formazione per modificare i tuoi contenuti',
      pt: 'Treinamento para editar seu conteúdo'
    },
    'pricing.p1_cta': {
      es: 'Quiero una plantilla',
      en: 'I want a template',
      it: 'Voglio un template',
      pt: 'Quero um template'
    },
    'pricing.popular': { es: 'El más elegido', en: 'Most chosen', it: 'Il più scelto', pt: 'O mais escolhido' },
    'pricing.p2_name': {
      es: 'Proyecto a medida',
      en: 'Custom project',
      it: 'Progetto su misura',
      pt: 'Projeto sob medida'
    },
    'pricing.p2_note': {
      es: 'Presupuesto cerrado según alcance · 4–8 semanas',
      en: 'Fixed budget based on scope · 4–8 weeks',
      it: 'Budget chiuso in base all’ambito · 4–8 settimane',
      pt: 'Orçamento fechado conforme escopo · 4–8 semanas'
    },
    'pricing.p2_f1': {
      es: 'Estrategia, UX/UI y desarrollo exclusivo',
      en: 'Strategy, UX/UI and exclusive development',
      it: 'Strategia, UX/UI e sviluppo esclusivo',
      pt: 'Estratégia, UX/UI e desenvolvimento exclusivo'
    },
    'pricing.p2_f2': {
      es: 'Animaciones e interacciones a medida',
      en: 'Custom animations and interactions',
      it: 'Animazioni e interazioni su misura',
      pt: 'Animações e interações sob medida'
    },
    'pricing.p2_f3': {
      es: 'Integraciones: pagos, reservas, CRM',
      en: 'Integrations: payments, booking, CRM',
      it: 'Integrazioni: pagamenti, prenotazioni, CRM',
      pt: 'Integrações: pagamentos, reservas, CRM'
    },
    'pricing.p2_f4': {
      es: '3 rondas de revisión incluidas',
      en: '3 rounds of revisions included',
      it: '3 round di revisioni inclusi',
      pt: '3 rodadas de revisão incluídas'
    },
    'pricing.p2_f5': {
      es: '30 días de soporte prioritario post-lanzamiento',
      en: '30 days of priority support after launch',
      it: '30 giorni di supporto prioritario post-lancio',
      pt: '30 dias de suporte prioritário pós-lançamento'
    },
    'pricing.p2_cta': {
      es: 'Solicitar propuesta',
      en: 'Request a proposal',
      it: 'Richiedi una proposta',
      pt: 'Solicitar proposta'
    },
    'pricing.p3_name': { es: 'Mantenimiento', en: 'Maintenance', it: 'Manutenzione', pt: 'Manutenção' },
    'pricing.per_month': { es: '/mes', en: '/month', it: '/mese', pt: '/mês' },
    'pricing.p3_note': {
      es: 'Opcional · cancela cuando quieras',
      en: 'Optional · cancel anytime',
      it: 'Opzionale · cancella quando vuoi',
      pt: 'Opcional · cancele quando quiser'
    },
    'pricing.p3_f1': {
      es: 'Actualizaciones y copias de seguridad',
      en: 'Updates and backups',
      it: 'Aggiornamenti e backup',
      pt: 'Atualizações e backups'
    },
    'pricing.p3_f2': {
      es: 'Cambios menores de contenido',
      en: 'Minor content changes',
      it: 'Modifiche minori ai contenuti',
      pt: 'Alterações menores de conteúdo'
    },
    'pricing.p3_f3': {
      es: 'Monitorización de seguridad y uptime',
      en: 'Security and uptime monitoring',
      it: 'Monitoraggio di sicurezza e uptime',
      pt: 'Monitoramento de segurança e uptime'
    },
    'pricing.p3_f4': {
      es: 'Informe mensual de visitas',
      en: 'Monthly visits report',
      it: 'Report mensile delle visite',
      pt: 'Relatório mensal de visitas'
    },
    'pricing.p3_cta': {
      es: 'Añadir a mi proyecto',
      en: 'Add to my project',
      it: 'Aggiungi al mio progetto',
      pt: 'Adicionar ao meu projeto'
    },

    /* ---------- FAQ ---------- */
    'faq.eyebrow': {
      es: 'Preguntas frecuentes',
      en: 'Frequently asked questions',
      it: 'Domande frequenti',
      pt: 'Perguntas frequentes'
    },
    'faq.heading': { es: 'Resolvemos tus dudas.', en: 'We answer your questions.', it: 'Rispondiamo ai tuoi dubbi.', pt: 'Tiramos suas dúvidas.' },
    'faq.q1': {
      es: '¿Qué incluye exactamente la opción de plantilla?',
      en: 'What exactly does the template option include?',
      it: 'Cosa include esattamente l’opzione template?',
      pt: 'O que a opção de template inclui exatamente?'
    },
    'faq.a1': {
      es: 'Eliges una de nuestras plantillas premium y la adaptamos por completo: tu logo, paleta de colores, tipografías, textos e imágenes. El resultado no se parece a una plantilla genérica: es tu web, construida sobre una base técnica sólida y probada.',
      en: 'You choose one of our premium templates and we fully adapt it: your logo, color palette, typography, copy and images. The result does not look like a generic template: it is your website, built on a solid, proven technical foundation.',
      it: 'Scegli uno dei nostri template premium e lo adattiamo completamente: il tuo logo, palette di colori, tipografie, testi e immagini. Il risultato non sembra un template generico: è il tuo sito, costruito su una base tecnica solida e collaudata.',
      pt: 'Você escolhe um dos nossos templates premium e o adaptamos por completo: seu logo, paleta de cores, tipografias, textos e imagens. O resultado não parece um template genérico: é o seu site, construído sobre uma base técnica sólida e comprovada.'
    },
    'faq.q2': {
      es: '¿Cuánto tarda mi proyecto?',
      en: 'How long will my project take?',
      it: 'Quanto tempo richiede il mio progetto?',
      pt: 'Quanto tempo leva o meu projeto?'
    },
    'faq.a2': {
      es: 'Una web basada en plantilla está lista en 7–10 días una vez tenemos tu contenido. Un proyecto a medida suele tomar entre 4 y 8 semanas según la complejidad y las integraciones.',
      en: 'A template-based website is ready in 7–10 days once we have your content. A custom project usually takes between 4 and 8 weeks depending on complexity and integrations.',
      it: 'Un sito basato su template è pronto in 7–10 giorni una volta ricevuti i contenuti. Un progetto su misura richiede in genere dalle 4 alle 8 settimane a seconda della complessità e delle integrazioni.',
      pt: 'Um site baseado em template fica pronto em 7–10 dias depois de recebermos seu conteúdo. Um projeto sob medida geralmente leva de 4 a 8 semanas, dependendo da complexidade e das integrações.'
    },
    'faq.q3': {
      es: '¿Necesito tener dominio y hosting?',
      en: 'Do I need to have a domain and hosting?',
      it: 'Devo avere già dominio e hosting?',
      pt: 'Preciso ter domínio e hospedagem?'
    },
    'faq.a3': {
      es: 'No es obligatorio. Podemos trabajar con tu dominio y hosting actuales, o gestionarlo todo nosotros: registro del dominio, hosting optimizado, certificado SSL y correo profesional.',
      en: 'It is not required. We can work with your current domain and hosting, or manage everything for you: domain registration, optimized hosting, SSL certificate and professional email.',
      it: 'Non è obbligatorio. Possiamo lavorare con il tuo dominio e hosting attuali, oppure gestire tutto noi: registrazione del dominio, hosting ottimizzato, certificato SSL e email professionale.',
      pt: 'Não é obrigatório. Podemos trabalhar com seu domínio e hospedagem atuais, ou gerenciar tudo para você: registro do domínio, hospedagem otimizada, certificado SSL e e-mail profissional.'
    },
    'faq.q4': {
      es: '¿Podré actualizar el contenido yo mismo?',
      en: 'Will I be able to update the content myself?',
      it: 'Potrò aggiornare i contenuti da solo?',
      pt: 'Poderei atualizar o conteúdo sozinho?'
    },
    'faq.a4': {
      es: 'Sí. Entregamos las webs con un panel de edición sencillo y una sesión de capacitación para que puedas cambiar textos, imágenes y publicar novedades sin depender de nadie.',
      en: 'Yes. We deliver websites with a simple editing panel and a training session so you can change text, images and publish updates without depending on anyone.',
      it: 'Sì. Consegniamo i siti con un pannello di modifica semplice e una sessione di formazione per cambiare testi, immagini e pubblicare novità senza dipendere da nessuno.',
      pt: 'Sim. Entregamos os sites com um painel de edição simples e uma sessão de treinamento para que você possa alterar textos, imagens e publicar novidades sem depender de ninguém.'
    },
    'faq.q5': {
      es: '¿Qué pasa si ya tengo una web?',
      en: 'What if I already have a website?',
      it: 'Cosa succede se ho già un sito?',
      pt: 'E se eu já tiver um site?'
    },
    'faq.a5': {
      es: 'La auditamos gratis y te decimos con honestidad si conviene rediseñarla o reconstruirla. Migramos tu contenido, redirigimos las URLs para no perder posicionamiento y el cambio se hace sin que tu negocio se detenga.',
      en: 'We audit it for free and honestly tell you whether redesigning or rebuilding makes sense. We migrate your content, redirect URLs to preserve rankings, and the switch happens without your business stopping.',
      it: 'La revisioniamo gratis e ti diciamo con onestà se conviene ridisegnarla o ricostruirla. Migriamo i tuoi contenuti, reindirizziamo gli URL per non perdere il posizionamento e il cambio avviene senza fermare il tuo business.',
      pt: 'Fazemos uma auditoria gratuita e dizemos com honestidade se vale a pena redesenhar ou reconstruir. Migramos seu conteúdo, redirecionamos as URLs para não perder posicionamento e a troca acontece sem parar seu negócio.'
    },
    'faq.q6': {
      es: '¿Cómo es el proceso de pago?',
      en: 'How does payment work?',
      it: 'Come funziona il pagamento?',
      pt: 'Como funciona o pagamento?'
    },
    'faq.a6': {
      es: '50% al iniciar y 50% contra entrega, con contrato que define alcance, plazos y entregables. Aceptamos transferencia, tarjeta y PayPal. El precio cerrado no cambia: lo acordado es lo que pagas.',
      en: '50% to start and 50% on delivery, with a contract defining scope, timelines and deliverables. We accept bank transfer, card and PayPal. The fixed price does not change: what is agreed is what you pay.',
      it: '50% all’inizio e 50% alla consegna, con contratto che definisce ambito, tempistiche e deliverable. Accettiamo bonifico, carta e PayPal. Il prezzo chiuso non cambia: quanto concordato è quanto paghi.',
      pt: '50% para começar e 50% na entrega, com contrato que define escopo, prazos e entregáveis. Aceitamos transferência, cartão e PayPal. O preço fechado não muda: o que for combinado é o que você paga.'
    },

    /* ---------- Contacto ---------- */
    'contact.eyebrow': { es: 'Contacto', en: 'Contact', it: 'Contatti', pt: 'Contato' },
    'contact.heading': {
      es: 'Hablemos de tu proyecto.',
      en: 'Let’s talk about your project.',
      it: 'Parliamo del tuo progetto.',
      pt: 'Vamos falar sobre o seu projeto.'
    },
    'contact.sub': {
      es: 'Cuéntanos qué necesitas y te respondemos en menos de 24 horas laborables con una propuesta clara y sin compromiso.',
      en: 'Tell us what you need and we will reply within 24 business hours with a clear, no-obligation proposal.',
      it: 'Raccontaci cosa ti serve e ti risponderemo entro 24 ore lavorative con una proposta chiara e senza impegno.',
      pt: 'Conte-nos o que você precisa e responderemos em menos de 24 horas úteis com uma proposta clara e sem compromisso.'
    },
    'contact.point_time': {
      es: 'Respuesta en menos de 24 h laborables',
      en: 'Reply within 24 business hours',
      it: 'Risposta entro 24 ore lavorative',
      pt: 'Resposta em menos de 24 h úteis'
    },
    'contact.point_lang': {
      es: 'Atención en español, inglés, italiano y portugués',
      en: 'Service in Spanish, English, Italian and Portuguese',
      it: 'Assistenza in spagnolo, inglese, italiano e portoghese',
      pt: 'Atendimento em espanhol, inglês, italiano e português'
    },
    'contact.logo_alt': {
      es: 'Logotipo de Post Human Technologies',
      en: 'Post Human Technologies logo',
      it: 'Logo di Post Human Technologies',
      pt: 'Logotipo da Post Human Technologies'
    },

    /* ---------- Formulario ---------- */
    'form.name': { es: 'Nombre', en: 'Name', it: 'Nome', pt: 'Nome' },
    'form.email': { es: 'Correo electrónico', en: 'Email', it: 'Email', pt: 'E-mail' },
    'form.service': { es: 'Tipo de proyecto', en: 'Project type', it: 'Tipo di progetto', pt: 'Tipo de projeto' },
    'form.service_ph': { es: 'Selecciona una opción', en: 'Select an option', it: 'Seleziona un’opzione', pt: 'Selecione uma opção' },
    'form.service_template': { es: 'Web con plantilla', en: 'Template website', it: 'Sito con template', pt: 'Site com template' },
    'form.service_custom': { es: 'Desarrollo a medida', en: 'Custom development', it: 'Sviluppo su misura', pt: 'Desenvolvimento sob medida' },
    'form.service_unknown': { es: 'Todavía no lo sé', en: 'Not sure yet', it: 'Non lo so ancora', pt: 'Ainda não sei' },
    'form.budget': { es: 'Presupuesto aproximado', en: 'Approximate budget', it: 'Budget approssimativo', pt: 'Orçamento aproximado' },
    'form.budget_any': { es: 'Prefiero no decirlo', en: 'I prefer not to say', it: 'Preferisco non dirlo', pt: 'Prefiro não dizer' },
    'form.budget_1': { es: 'Menos de $1.000', en: 'Under $1,000', it: 'Meno di $1.000', pt: 'Menos de $1.000' },
    'form.budget_2': { es: '$1.000 – $3.000', en: '$1,000 – $3,000', it: '$1.000 – $3.000', pt: '$1.000 – $3.000' },
    'form.budget_3': { es: 'Más de $3.000', en: 'Over $3,000', it: 'Più di $3.000', pt: 'Mais de $3.000' },
    'form.message': { es: 'Cuéntanos tu proyecto', en: 'Tell us about your project', it: 'Raccontaci il tuo progetto', pt: 'Conte-nos sobre o seu projeto' },
    'form.template_prefix': {
      es: 'Me interesa la plantilla',
      en: 'I am interested in the',
      it: 'Mi interessa il template',
      pt: 'Tenho interesse no template'
    },
    'form.submit': { es: 'Enviar solicitud', en: 'Send request', it: 'Invia richiesta', pt: 'Enviar solicitação' },
    'form.note': {
      es: 'Al enviar aceptas ser contactado sobre tu proyecto. Nada de spam.',
      en: 'By submitting you agree to be contacted about your project. No spam.',
      it: 'Inviando accetti di essere contattato riguardo al tuo progetto. Niente spam.',
      pt: 'Ao enviar, você aceita ser contatado sobre o seu projeto. Nada de spam.'
    },
    'form.error_required': {
      es: 'Este campo es obligatorio.',
      en: 'This field is required.',
      it: 'Questo campo è obbligatorio.',
      pt: 'Este campo é obrigatório.'
    },
    'form.error_email': {
      es: 'Ingresa un correo electrónico válido.',
      en: 'Enter a valid email address.',
      it: 'Inserisci un indirizzo email valido.',
      pt: 'Insira um e-mail válido.'
    },
    'form.success_title': {
      es: '¡Solicitud enviada!',
      en: 'Request sent!',
      it: 'Richiesta inviata!',
      pt: 'Solicitação enviada!'
    },
    'form.success_text': {
      es: 'Gracias por escribirnos. Te contactaremos en menos de 24 horas laborables con los siguientes pasos.',
      en: 'Thanks for reaching out. We will contact you within 24 business hours with the next steps.',
      it: 'Grazie per averci scritto. Ti contatteremo entro 24 ore lavorative con i prossimi passi.',
      pt: 'Obrigado por nos escrever. Entraremos em contato em menos de 24 horas úteis com os próximos passos.'
    },
    'form.success_again': {
      es: 'Enviar otra solicitud',
      en: 'Send another request',
      it: 'Invia un’altra richiesta',
      pt: 'Enviar outra solicitação'
    },

    /* ---------- Footer ---------- */
    'footer.tagline': {
      es: 'Desarrollo web de alto nivel para negocios que quieren destacar.',
      en: 'High-end web development for businesses that want to stand out.',
      it: 'Sviluppo web di alto livello per aziende che vogliono distinguersi.',
      pt: 'Desenvolvimento web de alto nível para negócios que querem se destacar.'
    },
    'footer.nav': { es: 'Navegación del pie', en: 'Footer navigation', it: 'Navigazione del footer', pt: 'Navegação do rodapé' },
    'footer.nav_title': { es: 'Navegación', en: 'Navigation', it: 'Navigazione', pt: 'Navegação' },
    'footer.contact_title': { es: 'Contacto', en: 'Contact', it: 'Contatti', pt: 'Contato' },
    'footer.hours': { es: 'Lun – Vie · 9:00 – 18:00 (CET)', en: 'Mon – Fri · 9:00 – 18:00 (CET)', it: 'Lun – Ven · 9:00 – 18:00 (CET)', pt: 'Seg – Sex · 9:00 – 18:00 (CET)' },
    'footer.rights': {
      es: 'Todos los derechos reservados.',
      en: 'All rights reserved.',
      it: 'Tutti i diritti riservati.',
      pt: 'Todos os direitos reservados.'
    },
    'footer.made': {
      es: 'Hecho con obsesión por el detalle.',
      en: 'Made with an obsession for detail.',
      it: 'Fatto con ossessione per il dettaglio.',
      pt: 'Feito com obsessão pelo detalhe.'
    },
    'footer.logo_alt': {
      es: 'Logotipo de Post Human Technologies',
      en: 'Post Human Technologies logo',
      it: 'Logo di Post Human Technologies',
      pt: 'Logotipo da Post Human Technologies'
    }
  };

  var current = 'es';
  try {
    var saved = window.localStorage.getItem('posthuman-lang');
    if (saved && LANGS.indexOf(saved) !== -1) current = saved;
  } catch (e) { /* file:// u otros modos sin storage: seguimos con ES */ }

  function t(key) {
    var entry = DICT[key];
    if (!entry) {
      console.warn('[PostHumanI18n] Clave no encontrada: "' + key + '"');
      return key;
    }
    var s = entry[current];
    if (typeof s !== 'string') {
      console.warn('[PostHumanI18n] Sin traducción "' + current + '" para: "' + key + '" — usando ES');
      s = entry.es;
    }
    return s;
  }

  function applyAttrs(el) {
    el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
      var parts = pair.split(':');
      if (parts.length !== 2) return;
      var attr = parts[0].trim();
      var key = parts[1].trim();
      if (attr) el.setAttribute(attr, t(key));
    });
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(applyAttrs);
    document.documentElement.lang = current;
    document.title = t('meta.title');
    document.querySelectorAll('.lang-btn[data-lang]').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === current;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) {
      console.warn('[PostHumanI18n] Idioma no soportado: "' + lang + '"');
      return;
    }
    current = lang;
    try {
      window.localStorage.setItem('posthuman-lang', lang);
    } catch (e) { /* sin storage disponible */ }
    apply();
    document.dispatchEvent(new CustomEvent('posthuman:langchange', { detail: { lang: lang } }));
  }

  window.PostHumanI18n = {
    t: t,
    setLang: setLang,
    getLang: function () { return current; }
  };

  apply();
})();

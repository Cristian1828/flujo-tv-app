export const site = {
  domain: 'app.flujooficial.com',
  canonical: 'https://app.flujooficial.com',
  brand: {
    name: 'Flujo TV',
    premiumLabel: 'Premium',
    tagline: 'Entretenimiento digital premium para el mundo hispanohablante',
    description: 'La plataforma oficial de gestión multimedia. Disfruta del mejor contenido digital en Full HD y 4K. Incluye guías de instalación paso a paso y soporte técnico para la comunidad latina.'
  },
  // SEO optimizado para Google Ads SEM y posicionamiento mundial
  seo: {
    title: 'Flujo TV Oficial 2026 | Descarga, Instalación y Soporte Premium',
    description: 'Descarga e instala Flujo TV Premium fácilmente. Encuentra tutoriales paso a paso para Smart TV, Google TV, Fire Stick y Android. Plataforma estable Full HD/4K. Activación inmediata y Soporte 24/7.',
    keywords: [
      // Marca (alta prioridad SEM)
      'Flujo TV', 'Flujo TV Premium', 'Flujo TV Oficial', 'Flujo TV 2026',
      'Flujo TV app', 'comprar Flujo TV', 'Flujo TV precio', 'Flujo TV planes',

      // 🚀 NUEVO: Tutoriales, Instalación y Descarga APK
      'como instalar Flujo TV', 'tutorial Flujo TV', 'descargar Flujo TV',
      'guia de instalacion Flujo TV', 'instalar Flujo TV en Smart TV',
      'Flujo TV Google TV', 'instalar Flujo TV Fire Stick',
      'codigo Downloader Flujo TV', 'Flujo TV apk', 'actualizar Flujo TV',
      'descargar apk Flujo TV', 'Flujo TV apk Android', 'Flujo TV apk movil',
      'descargar Flujo TV Android', 'instalar Flujo TV celular',
      'Flujo TV instalacion paso a paso', 'manual instalacion Flujo TV',
      'Flujo TV Chromecast', 'instalar Flujo TV Google TV',
      'instalar Flujo TV Android TV', 'guia oficial Flujo TV 2026',

      // Producto principal (Software/App)
      'streaming latino', 'plataforma multimedia', 'app de entretenimiento',
      'aplicacion tv latino', 'reproductor multimedia tv',
      'mejor streaming latino 2026', 'plataforma streaming estable',

      // Dispositivos (whitelist)
      'Fire Stick app latina', 'TV Box reproductor',
      'Google TV streaming latino', 'Xiaomi Stick app',
      'Android TV streaming', 'app streaming Android',

      // Por región
      'streaming latino USA', 'entretenimiento latino Estados Unidos',
      'app latina en Europa', 'streaming latino Canada',
      'plataforma latina Latinoamerica',

      // Calidad y tecnología
      'streaming 4K', 'transmision Full HD', 'Anti-Freeze streaming',
      'streaming sin cortes', '3 pantallas simultaneas', 'servidor premium',

      // Comercial (conversión SEM)
      'activacion inmediata', 'sin contratos', 'soporte garantizado',
      'plan mensual streaming', 'precio servicio premium'
    ],
    ogImage: '/logo_flujo.webp',
    twitterHandle: '@flujotv'
  },
  supportEmail: 'soporte@flujooficial.com',
  whatsappNumber: '51914326729',
  download: {
    downloaderCode: '481352',
    mobileApkHref: 'https://github.com/Cristian1828/apk-flujoTV/releases/download/v1.0/flujo-premium.apk'
  },
  pricing: {
    currencyCode: 'USD',
    plans: [
      {
        id: '1m',
        name: '1 mes',
        price: 9,
        label: 'Para probar sin compromiso',
        features: [
          'Acceso total a la plataforma premium.',
          'Hasta 3 pantallas simultáneas.',
          'Calidad garantizada FHD/4K.',
          'Soporte técnico 24/7.'
        ]
      },
      {
        id: '3m',
        name: '3 meses',
        price: 27,
        label: 'Recomendado',
        highlight: true,
        features: [
          'Acceso total a la plataforma premium.',
          'Hasta 3 pantallas simultáneas.',
          'Calidad garantizada FHD/4K.',
          'Soporte técnico 24/7.'
        ]
      },
      {
        id: '6m',
        name: '6 meses',
        price: 49,
        label: 'Incluye 1 mes extra',
        features: [
          'Acceso total a la plataforma premium.',
          'Hasta 3 pantallas simultáneas.',
          'Calidad garantizada FHD/4K.',
          'Soporte técnico 24/7.'
        ]
      },
      {
        id: '12m',
        name: '12 meses',
        price: 95,
        label: 'Incluye 2 meses extra',
        features: [
          'Acceso total a la plataforma premium.',
          'Hasta 3 pantallas simultáneas.',
          'Calidad garantizada FHD/4K.',
          'Soporte técnico 24/7.'
        ]
      }
    ]
  }
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
type SiteConfig = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  logo?: string;
  ogImage: string;
  locale: string;
  twitter: {
    site: string;
  };
};

type Link = {
  text: string;
  href: string;
};

type Action = {
  href: string;
  text: string;
  icon?: string;
};

type FooterLinkGroup = {
  title: string;
  links: Link[];
};

type SocialLink = {
  ariaLabel: string;
  icon: string;
  href: string;
};

type NavigationConfig = {
  header: {
    links: Link[];
    actions: Action[];
  };
  footer: {
    links: FooterLinkGroup[];
    secondaryLinks: Link[];
    socialLinks: SocialLink[];
    footNote: string;
  };
};

export const SITE = (): SiteConfig => {
  return {
    title: 'AutoIPC - Automatiza tus actualizaciones de renta en segundos',
    description:
      'AutoIPC es la plataforma digital que automatiza las actualizaciones de renta basadas en IPC o IRAV y los contratos de arrendamiento de manera sencilla.',
    author: 'Daniel García',
    siteUrl: 'https://autoipc.es/',
    ogImage: '/src/assets/images/og-image.webp', // Needs to be an absolute path /src/...
    locale: 'es_ES',
    twitter: {
      site: '@autoipc',
    },
  };
};

export const NAVIGATION = (): NavigationConfig => ({
  header: {
    links: [],
    actions: [
      {
        href: `/#hero`,
        text: 'Crea tu actualización de renta',
        // icon: 'tabler:rocket',
      },
    ],
  },

  footer: {
    links: [
      {
        title: 'Soporte',
        links: [
          { text: 'Contacto', href: `/contact/` },
          { text: 'Blog', href: `/blog/` },
          { text: 'Guías', href: `/category/guias/` },
        ],
      },
      {
        title: 'AutoIPC',
        links: [
          { text: 'Cómo funciona AutoIPC', href: `/#features` },
          { text: 'Sobre nosotros', href: `/#about` },
          { text: 'Actualizaciones', href: `/changelog/` },
        ],
      },
      {
        title: 'Universo GearShift',
        links: [
          { text: 'GearShift', href: 'https://gearshift.es/' },
          { text: 'postify AI', href: 'https://postifyai.com/' },
          { text: 'SynCal', href: 'https://syncal.app/' },
          { text: 'Estavia', href: 'https://estavia.ai/' },
          { text: 'AutoIPC', href: 'https://autoipc.es/' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Términos y condiciones', href: `/terms/` },
      { text: 'Política de privacidad', href: `/privacy/` },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/autoipc' },
      // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/autoipc' },
      // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/autoipc' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: `/rss.xml` },
    ],
    footNote: `
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2025 <a href="/" class="hover:underline"
          >AutoIPC</a
        >
      </span>
        `,
  },
});

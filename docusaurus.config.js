/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hydro-SDK',
  tagline: 'Author Flutter experiences in TypeScript. No native bridge, no V8. Just Dart. From runtime to virtual machine.',
  url: 'https://hydro-sdk.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hydro-sdk', // Usually your GitHub org/user name.
  projectName: 'hydro-sdk.io', // Usually your repo name.
  themeConfig: {
    colorMode:{
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: 'Hydro-SDK',
      logo: {
        alt: 'Hydro-SDK Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          docId: 'intro',
          to: "/docs/intro",
          position: 'left',
          label: 'Getting Started',
        },
        {
          docId: 'codepush',
          to: "/docs/codepush",
          position: 'left',
          label: 'Codepush',
        },
        {
          to: "https://registry.hydro-sdk.io",
          position: 'left',
          label: 'Registry',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/hydro-sdk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Codepush',
              to: '/docs/codepush',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/hydro-sdk/hydro-sdk/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/DuM2vkUSNr',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hydro-sdk',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hydro-SDK. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hydro-sdk/hydro-sdk.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/hydro-sdk/hydro-sdk.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

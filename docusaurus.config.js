/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hydro-SDK',
  tagline: 'Author Flutter experiences in Typescript. No native bridge, no V8. Just Dart. From runtime to virtual machine.',
  url: 'https://hydro-sdk.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hydro-sdk', // Usually your GitHub org/user name.
  projectName: 'hydro-sdk.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Hydro-SDK',
      logo: {
        alt: 'Hydro-SDK Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
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
              label: 'Tutorial',
              to: '/docs/intro',
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

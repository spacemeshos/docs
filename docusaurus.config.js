// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spacemesh documentation',
  tagline: 'All the docs are belong to you',
  url: 'https://spacemeshos.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'spacemeshos', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation Demo',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
                    type: "docSidebar",
                    position: "left",
                    sidebarId: "learn",
                    label: "Learn",
          },

        {
                  type: "docSidebar",
                  position: "left",
                  sidebarId: "protocol",
                  label: "Deep Dive",
        },
        {
                  type: "docSidebar",
                  position: "left",
                  sidebarId: "start",
                  label: "Get Started",
        },
        {
                  type: "docSidebar",
                  position: "left",
                  sidebarId: "ecosystem",
                  label: "Participate",
        },
        {
                 to: 'roadmap',
                 label: 'Roadmap',
                 position: 'left'
             },
         {
                  to: 'devzone',
                  label: 'Dev Zone',
                  position: 'left'
                  }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Community Website',
                href: 'https://spacemesh.io',
              },
              {
                label: 'Discord',
                href: 'https://chat.spacemesh.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/teamspacemesh',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://spacemesh.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/spacemeshos/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

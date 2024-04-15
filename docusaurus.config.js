// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spacemesh Documentation',
  tagline: 'All the docs are belong to you',
  url: 'https://docs.spacemesh.io',
  baseUrl: '/',
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
       sitemap: {
         changefreq: 'weekly',
         priority: 0.5,
         ignorePatterns: ['/tags/**'],
         filename: 'sitemap.xml',
       },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          admonitions: {
            tag: ':::',
            keywords: ['note', 'tip', 'info', 'caution', 'danger'],
          },
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'OGGMN1SAN3',
        apiKey: '7cf0a65815dd21a51b77d6d52b9b5e0f',
        indexName: 'spacemesh_docs',

        // Optional: see doc section bellow
        contextualSearch: false,

        // Optional: Algolia search parameters
        //searchParameters: {},
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
                    type: "docSidebar",
                    position: "left",
                    sidebarId: "learn",
                    label: "Learn About Spacemesh",
          },
          {
                    type: "docSidebar",
                    position: "left",
                    sidebarId: "start",
                    label: "Hands-On Guides",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Website',
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
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/spacemeshos/',
              },
              {
                label: 'FAQ',
                href: 'https://spacemesh.io/resources',
              },
            ],
          },
          {
            title: 'Network',
            items: [
              {
                label: 'Dashboard',
                to: 'https://dash.spacemesh.io',
              },
              {
                label: 'Explorer',
                href: 'https://explorer.spacemesh.io',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spacemesh.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

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
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
       sitemap: {
         changefreq: 'always',
         priority: 0.5,
         ignorePatterns: ['/tags/**'],
         filename: 'sitemap.xml',
       },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/spacemeshos/docs/edit/main/',
          admonitions: {
            tag: ':::',
            keywords: ['note', 'tip', 'info', 'caution', 'danger'],
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-2CL6HG3B96',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    [
        'docusaurus-pushfeedback',{
            project: 'nzs6xodw4b'
        }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        //metatag for hasan@spacemesh.io Google Search Console verification
        {name: 'google-site-verification', content: 'X71PuqeyvYyDQE1_3384Aml425A-ZELYBf7-ZfFRUoY'}
      ],
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
      tableOfContents: {
     minHeadingLevel: 2,
     maxHeadingLevel: 5,
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
                    label: "Explainers",
          },
          {
                    type: "docSidebar",
                    position: "left",
                    sidebarId: "start",
                    label: "Guides",
          },
          {
                    type: "docSidebar",
                    position: "left",
                    sidebarId: "api",
                    label: "API",
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

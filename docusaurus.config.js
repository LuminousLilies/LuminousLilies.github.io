module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://LuminousLilies.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'LuminousLilies',
  projectName: 'LuminousLilies.github.io',
  themeConfig: {
    navbar: {
      title: 'LuminousLilies',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/breakfast/mochiko-pancakes',
          activeBasePath: 'recipes',
          label: 'Recipes',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/LuminousLilies',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Recipes',
          items: [
            {
              label: 'Breakfast',
              to: 'docs/breakfast/mochiko-pancakes',
            },
          ],
        },
        {
          title: 'About Me',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/LuminousLily',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/LuminousLilies/',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020 LuminousLily, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'breakfast/mochiko-pancakes',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/LuminousLilies/LuminousLilies.github.io',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/LuminousLilies/LuminousLilies.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

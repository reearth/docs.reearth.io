const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Re:Earth Docs",
    tagline: "Dinosaurs are cool",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebarsUserManual.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    plugins: [
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "userManual",
          path: "userManual",
          routeBasePath: "userManual",
          sidebarPath: require.resolve("./sidebarsUserManual.js"),
        },
      ],
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "developerGuide",
          path: "developerGuide",
          routeBasePath: "developerGuide",
          sidebarPath: require.resolve("./sidebarsDeveloperGuide.js"),
        },
      ],
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "tutorial",
          path: "tutorial",
          routeBasePath: "tutorial",
          sidebarPath: require.resolve("./sidebarsTutorial.js"),
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Re:Earth Docs",
          logo: {
            alt: "My Site Logo",
            src: "img/logo.svg",
          },
          items: [
            // {
            //   type: 'doc',
            //   docId: 'intro',
            //   position: 'left',
            //   label: 'User manual',
            // },
            {
              to: "/userManual/getting-started/why-reearth", // ./docs-api/Intro.md
              label: "User manual",
              position: "left",
              activeBaseRegex: `/userManual/`,
            },
            {
              to: "/developerGuide/introduction/about", // ./docs-api/Intro.md
              label: "Developer guide",
              position: "left",
              activeBaseRegex: `/developerGuide/`,
            },
            {
              to: "/tutorial/index", // ./docs-api/Intro.md
              label: "Tutorial",
              position: "left",
              activeBaseRegex: `/tutorial/`,
            },
            { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://github.com/facebook/docusaurus",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
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
  }
);

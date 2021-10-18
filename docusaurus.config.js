const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Re:Earth Docs",
    tagline: "a quick guide let you know more about Re:Earth",
    url: "https://docs.reearth.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Re:Earth", // Usually your GitHub org/user name.
    projectName: "document website for Re:Earth", // Usually your repo name.

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

    i18n: {
      defaultLocale: "en",
      locales: ["en", "ja"],
    },

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
            {
              type: "localeDropdown",
              position: "right",
            },
            {
              href: "https://github.com/reearth/docs.reearth.io",
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
                  label: "User manual",
                  to: "/userManual/getting-started/why-reearth",
                },
                {
                  label: "Developer guide",
                  to: "/developerGuide/introduction/about",
                },
                {
                  label: "Tutorials",
                  to: "/tutorial/index",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Github",
                  href: "https://github.com/reearth/reearth",
                },
                {
                  label: "Discord",
                  href: "https://discord.gg/XJhYkQQDAu",
                },
                {
                  label: "Code of conduct",
                  href: "https://github.com/reearth/reearth/blob/main/CODE_OF_CONDUCT.md",
                },
                {
                  label: "Discussions",
                  href: "https://github.com/reearth/reearth/discussions",
                },
                {
                  label: "Roadmaps",
                  href: "https://github.com/reearth/reearth/projects/1",
                },
              ],
            },
            {
              title: "Company",
              items: [
                {
                  label: "Website",
                  href: "https://eukarya.io/",
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/EukaryaInc",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/eukaryaofficial",
                },
              ],
            },
          ],
          logo: {
            alt: "Re:Earth Logo",
            src: "img/logo_footer.svg",
          },
          copyright: `© ${new Date().getFullYear()} Re:Earth contributors. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);

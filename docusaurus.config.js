const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Re:Earth documentation",
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
          },
          blog: {
            showReadingTime: false,
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
          id: "user-manual",
          path: "user-manual",
          routeBasePath: "user-manual",
          sidebarPath: require.resolve("./sidebarsUserManual.js"),
        },
      ],
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "developer-guide",
          path: "developer-guide",
          routeBasePath: "developer-guide",
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
        image: "img/ogp.png",
        navbar: {
          title: "Re:Earth Docs",
          logo: {
            alt: "My Site Logo",
            src: "img/logo.svg",
          },
          items: [
            {
              to: "https://docs2.reearth.io/getting-started",
              label: "Getting started",
              position: "left",
              activeBaseRegex: `/userManual/`,
            },
            {
              to: "/user-manual",
              label: "Reference",
              position: "left",
              activeBaseRegex: `/userManual/`,
            },
            {
              to: "/developer-guide/intro/about",
              label: "Developer guide",
              position: "left",
              activeBaseRegex: `/developerGuide/`,
            },
            {
              to: "/tutorial",
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
                  label: "Getting started",
                  to: "https://docs2.reearth.io/getting-started",
                },
                {
                  label: "Reference",
                  to: "/user-manual",
                },
                {
                  label: "Developer guide",
                  to: "/developer-guide/intro/about",
                },
                {
                  label: "Tutorials",
                  to: "/tutorial",
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


import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/developerGuide/tags',
    component: ComponentCreator('/developerGuide/tags','5f7'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/tutorial/tags',
    component: ComponentCreator('/tutorial/tags','078'),
    exact: true
  },
  {
    path: '/userManual/tags',
    component: ComponentCreator('/userManual/tags','f11'),
    exact: true
  },
  {
    path: '/developerGuide',
    component: ComponentCreator('/developerGuide','60e'),
    routes: [
      {
        path: '/developerGuide/back-end-guide/back-end-architecture',
        component: ComponentCreator('/developerGuide/back-end-guide/back-end-architecture','82e'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/environment-variables',
        component: ComponentCreator('/developerGuide/back-end-guide/environment-variables','341'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/getting-started',
        component: ComponentCreator('/developerGuide/back-end-guide/getting-started','9fa'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/how-does-it-work/authentication',
        component: ComponentCreator('/developerGuide/back-end-guide/how-does-it-work/authentication','536'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/how-does-it-work/dataset-linking',
        component: ComponentCreator('/developerGuide/back-end-guide/how-does-it-work/dataset-linking','ad2'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/how-does-it-work/property-merging',
        component: ComponentCreator('/developerGuide/back-end-guide/how-does-it-work/property-merging','41a'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/how-does-it-work/property-migration',
        component: ComponentCreator('/developerGuide/back-end-guide/how-does-it-work/property-migration','fc5'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/how-does-it-work/scene-building',
        component: ComponentCreator('/developerGuide/back-end-guide/how-does-it-work/scene-building','1dc'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/how-to-develop-a-new-feature',
        component: ComponentCreator('/developerGuide/back-end-guide/how-to-develop-a-new-feature','d5d'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/back-end-guide/what-do-github-workflows-do',
        component: ComponentCreator('/developerGuide/back-end-guide/what-do-github-workflows-do','38d'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/common-guide/domain-models',
        component: ComponentCreator('/developerGuide/common-guide/domain-models','310'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/common-guide/whole-system-architecture-and-stack',
        component: ComponentCreator('/developerGuide/common-guide/whole-system-architecture-and-stack','b62'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/contribution-guide',
        component: ComponentCreator('/developerGuide/contribution-guide','6f7'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/getting-started',
        component: ComponentCreator('/developerGuide/front-end-guide/getting-started','4bc'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/how-to-add-i18n-translation',
        component: ComponentCreator('/developerGuide/front-end-guide/how-to-add-i18n-translation','c6e'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/how-to-load-config-file',
        component: ComponentCreator('/developerGuide/front-end-guide/how-to-load-config-file','0a9'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/how-to-run-e2e-testing',
        component: ComponentCreator('/developerGuide/front-end-guide/how-to-run-e2e-testing','4a1'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/how-to-use-the-graphql-api',
        component: ComponentCreator('/developerGuide/front-end-guide/how-to-use-the-graphql-api','871'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/how-to-use-theme',
        component: ComponentCreator('/developerGuide/front-end-guide/how-to-use-theme','0c8'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/how-users-are-authenticated',
        component: ComponentCreator('/developerGuide/front-end-guide/how-users-are-authenticated','c57'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/project-and-component-architecture',
        component: ComponentCreator('/developerGuide/front-end-guide/project-and-component-architecture','0d3'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/front-end-guide/what-do-github-workflows-do',
        component: ComponentCreator('/developerGuide/front-end-guide/what-do-github-workflows-do','09d'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/introduction/about',
        component: ComponentCreator('/developerGuide/introduction/about','335'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/introduction/project-goal',
        component: ComponentCreator('/developerGuide/introduction/project-goal','fbf'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/introduction/setup/how-to-set-up-auth0',
        component: ComponentCreator('/developerGuide/introduction/setup/how-to-set-up-auth0','935'),
        exact: true,
        'sidebar': "userManualSidebar"
      },
      {
        path: '/developerGuide/introduction/setup/set-up-reearth-in-your-environment',
        component: ComponentCreator('/developerGuide/introduction/setup/set-up-reearth-in-your-environment','306'),
        exact: true,
        'sidebar': "userManualSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','901'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','0c0'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/index',
        component: ComponentCreator('/docs/tutorial/index','363'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/congratulations','1b7'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-blog-post','679'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-document','449'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-page','6fb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/deploy-your-site','263'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial/tutorial-basics/markdown-features','95e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial/tutorial-extras/manage-docs-versions','ff4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tutorial/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial/tutorial-extras/translate-your-site','422'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/intro',
        component: ComponentCreator('/docs/userManual/intro','ca3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/userManual/tutorial-basics/congratulations','c2a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/userManual/tutorial-basics/create-a-blog-post','1f2'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/userManual/tutorial-basics/create-a-document','437'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/userManual/tutorial-basics/create-a-page','7c8'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/userManual/tutorial-basics/deploy-your-site','8f3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/userManual/tutorial-basics/markdown-features','fd5'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/userManual/tutorial-extras/manage-docs-versions','d67'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/userManual/tutorial-extras/translate-your-site','62f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/userManual/user-manual/intro',
        component: ComponentCreator('/docs/userManual/user-manual/intro','439'),
        exact: true,
        'sidebar': "mySidebar"
      }
    ]
  },
  {
    path: '/tutorial',
    component: ComponentCreator('/tutorial','930'),
    routes: [
      {
        path: '/tutorial/index',
        component: ComponentCreator('/tutorial/index','1c2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/userManual',
    component: ComponentCreator('/userManual','3b8'),
    routes: [
      {
        path: '/userManual/dataset/ideas-of-dataset',
        component: ComponentCreator('/userManual/dataset/ideas-of-dataset','15c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/getting-started/about-this-manual',
        component: ComponentCreator('/userManual/getting-started/about-this-manual','012'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/getting-started/environment-setting/browser-setup',
        component: ComponentCreator('/userManual/getting-started/environment-setting/browser-setup','43c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/getting-started/environment-setting/color-theme-switch',
        component: ComponentCreator('/userManual/getting-started/environment-setting/color-theme-switch','973'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/getting-started/environment-setting/language-switch',
        component: ComponentCreator('/userManual/getting-started/environment-setting/language-switch','1a5'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/getting-started/why-reearth',
        component: ComponentCreator('/userManual/getting-started/why-reearth','877'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/infobox/ideas-of-infobox',
        component: ComponentCreator('/userManual/infobox/ideas-of-infobox','2eb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/plugin/ideas-of-plugin-architecture',
        component: ComponentCreator('/userManual/plugin/ideas-of-plugin-architecture','397'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/primitive-tool-and-layers/ideas-of-primitive-tool',
        component: ComponentCreator('/userManual/primitive-tool-and-layers/ideas-of-primitive-tool','1c4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/project-and-workspace/ideas-of-project',
        component: ComponentCreator('/userManual/project-and-workspace/ideas-of-project','3d2'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/project-and-workspace/ideas-of-workspace',
        component: ComponentCreator('/userManual/project-and-workspace/ideas-of-workspace','2a4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/project-and-workspace/manage-projects/create-delete-and-archive',
        component: ComponentCreator('/userManual/project-and-workspace/manage-projects/create-delete-and-archive','5c1'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/project-and-workspace/manage-projects/dataset-library',
        component: ComponentCreator('/userManual/project-and-workspace/manage-projects/dataset-library','d15'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/project-and-workspace/manage-projects/plugin-library',
        component: ComponentCreator('/userManual/project-and-workspace/manage-projects/plugin-library','643'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/project-and-workspace/manage-projects/public-state',
        component: ComponentCreator('/userManual/project-and-workspace/manage-projects/public-state','c2f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/publish/preview-mode',
        component: ComponentCreator('/userManual/publish/preview-mode','9c2'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/scene/ideas-of-scene',
        component: ComponentCreator('/userManual/scene/ideas-of-scene','4a5'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/userManual/widget-and-align-system/ideas-of-widget',
        component: ComponentCreator('/userManual/widget-and-align-system/ideas-of-widget','37b'),
        exact: true,
        'sidebar': "mySidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

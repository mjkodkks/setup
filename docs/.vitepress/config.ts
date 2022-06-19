import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `DKKs - Documentation`,
  description: 'Blog & Document.',
  lastUpdated: true,

  themeConfig: {
    sidebar: [
      {
        text: 'Server',
        collapsible: true,
        items: [
          { text: 'startup', link: '/setup-vm' },
          { text: 'ssl', link: '/ssl' },
          { text: 'jenkins', link: '/jenkins' },
        ]
      },
      {
        text: 'Database',
        collapsible: true,
        items: [
          { text: 'postgres', link: '/database/postgresql/' },
        ]
      },
      {
        text: 'Deploy',
        collapsible: true,
        items: [
          { text: 'Web App', link: 'https://github.com/mjkodkks/setup/tree/main/deploy' },
        ]
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present DKKs'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mjkodkks/setup' },
    ]
  }
})
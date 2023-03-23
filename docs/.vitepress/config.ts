import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `DKKs - Documentation`,
  description: 'Blog & Document.',
  lastUpdated: true,

  themeConfig: {
    sidebar: [
      {
        text: 'Server',
        collapsed: false,
        items: [
          { text: 'startup', link: '/server/setup-vm' },
          { text: 'nginx-proxy for hosting app', link: '/server/nginx-proxy' },
          { text: 'ssl', link: '/server/ssl' },
          { text: 'jenkins', link: '/server/jenkins' },
          { text: 'wsl2', link: '/wsl2/README' },
        ]
      },
      {
        text: 'Database',
        collapsed: false,
        items: [
          { text: 'postgres', link: '/database/postgresql/README' },
        ]
      },
      {
        text: 'React',
        collapsed: false,
        items: [
          { text: 'react(ts)-vite-mui-tailwind', link: '/react/react(ts)-vite-mui-tailwind.md' },
        ]
      },
      {
        text: 'Deploy App',
        collapsed: false,
        items: [
          { text: 'Web App', link: 'https://github.com/mjkodkks/setup/tree/main/docs/deploy' },
          { text: 'NUXT2 - SSG', link: '/deploy/nuxt-2-static-deploy/README' },
          { text: 'react - SPA', link: '/deploy/react-app-spa/README' },
          { text: 'Django - Deploy', link: '/deploy/django-deploy/README' },
          { text: 'Deno - Deploy', link: '/deploy/deno/README' },
        ]
      },
      {
        text: 'Tailwindcss',
        collapsed: false,
        items: [
          { text: 'Play tailwindcss easy way', link: '/tailwindcss/playcdn' },
          { text: 'How To Have A Hover Effect On Children When Parent Is Hovered', link: '/tailwindcss/hover-parent-to-children' },
        ]
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present DKKs'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mjkodkks/setup/tree/main/docs' },
    ]
  }
})
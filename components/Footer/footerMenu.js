import { SocialLinks } from 'SocialLinks/links'

const footerMenu = [
  {
    id: 0,
    name: 'COMPANY',
    subLinks: [
      { name: 'Züs Net ', link: 'https://demo.0chain.net/', target: '_blank' },
      { name: 'Whitepapers', link: '/whitepapers' },
      { name: 'ZCN', link: '/zcn' },
      { name: 'Blog', link: 'https://blog.0chain.net', target: '_blank' },
      { name: 'FAQ', link: SocialLinks.DISCORD, target: '_blank' },
    ],
  },
  {
    id: 1,
    name: 'COMMUNITY',
    subLinks: [
      { name: 'Miner', link: '/earn' },
      { name: 'Developer', link: '/build' },
      { name: 'HackerForum', link: '/build' },
      { name: 'Forum', link: SocialLinks.DISCORD, target: '_blank' },
      {
        name: 'Documentation',
        link: 'https://docs.zus.network',
        target: '_blank',
      },
      { name: 'API ', link: 'https://docs.zus.network', target: '_blank' },
      { name: 'Github', link: 'https://github.com/0chain', target: '_blank' },
      { name: 'ZCN', link: '/zcn' },
    ],
  },
  {
    id: 2,
    name: 'RESOURCES',
    subLinks: [
      { name: 'Team', link: '/team' },
      { name: 'News', link: '/news' },
      { name: 'Solutions', link: '/apps' },
      { name: 'Media Kit', link: '/press' },
      { name: 'Contact Us', link: '/contact' },
    ],
  },
]
export default footerMenu

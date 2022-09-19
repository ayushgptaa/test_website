import { SocialLinks } from 'SocialLinks/links'

const footerMenu = [
  {
    id: 0,
    name: 'COMPANY',
    subLinks: [
      {
        name: 'Züs Net ',
        link: 'https://staging-explorer.testnet-0chain.net/home',
        target: '_blank',
      },
      { name: 'Whitepapers', link: '/whitepapers' },
      { name: 'About', link: '/about' },
      { name: 'ZCN', link: '/defi' },
      {
        name: 'Blog',
        link: 'https://blog.testnet-0chain.net/',
        target: '_blank',
      },
      { name: 'FAQ', link: SocialLinks.DISCORD, target: '_blank' },
    ],
  },
  {
    id: 1,
    name: 'COMMUNITY',
    subLinks: [
      { name: 'News', link: '/news' },
      { name: 'Forum', link: SocialLinks.DISCORD, target: '_blank' },
      {
        name: 'Documentation',
        link: 'https://docs.zus.network',
        target: '_blank',
      },
      { name: 'API ', link: 'https://api.zus.network', target: '_blank' },
      { name: 'Github', link: 'https://github.com/0chain', target: '_blank' },
    ],
  },
  {
    id: 2,
    name: 'RESOURCES',
    subLinks: [
      { name: 'Solutions', link: '/launch-apps' },
      { name: 'Miner', link: '/earn' },
      { name: 'Developer', link: '/build' },
      { name: 'Media Kit', link: '/press' },
      { name: 'Contact Us', link: '/contact' },
      { name: 'ShowCase', link: '/showcase' },
    ],
  },
  {
    id: 3,
    name: 'DEFI',
    subLinks: [
      { name: 'Staking', link: '/staking' },
      { name: 'Block Rewards', link: '/block-rewards' },
      { name: 'Delegation', link: '/delegation' },
      { name: 'ZCN Supply', link: '/zcn-supply-schedule' },
    ],
  },
]
export default footerMenu

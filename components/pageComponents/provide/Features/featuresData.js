import styles from './Features.module.scss'

const featuresData = [
  {
    customStyle: styles.phoneStyle,
    imgDesktop: '/images/provide/features/phoneDesktop.png',
    imgMobile: '/images/provide/features/phone.png',
    imgDesktopWidth: '554',
    imgDesktopHeight: '728',
    imgMobileWidth: '289',
    imgMobileHeight: '420',
    heading: 'Stake & Earn',
    text: 'Want to Earn without becoming a Storage Provider? On the Bolt app you can delegate $ZCN to other active Storage Providers and earn alongside them.',
    phoneMobile: true,
    ellipseRight: true,
  },
  {
    customStyle: styles.laptopStyle,
    imgDesktop: '/images/provide/features/laptopDesktop.png',
    imgMobile: '/images/provide/features/laptop.png',
    imgDesktopWidth: '1100',
    imgDesktopHeight: '486',
    imgMobileWidth: '940',
    imgMobileHeight: '419',
    heading: 'Explore',
    text: 'Charts, maps, leaderboards, protocol-wide storage rates, and much more. The Atlus explorer displays all of the latest activity on the Züs Cloud Network.',
    laptopImg: true,
    textContentEllipse: true,
    ellipseLeft: true,
  },
]

export default featuresData

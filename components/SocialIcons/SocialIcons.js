import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { RiTelegramFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

import styles from './SocialIcons.module.scss'

const value = {
  color: 'white',
  size: '28px',
}

const SocialIcons = () => {
  return (
    <IconContext.Provider value={value}>
      <ul className={styles.socialIcons}>
        <li>
          <AiOutlineTwitter />
        </li>
        <li>
          <FaDiscord />
        </li>
        <li>
          <RiTelegramFill />
        </li>
      </ul>
    </IconContext.Provider>
  )
}

export default SocialIcons

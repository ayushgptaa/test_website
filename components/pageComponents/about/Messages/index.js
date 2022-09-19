import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const data = [
  {
    heading: 'Alone, we are a cloud, but together we are the sky.',
    keywords: ['Resilient', 'Limitless', 'Infinite'],
  },

  {
    heading:
      'Protector of human potential, and ideas in all shapes and  forms.',
    keywords: ['Unwieldy', ' Unconventional', 'Uncensored'],
  },
  {
    heading:
      'Mentor and wealth generator for the creative-minded and entrepreneur.',
    keywords: ['Inspired', 'Inventive', ' Existential'],
  },
  {
    heading:
      'Historian and recorder of contracts and agreements between peers.',
    keywords: ['Resilient', 'Limitless', 'Infinite'],
  },
  {
    heading: 'Alone, we are a drop of water, but together we are a rainstorm.',
    keywords: ['Wild', 'Ingenious', 'Divine'],
  },
]
const Messages = () => {
  return (
    <section className={styles.rootContainer}>
      {data.map(({ heading, keywords }) => (
        <div className={styles.messageContainer} key={heading}>
          <Paragraph className={styles.heading}>{heading}</Paragraph>
          <div className={styles.keywords}>
            {keywords.map((keyword) => (
              <p key={keyword}>{keyword}.</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Messages

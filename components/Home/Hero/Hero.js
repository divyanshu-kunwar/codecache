import buycofeicon from '../../../media/icons/buycofe.png'
import Image from "next/image"

import styles from './hero.module.css'

export default function Hero(props){
    return(
        <div className={styles.heroAndSupporter}>
                  <div className={styles.hero}>
                    <div className={styles.hero_msg}>Think Like A Data Scientist</div>
                    <div className={styles.hero_tags}>
                      <span>#DataScience</span>
                      <span>#ML</span>
                      <span>#ComputerScience</span>
                    </div>
                  </div>
                  <div className={styles.supporter}>
                    <div className={styles.supporterThanks}>Thanks To Our Supporters : </div>
                    <div className={styles.supporterNames}>
                    {
                      (props.contributors).map((contributor) => {
                        return(
                          <span key={contributor}>{contributor}</span>
                        )
                      })
                    }
                    </div>
                    <div className={styles.coffeeimg}>
                      <Image src={buycofeicon} alt="buy me a coffee"/>
                    </div>
                  </div>
                </div>
    )
}
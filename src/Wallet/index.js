import React from 'react'
import styles from './style.module.css'

function Wallet({ data }) {
  return (
    <div className={styles.walletWrapper}>
      <h4 className={styles.walletHeading}>Auto Gen Seed Phrase?</h4>

      <div className={styles.walletContent}>

        <ul className={styles.lisItem}>
          {data.map((item, index) => {
            return <li key={index}
              className={styles.item}
            >
              <div className={styles.btnName}>
                <button
                  className={styles.btnIndex}
                >
                  {index + 1}</button>
                &nbsp;{item.name}
              </div>
            </li>
          })}
        </ul>
      </div>

    </div>
  )
}

export default Wallet
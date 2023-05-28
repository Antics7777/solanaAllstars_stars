import React from 'react'
import { qrcode} from '../assets'
import styles, { layout } from "../style";



const Feedback = () => {
  return (
    <section id="qr" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Scan the QR CODE,<br className="sm:block hidden" />if you have not registered
      </h2>
     

   
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
     <a href="https://bit.ly/3qlBFdG" target="_blank"> <img src={qrcode} alt="image" className={` w-[80%] `} /> </a>
    </div>
  </section>
  )
}

export default Feedback
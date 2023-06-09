import React from 'react'
import styles from './style'
import { Navbar, Hero, Button, Client, Cta, Getstarted, Feedback, Footer, Business  } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden  ' >
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
      </div>


      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        
         {/* <Client /> */}
         <Cta />
         <Business />
       
         <Feedback />
         <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
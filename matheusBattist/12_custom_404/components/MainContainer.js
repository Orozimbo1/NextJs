import styles from '../styles/MainContainer.module.css'

import Navbar from "./Navbar"
import Footer from "./Footer"

const MainContainer = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

export default MainContainer
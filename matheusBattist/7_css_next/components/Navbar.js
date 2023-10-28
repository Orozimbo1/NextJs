import Link from "next/link"

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
      <ul className={styles.navbar}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>Sobre nós</Link>
        </li>
        <li>
          <Link href='/products'>Produtos</Link>
        </li>
      </ul>
  )
}

export default Navbar
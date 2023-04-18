import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>Sobre nós</Link></li>
        <li><Link href='/products'>Produtos</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
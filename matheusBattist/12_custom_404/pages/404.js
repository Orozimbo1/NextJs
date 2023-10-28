import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Parece que esta página não existe</p>
      <Link href='/'>Voltar</Link>
    </div>
  )
}

export default NotFound
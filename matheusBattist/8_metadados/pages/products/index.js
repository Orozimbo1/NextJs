import Link from "next/link"
import Head from "next/head"

export default function Product() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <h1>Página de produtos</h1>
      <Link href='/'>Voltar</Link>
    </>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name='keywords' content='Roupas, Calçados, Boné' />
        <meta name="description" content="Encontre a melhor roupa para você" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Home</h1>
        <Image src='/images/city.jpg' width={400} height={500} alt='Uma cidade qualquer a noite' />
      </main>
    </>
  )
}

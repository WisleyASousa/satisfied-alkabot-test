import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayoutProps from './MainLayoutProps'

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>{props.title ?? 'Satisfied'}</title>
        <meta name="description" content="satisfied-alkabot-test" />
        <link rel="icon" href="/logo-s.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>

      <div className={styles.page}>
        <div className="container text-center ">
          <main className="text-center">{props.children}</main>
        </div>
      </div>
    </div>
  )
}

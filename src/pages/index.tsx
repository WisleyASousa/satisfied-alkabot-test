import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout title="Satisfied">
      <h1 className={styles.title}>Satisfied</h1>
      <p className={styles.title}>satisfied-alkabot-test</p>
    </MainLayout>
  )
}

export default Home

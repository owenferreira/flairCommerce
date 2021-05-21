import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navigation from './navigation'

export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <div className={styles.main}>
      <div className={styles.productPhoto} src="./examplePhoto.jpg"></div>
      </div>
    </div>
  )
}

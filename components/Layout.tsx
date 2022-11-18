import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import { useRouter } from 'next/router'

const Layout = ({ children }: any) => {
  const router = useRouter();
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {!router.pathname.includes("movies") && <Header />}
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
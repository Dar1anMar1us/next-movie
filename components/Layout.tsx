import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import { useRouter } from 'next/router'

const Layout = ({ children }: any) => {
  const router = useRouter()
  const notWithHeader = ["movies", "about"]
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {!notWithHeader.includes(router.pathname.split("/")[1]) && <Header />}
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
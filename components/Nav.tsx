import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  const {nav} = navStyles
  return (
    <nav className={nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/movies'>Movies</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
import Link from 'next/link'
import navStyle from '../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <div className={navStyle.nav}>
            <div className={navStyle.logo}><h1><span>Drivvn</span> Engineering Blog</h1></div>
            <div className={navStyle.linkDiv}>
                <ul className={navStyle.ul}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link  href="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

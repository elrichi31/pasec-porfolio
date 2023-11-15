import styles from '../../styles/navbar.module.css'
import {useRouter}from 'next/router'
import Router from 'next/router'
import Link from 'next/link'

export default function Navbar(){
   
    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.container}`}>
            <div className="container-fluid">
                <a className="navbar-brand text-reset" href="/">Portafolio</a>
                <div className=" d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/fortalezas'><a className="nav-link text-reset">Fortalezas</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/aportes'><a className="nav-link text-reset">Aportes</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/objetivo'><a className="nav-link text-reset">Objetivo</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/video'><a className="nav-link text-reset">Video</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
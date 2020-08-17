import React from 'react'
import Link from '../link/link'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.navigation}>
            <ul>
                <Link href="#" title="Going to 1"/>
                <Link href="#" title="Going to 2"/>
                <Link href="#" title="Going to 3"/>
                <Link href="#" title="Going to 4"/>
                <Link href="#" title="Going to 5"/>

            </ul>
        </header>
    )
}

export default Header
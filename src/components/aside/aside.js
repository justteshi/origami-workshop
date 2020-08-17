import React from 'react'
import Link from '../link/link'
import styles from './aside.module.css'

const Aside = () => {
    return (
        <header className={styles.navigation}>
            <Link href="#" title="Going to 1"/>
            <Link href="#" title="Going to 2"/>
            <Link href="#" title="Going to 3"/>
            <Link href="#" title="Going to 4"/>
            <Link href="#" title="Going to 5"/>
        </header>
    )
}

export default Aside
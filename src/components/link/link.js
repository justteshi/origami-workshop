import React from 'react'
import styles from './link.module.css'

const Link = ({title, href}) => {
    return (
        <div className={styles["list-item"]}>
            <a href={href} className={styles["header-link"]}>
                {title}
            </a>
        </div>
    )
}

export default Link
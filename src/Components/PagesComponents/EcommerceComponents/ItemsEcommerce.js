import React from 'react';

//CSS
import styles from './ItemsEcommerce.module.css'

const ItemsEcommerce = ({src, title, counter, status}) => {
    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <img src={src} alt="icon" />
            </div>
            <div className={styles.counter}>
                <p>{counter}</p>
                <span>{status}</span>
            </div>
            <p className={styles.title}>{title}</p>
        </div>
    );
};

export default ItemsEcommerce;
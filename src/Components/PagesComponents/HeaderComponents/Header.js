import React from 'react';

//CSS
import styles from './Header.module.css'

//Icon
import * as Unicons from "@iconscout/react-unicons";

//Image
import Profile from '../../../images/1.png'

const Header = ({menuHandler}) => {
    return (
        <header className={styles.header}>
            <div className={styles.notification_cart_messages}>
                <span onClick={menuHandler}><Unicons.UilBars color="#000" /></span>
                <Unicons.UilShoppingCartAlt color="#000" />
                <Unicons.UilCommentMessage color="#000" />
                <Unicons.UilBell color="#000" />
            </div>
            <div className={styles.user}>
                <img src={Profile} alt='avatar' />
                <p>Hi, <span>Arash</span></p> 
            </div>
        </header>
    );
};

export default Header;
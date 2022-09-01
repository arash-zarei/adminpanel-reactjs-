import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom'

//Icon
import * as Unicons from "@iconscout/react-unicons";

//CSS
import styles from './NavBar.module.css'


const NavBar = ({menuHandler, statusMenu}) => {

    const links = useRef(null)

    useEffect(() => {
        const aLink = links.current.querySelectorAll('a')
        aLink.forEach(element => {
            if (element.getAttribute('href') === '/' + window.location.href.split('/')[3]) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        });

        aLink.forEach(e => {
            e.addEventListener('click', () => {
                for (let a = 0; a < aLink.length; a++) {
                    aLink[a].classList.remove('active')
                }
                e.classList.add('active')
            })
        })
    })


    return (
        <nav ref={links} className={`${styles.content} ${statusMenu ? styles.open : ''}`}>
            <div className={styles.titleDashboard}>
                <h3>Admin Panel</h3>
                <span onClick={menuHandler}><Unicons.UilMultiply color="#000" /></span>
            </div>
            <div className={styles.routes}>
                <h5>DASHBOARD</h5>
                <Link to="/" className={`active ${styles.route}`} onClick={menuHandler}> <Unicons.UilShoppingBag /> <p className={styles.title}>Ecommerce</p></Link>
            </div>

            <div className={styles.routes}>
                <h5>PAGES</h5>
                <Link to="/orders" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilShoppingCart /> <p className={styles.title}>Orders</p></Link>

                <Link to="/employees" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilUsersAlt /> <p className={styles.title}>Employees</p></Link>

                <Link to="/customers" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilUserExclamation /> <p className={styles.title}>Customers</p></Link>
            </div>
            <div className={styles.routes}>
                <h5>APPS</h5>

                <Link to="/editor" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilEdit /> <p className={styles.title}>Editor</p></Link>

                <Link to="/colorpicker" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilPalette /> <p className={styles.title}>Color-Picker</p></Link>
            </div>
            <div className={styles.routes}>
                <h5>CHARTS</h5>

                <Link to="/line" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilChartLine /> <p className={styles.title}>Line</p></Link>

                <Link to="/area" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilComparison /> <p className={styles.title}>Area</p></Link>

                <Link to="/bar" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilChartBar /> <p className={styles.title}>Bar</p></Link>

                <Link to="/pie" className={`${styles.route}`} onClick={menuHandler}> <Unicons.UilChartPie /> <p className={styles.title}>Pie</p></Link>
            </div>
        </nav>
    );
};

export default NavBar;
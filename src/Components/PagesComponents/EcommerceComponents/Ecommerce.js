import React from 'react';

//Images
import customers from '../../../images/customer-review.png'
import products from '../../../images/packaging.png'
import sales from '../../../images/increasing.png'
import refunds from '../../../images/cashback.png'


//CSS
import styles from './Ecommerce.module.css'

//Components
import ItemsEcommerce from './ItemsEcommerce';
import ChartBar from './ChartsComponents/ChartBar';
import ChartPie from './ChartsComponents/ChartPie';
import ChartLine from './ChartsComponents/ChartLine';

const Ecommerce = () => {
    return (
        <div className={`section ${styles.ecommerce}`}>
            <div className={styles.statistics}>
                <ItemsEcommerce src={customers} title='Customers' counter='39,354' status="+4%" />
                <ItemsEcommerce src={products} title='Products' counter='4,396' status="+24%" />
                <ItemsEcommerce src={sales} title='Sales' counter='423,39' status="+38%" />
                <ItemsEcommerce src={refunds} title='Refunds' counter='39,354' status="+12%" />
            </div>

            <div className={styles.charts}>
                <div className={styles.line_bar}>
                    <ChartLine />
                </div>
                <div className={styles.pie_bar}>
                    <ChartBar />
                    <ChartPie />
                </div>
            </div>
        </div>
    );
};

export default Ecommerce;
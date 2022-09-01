import React from 'react';

//CSS
import styles from './OrdersItems.module.css'

//Functions
import { shorted } from '../../../Helpers/function';

const OrdersItems = ({productsData}) => {

    const {thumbnail, title, price, brand, category} = productsData

    return (
        <div className={styles.ordersItems}>
            <img src={thumbnail} alt="products" />
            <p>{shorted(title)}</p>
            <p>{shorted(brand)}</p>
            <p>{price} $</p>
            <p>{shorted(category)}</p>
        </div>
    );
};

export default OrdersItems;
import React from 'react';

//CSS
import styles from './CustomersItems.module.css'

const CustomersItems = ({productsData}) => {

    const {image, lastName, phone, age, email} = productsData

    return (
        <div className={styles.customersItems}>
            <img src={image} alt="products" />
            <p>{lastName} {lastName}</p>
            <p>{age}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    );
};

export default CustomersItems;
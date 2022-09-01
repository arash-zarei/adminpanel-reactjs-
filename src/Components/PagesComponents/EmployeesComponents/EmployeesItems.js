import React from 'react';

//CSS
import styles from './EmployeesItems.module.css'

//Functions
import { shorted } from '../../../Helpers/function';

const EmployeesItems = ({productsData}) => {

    const {image, firstName, lastName, age, address} = productsData

    return (
        <div className={styles.employeesItems}>
            <img src={image} alt="products" />
            <p>{firstName} {lastName}</p>
            <p>{age}</p>
            <p>{address.city}</p>
        </div>
    );
};

export default EmployeesItems;
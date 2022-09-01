import React, { useRef, useEffect, useState } from 'react';

//CSS
import '../styles.css'

//Components
import Loading from '../../Loading';
import CustomersItems from './CustomersItems';

//API
import { getCustomers } from '../../../Service/api';

const Customers = () => {

    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    const pagesNumbers = useRef(null)

    useEffect(() => {
        const btns = pagesNumbers.current.querySelectorAll('span');
        btns.forEach(element => {
            element.addEventListener('click', () => {
                for (let a = 0; a < btns.length; a++) {
                    btns[a].classList.remove('activeBtn')
                }
                element.classList.add('activeBtn')
                const num = element.getAttribute('data-number')
                setPageNumber(Number(num))
            })
        });

        const fetchAPI = async () => {
            setData(await getCustomers(pageNumber))
        }
        fetchAPI()
    }, [data])

    return (
        <div className={`section orders`}>
            <div className={'title'}>
                <p>Pages</p>
                <h2>Customers</h2>
            </div>

            <div className={'items'}>
                <div className={'titles'}>
                    <p>Image</p>
                    <p>Name</p>
                    <p>Age</p>
                    <p>Phone</p>
                    <p>Email</p>
                </div>

                <div className={'orderItems'}>
                     {!data.length ? <Loading /> : data.map(product => <CustomersItems key={product.id} productsData={product} />)}
                </div>

                <div ref={pagesNumbers} className={'pagesNumber'}>
                    <span className={`btn activeBtn`} data-number="0">1</span>
                    <span className={`btn `} data-number="20">2</span>
                    <span className={`btn `} data-number="30">3</span>
                    <span className={`btn `} data-number="40">4</span>
                    <span className={`btn `} data-number="50">5</span>
                    <span className={`btn `} data-number="60">6</span>
                    <span className={`btn `} data-number="70">7</span>
                    <span className={`btn `} data-number="80">8</span>
                    <span className={`btn `} data-number="90">9</span>
                </div>
            </div>

        </div>
    );
};

export default Customers;
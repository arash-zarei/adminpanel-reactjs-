import React from 'react';

import { Route, Routes } from 'react-router-dom';

//CSS
import styles from './Pages.module.css'

//Components
import Header from './HeaderComponents/Header';
import Ecommerce from './EcommerceComponents/Ecommerce';
import Orders from './OrdersComponents/Orders';
import Employees from './EmployeesComponents/Employees';
import Customers from './CustomersComponents/Customers';
import Editor from '../AppsComponents/Editor/Editor';
import ColorPickerGfg from '../AppsComponents/ColorPickerComponents/ColorPickerGfg';
import LineChart from '../ChartsComponents/LineChart';
import AreaChart from '../ChartsComponents/AreaChart';
import PieChart from '../ChartsComponents/PieChart';
import BarChart from '../ChartsComponents/BarChart';

const Pages = ({menuHandler}) => {
    return (
        <div className={styles.content}>
            <Header menuHandler={menuHandler} />
            <Routes>
                <Route path='/' element={<Ecommerce />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/colorpicker' element={<ColorPickerGfg />} />
                <Route path='/line' element={<LineChart />} />
                <Route path='/area' element={<AreaChart />} />
                <Route path='/bar' element={<BarChart />} />
                <Route path='/pie' element={<PieChart />} />
            </Routes>
        </div>
    );
};

export default Pages;
import React from 'react';
import Ob1 from '../table/PageTB/ob1'
import Ob2 from '../table/PageTB/ob2'
import Ob3 from '../table/PageTB/ob3'
import Ob4 from '../table/PageTB/ob4'
import Ob5 from '../table/PageTB/ob5'
import Header from '../table/PageTB/header'
import Footer from '../table/PageTB/footer'

const TablePage = () => {
    return (
        <div className='content'>
        <Header/>
        <Ob1/>
        <Ob2/>
        <Ob3/>
        <Ob4/>
        <Ob5/>
        <Footer/>
    </div>
    )
}

export default TablePage

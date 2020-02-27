import React from 'react';
import Tracker from '../ckeditor/pageCK/track-form'
import Sub from '../ckeditor/pageCK/sub-form'
import Des from '../ckeditor/pageCK/Desform'
import Ass from '../ckeditor/pageCK/ass-form'
import Date from '../ckeditor/pageCK/dateform'
import Add from '../ckeditor/pageCK/add-form'
import Label from '../ckeditor/pageCK/label'
import Header from '../ckeditor/pageCK/header'
import Ft from '../ckeditor/pageCK/footer'

const CkeditorPage = () => {
    return (
        <div className='container-fluid'>
            <div className="page-issue-form"> 
                <Header/>
                <Tracker/>
                <Sub/>
                <Label/>           
                <Des/>
                <Ass/>
                <Date/>
                <Add/>
                <Ft/>
            </div>    
        </div>
    )
}
export default CkeditorPage

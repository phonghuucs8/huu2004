import React from 'react'
import { Link, } from 'react-router-dom'
import './App.scss'
import Routing from './routing'

const App = () => {
    return (
      <div>
          
                        <Routing />
                        <Link to='/ckeditor'>
                            <div className='menuBarIcon'>
                                <div className='menuSubBarIcon'>
                                    <i className='fa fa-th-large'></i>
                                    <span>Page CK</span>
                                </div>
                            </div>
                        </Link>
                        <Link to='/table'>
                            <div className='menuBarIcon'>
                                <div className='menuSubBarIcon'>
                                    <i className='fa fa-th-large'></i>
                                    <span>Description Page</span>
                                </div>
                            </div>
                        </Link>
                   

                    </div>
    )
}

export default App

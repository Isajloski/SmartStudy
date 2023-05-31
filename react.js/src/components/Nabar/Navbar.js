import React, { useState } from 'react'
import style from './Navbar.module.css'
import { iconManager } from '../../assets/imgs/SvgHolder'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className={style['navbar-container-master']}>
                <div className={style['navbar-container']}>
                    <div className={style['logo-container']} >
                        {iconManager.getIcon('logo')}
                        <div className={style['logo-title']}>  <p>SmartStudy</p></div>
                    </div>
                    <div className={style['navbar-items']}>

                        <Link to={'/course/:id'}>
                            Course
                        </Link>
                        <Link to={'/example'}>
                            Example
                        </Link>
                        <Link to={'/material'}>
                            Material
                        </Link>
                        <Link to={'/material/create'}>
                            Create Material
                        </Link>
                        <Link to={"/course/:course_id/quiz/:quiz_id"}>
                            Quiz
                        </Link>
                        <Link to={'/userpage'}>
                            {iconManager.getIcon('userSmall')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
import React, { useState, useEffect } from 'react'
import style from './UserPage.module.css'
import { iconManager } from '../../assets/imgs/SvgHolder'
const UserPage = (props) => {

    useEffect(() => {
        getfromProps()
    }, [])

    const [newUser, setUser] = useState(undefined)

    const userJson = localStorage.getItem("User");
    const user = JSON.parse(userJson);

    const userType = user?.role;
    const isAdmin = userType === 1;

    const formatDate = (date) => {
        let temp = date?.slice(0, 10)
        return temp
    }
    const getfromProps = () => {
        setUser(props.user)
    }
    return (
        <div className={style['userpage-container']}>
            <div className={style['userpage-card']}>
                <div className={style['userpage-userinfo']}>
                    <div className={style['userpage-userinfo-img']}> {iconManager.getIcon('user')}</div>
                    <div className={style['userpage-userinfo-info']}>
                        <div>
                            <p style={{ 'fontSize': '20px', 'fontWeight': 'bold' }}>Информации за корисникот</p>
                            <div>
                                <p><span style={{ 'fontWeight': 'bold' }}>Корисник : </span>{user?.username} </p>
                                <p><span style={{ 'fontWeight': 'bold' }}>Индекс : </span>{user?.index} </p>
                                <p><span style={{ 'fontWeight': 'bold' }}>Електронска пошта : </span>{user?.email}</p>
                                <p><span style={{ 'fontWeight': 'bold' }}>Држава : </span>{user?.country}</p>
                                <p><span style={{ 'fontWeight': 'bold' }}>Град : </span>{user?.city}</p>
                                <p><span style={{ 'fontWeight': 'bold' }}>Датум на раѓање : </span>{formatDate(user?.birthday)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style['userpage-bottom']}>
                    <div className={style['userpage-bottom-container']}>
                        <div>  <p style={{ 'fontSize': '20px', 'fontWeight': 'bold' }}>Дополнителни Информации</p></div>
                        <div><p>{user?.description}</p></div>
                    </div>
                </div>

            </div></div>
    )
}

export default UserPage
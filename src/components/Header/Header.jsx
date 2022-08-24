import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo-bgc'></div>
                <h2 className='header-logo'>ПРОСТИТУТКИ</h2>

            <div className='header-card'>
                <img className='header-card-img' src="../../icons/card-icon.svg" alt="" />
                <p>Город</p>
            </div>

            <input className='header-input' type="text"  placeholder='ПОИСК'/>

            <div >
                <ul className='header-register'>
                    <li  className='sign-up'>
                        <a href="">Регистрация</a>
                    </li>
                    /
                    <li className='sign-in'>
                        <a href="">Войти</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
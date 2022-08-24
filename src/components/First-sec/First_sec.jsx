import React from 'react';
import './First-sec.css';

const First_sec = () => {
    return (
        <div>
            <section className='first-sec'>
                <div className="wrapper">
                <div class="dropdown">
                    <button class="dropbtn">Фильтр </button>
                        <div class="dropdown-content">
                        <div class="dropdown2">
                            <button class="dropbtn2">Возраст</button>
                            <div class="dropdown-content2">
                                <a href="#">от 18 до 22</a>
                                <a href="#">от 23 до 29</a>
                                <a href="#">от 30 до 40</a>
                            </div>
                        </div>

                        <div class="dropdown3">
                            <button class="dropbtn3">Рост</button>
                            <div class="dropdown-content3">
                                <a href="#">от 150см до 160см</a>
                                <a href="#">от 160см до 170см</a>
                                <a href="#">от 170см до 185см</a>
                            </div>
                        </div>

                        <div class="dropdown4">
                            <button class="dropbtn4">Вес</button>
                            <div class="dropdown-content4">
                                <a href="#">от 40кг до 50кг</a>
                                <a href="#">от 50кг до 60кг</a>
                                <a href="#">от 60кг до 75кг</a>
                            </div>
                        </div>

                        <div class="dropdown5">
                            <button class="dropbtn5">Грудь</button>
                            <div class="dropdown-content5">
                                <a href="#">от 1 до 2</a>
                                <a href="#">от 2 до 3</a>
                                <a href="#">от 3 до 4</a>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default First_sec;
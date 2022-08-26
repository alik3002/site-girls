import React from 'react';
import Header from "./components/Header/Header";
import First_sec from './components/First-sec/First_sec';
import Cards_sec from './components/Cards_sec/Cards_sec';
import "./App.css";


const App = () => {
    return (
        <div className='container'>
            <Header/>
            <section className='hero'>
                
            </section>

            <First_sec/>

            <Cards_sec/>
        </div>
        
    );
    
};

export default App;
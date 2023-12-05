import React from 'react';
import s from './App.module.css';
import Work from "./component/work/work";
import AboutMe from "./component/aboutMe/aboutMe";
import Presentation from "./component/presentation/presentation";
import Header from "./component/header/header";
import BlockConnect from "./component/blockConnect/blockConnect";
import Footer from "./component/footer/footer";

function App() {

    return (
        <div className={s.container}>

            <Header/>

            <div className={s.content}>

                <Presentation/>
                <AboutMe/>
                <Work/>

            </div>

            <BlockConnect/>
            <Footer/>

        </div>
    );
}

export default App;

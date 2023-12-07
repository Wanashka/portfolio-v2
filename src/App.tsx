import React from 'react';
import s from './App.module.css';
import AboutMe from "./component/aboutMe/aboutMe";
import Presentation from "./component/presentation/presentation";
import Header from "./component/header/header";
import BlockConnect from "./component/blockConnect/blockConnect";
import Footer from "./component/footer/footer";
import WorkContainer from "./component/work/workContainer";

function App() {

    return (
        <div className={s.container}>

            <Header/>

            <div className={s.content}>

                <Presentation/>
                <AboutMe/>
                <WorkContainer/>

            </div>

            <BlockConnect/>
            <Footer/>

        </div>
    );
}

export default App;

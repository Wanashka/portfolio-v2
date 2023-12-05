import React from 'react';
import s from "../../App.module.css";
import GitHub from "../../sourse/image/logoGithub.png";
import Telegram from "../../sourse/image/logoTelegram.png";
import hh from "../../sourse/image/logoHH.png";
import vk from "../../sourse/image/logoVK.png";
import scrollWhite from "../../sourse/image/scrollWhite.svg";

const Presentation = () => {
    return (
        <div className={s.presentation} id="presentation">
            <div className={s.mainBlockPresentation}>
                <div className={s.fullName}>Кочетов Иван Иванович</div>
                <div className={s.vacancy}>Frontend Developer</div>
                <div className={s.socialSite}>
                    <a href={""}><img alt={"GitHub"} src={GitHub}/></a>
                    <a href={""}><img alt={"Telegram"} src={Telegram}/></a>
                    <a href={""}><img alt={"hh.ru"} src={hh}/></a>
                    <a href={""}><img alt={"vk.com"} src={vk}/></a>
                </div>
            </div>
            <a href={"#aboutMe"}><img className={s.scroll} alt={"scroll"} src={scrollWhite}/></a>
        </div>
    );
};

export default Presentation;

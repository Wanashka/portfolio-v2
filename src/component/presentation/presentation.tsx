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
                    <a href={"https://github.com/Wanashka/"}><img alt={"GitHub"} src={GitHub}/></a>
                    <a href={"https://t.me/Wanashka"}><img alt={"Telegram"} src={Telegram}/></a>
                    <a href={"https://rostov.hh.ru/resume/4981ba81ff09a38b360039ed1f4368555a6f6c"}>
                        <img alt={"hh.ru"} src={hh}/></a>
                    <a href={"https://vk.com/wanyushka"}><img alt={"vk.com"} src={vk}/></a>
                </div>
            </div>
            <div className={s.scrollBlock}>
                <a href={"#aboutMe"}><img className={s.scroll} alt={"scroll"} src={scrollWhite}/></a>
            </div>
        </div>
    );
};

export default Presentation;

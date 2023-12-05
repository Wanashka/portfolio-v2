import React from 'react';
import s from "../../App.module.css";
import GitHub from "../../sourse/image/logoGithub.png";
import Telegram from "../../sourse/image/logoTelegram.png";
import hh from "../../sourse/image/logoHH.png";
import vk from "../../sourse/image/logoVK.png";
import copyright from "../../sourse/image/copyright.svg";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.contentFooter}>
                <div>Кочетов И.И.</div>
                <div className={s.socialSite}>
                    <a href={""}><img alt={"GitHub"} src={GitHub}/></a>
                    <a href={""}><img alt={"Telegram"} src={Telegram}/></a>
                    <a href={""}><img alt={"hh.ru"} src={hh}/></a>
                    <a href={""}><img alt={"vk.com"} src={vk}/></a>
                </div>
                <div className={s.yearRelease}>Все права защищены
                    <img src={copyright} alt={"Автороское право"}/>
                    2023 Кочетов И.И. ❤
                </div>
            </div>
        </footer>
    );
};

export default Footer;

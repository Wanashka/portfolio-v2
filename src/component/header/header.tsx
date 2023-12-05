import React from 'react';
import s from "../../App.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.blockMenu}>
                <a href={"#presentation"} className={`${s.itemMenu} ${s.itemMenuActive}`}>Главная</a>
                <a href={"#aboutMe"} className={s.itemMenu}>О себе</a>
                <a href={"#works"} className={s.itemMenu}>Работы</a>
                <a href={"#blockConnect"} className={s.itemMenu}>Связь</a>
            </div>
        </header>
    );
};

export default Header;

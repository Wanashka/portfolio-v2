import React from 'react';
import s from "../../App.module.css";
import myPhoto from "../../sourse/image/myPhoto.jpg";
import scrollBlack from "../../sourse/image/scrollBlack.svg";

const AboutMe = () => {
    return (
        <div className={s.aboutMe} id={"aboutMe"}>
            <div className={s.mainBlockAboutMe}>
                <div className={s.framePhoto}>
                    <img src={myPhoto} className={s.myPhoto}/>
                </div>
                <div className={s.textBlock}>
                    <div className={s.titleBlock}>Обо мне</div>
                    <div className={s.descriptionBlock}>
                        Я молодой и амбициозный специалист, увлеченный программированием. Стремлюсь к тому, чтобы всегда
                        быть в курсе последних технологических новинок в области программирования.
                    </div>
                    <a href={"https://rostov.hh.ru/resume_converter/%D0%9A%D0%BE%D1%87%D0%B5%D1%82%D0%BE%D0%B2%20%D0%98%D0%B2%D0%B0%D0%BD%20%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87.pdf?hash=4981ba81ff09a38b360039ed1f4368555a6f6c&type=pdf&hhtmFrom=resume"}
                       className={s.btnDownload} download>Скачать CV</a>
                </div>
            </div>
            <div className={s.scrollBlock}>
                <a href={"#works"}><img className={s.scrollAboutMe} alt={"scroll"} src={scrollBlack}/></a>
            </div>
        </div>
    );
};

export default AboutMe;

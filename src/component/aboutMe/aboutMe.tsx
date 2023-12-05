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
                    <div className={s.titleBlock}>About Me</div>
                    <div className={s.descriptionBlock}>An inquisitive Computer Science Engineering student,
                        skilled in leadership, seeking to leverage
                        solid development skills with focus on collaboration, communication and passion.
                    </div>
                    <button className={s.btnDownload}>Download CV</button>
                </div>
            </div>
            <div className={s.scrollBlock}>
                <a href={"#works"}><img className={s.scrollAboutMe} alt={"scroll"} src={scrollBlack}/></a>
            </div>
        </div>
    );
};

export default AboutMe;

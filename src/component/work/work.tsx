import React from 'react';
import s from "../../App.module.css";
import GitHub from "../../sourse/image/logoGithub.png";
import linkToSite from "../../sourse/image/linkToSite.png";
import swipe from "../../sourse/image/swipe.png";
import myPhoto from "../../sourse/image/myPhoto.jpg";
import scrollBlack from "../../sourse/image/scrollBlack.svg";

const Work = () => {
    const countWork = () => {

    }
    return (
        <div className={s.aboutMe} id={"works"}>
            <div className={s.mainBlockAboutMe}>
                <div className={s.textBlock}>

                    <div className={s.titleBlock}>Works</div>
                    <div className={s.subtitle}>Simon Game</div>
                    <div className={s.descriptionBlock}>An inquisitive Computer Science Engineering student,
                        skilled in leadership, seeking to leverage solid development skills with focus on
                        collaboration, communication and passion.
                    </div>

                    <ul className={s.skills}>
                        <li className={s.skillsItem}>HTML5</li>
                        <li className={s.skillsItem}>CSS</li>
                        <li className={s.skillsItem}>JavaScript</li>
                        <li className={s.skillsItem}>ReactJS</li>
                    </ul>

                    <div className={s.links}>
                        <a href={""}>
                            <img className={s.linkTo} src={GitHub} alt={"Ссылка на код проекта"}/>
                        </a>
                        <a href={""}>
                            <img className={s.linkTo} src={linkToSite} alt={"Ссылка на задеплоенный проект"}/>
                        </a>
                    </div>

                    <div className={s.countWorks}>
                        <div className={`${s.workItem} ${s.workItemActive}`}>01</div>
                        <div className={s.workItem}>02</div>
                        <div className={s.workItem}>03</div>
                        <div className={s.workItem}>04</div>
                        <div className={s.workItem}>05</div>
                    </div>

                </div>

                <div className={s.framePhoto}>
                    <a href={""} className={s.arrowLeft}><img src={swipe}/> </a>
                    <img src={myPhoto} className={s.myPhoto}/>
                    <a href={""} className={s.arrowRight}><img src={swipe}/> </a>
                </div>

            </div>
            <div className={s.scrollBlock}>
                <a href={"#blockConnect"}>
                    <img className={s.scrollAboutMe} alt={"scroll"} src={scrollBlack}/>
                </a>
            </div>
        </div>
    );
};

export default Work;

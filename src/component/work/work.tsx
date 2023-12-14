import React, {useEffect, useState} from 'react';
import s from "../../App.module.css";
import GitHub from "../../sourse/image/logoGithub.png";
import linkToSite from "../../sourse/image/linkToSite.png";
import arrow from "../../sourse/image/swipe.png";
import scrollBlack from "../../sourse/image/scrollBlack.svg";

const Work = (props: any) => {
        const [currentWork, setCurrentWork] = useState<number>(2)
        const [viewWork, setViewWork] = useState<any>({})

        const countWork = props.project.map((item: object, index: number) => {
            if (currentWork === index) {
                return (<div className={`${s.workItem} ${s.workItemActive}`}>0{index + 1}</div>)
            }
            return (<div className={s.workItem} onClick={() => setCurrentWork(index)}>0{index + 1}</div>)
        })

        const scrollThrough = (step: number) => {
            if ((currentWork + step) >= props.project.length) {
                setCurrentWork(0)
            } else if ((currentWork + step) === -1) {
                setCurrentWork(props.project.length - 1)
            } else {
                setCurrentWork(currentWork + (step))
            }
        }

        useEffect(() => {
            setViewWork(props.project[currentWork])
        }, [currentWork])

        const viewSkills = () => viewWork.skills.map((item: string) => (<li className={s.skillsItem}>{item}</li>))


        if (Object.keys(viewWork).length === 0) return null


        return (
            <div className={s.aboutMe} id={"works"}>
                <div className={s.mainBlockAboutMe}>
                    <div className={s.textBlock}>

                        <div className={s.titleBlock}>Работы</div>


                        <div className={s.subtitle}>{viewWork.title}</div>
                        <div className={s.descriptionBlock}>
                            {viewWork.description}
                        </div>

                        <ul className={s.skills}>
                            {viewSkills()}
                        </ul>

                        <div className={s.links}>
                            <a href={viewWork.Github}>
                                <img className={s.linkTo} src={GitHub} alt={"Ссылка на код проекта"}/>
                            </a>
                            <a href={viewWork.site}>
                                <img className={s.linkTo} src={linkToSite} alt={"Ссылка на задеплоенный проект"}/>
                            </a>
                        </div>

                        <div className={s.countWorks}>
                            {countWork}
                        </div>

                    </div>

                    <div className={s.framePhoto}>
                        <span onClick={() => scrollThrough(-1)} className={s.arrowLeft}>
                            <img alt={"Arrow"} src={arrow}/>
                        </span>
                        <img alt={"Превью сайта"} src={viewWork.image} className={s.myPhoto}/>
                        <span onClick={() => scrollThrough(1)} className={s.arrowRight}>
                            <img alt={"Arrow"} src={arrow}/>
                        </span>
                    </div>

                </div>
                <div className={s.scrollBlock}>
                    <a href={"#blockConnect"}>
                        <img className={s.scrollAboutMe} alt={"scroll"} src={scrollBlack}/>
                    </a>
                </div>
            </div>
        );
    }
;

export default Work;

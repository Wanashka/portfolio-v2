import React, {useEffect, useRef, useState} from 'react';
import s from "../../App.module.css";
import emailjs from '@emailjs/browser';
import {buildCreateSlice} from "@reduxjs/toolkit";

const BlockConnect = () => {
    const [fromName, setFromName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)

    const form = useRef<any>();

    const sendEmail = (e: any) => {
        e.preventDefault();
        setBtnDisabled(true)

        emailjs.sendForm('service_pcmgtzc', 'template_6lqhvvh', form.current, '0N9-k_KOoTZLwZ1S6')
            .then((result) => {
                setFromName("");
                setMessage("")
                setEmail("")
            }, (error) => {
                console.log(error)
            });
    };
    useEffect(() => {
        switchBtn()
    }, [fromName, email, message])

    const switchBtn = () => {
        if (fromName.length > 0 && email.length > 0 && message.length > 0) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true)
        }
    }

    return (
        <div className={s.blockConnect} id={"blockConnect"}>
            <div className={s.blockConnectMain}>
                <div className={s.messageFromMe}>
                    Напишите мне,<br/>
                    если у вас остались вопросы.
                </div>
                <div className={s.inputs}>
                    <div className={s.titleBlock}>Связаться</div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input value={fromName}
                               onChange={(e) => (setFromName(e.target.value))}
                               type="text"
                               name="from_name"
                               className={s.inputName}
                               placeholder={"Ваше имя"}/>
                        <input value={email} type="email"
                               onChange={(e) => (setEmail(e.target.value))}
                               name="user_email"
                               className={s.inputEmail}
                               placeholder={"Email"}/>
                        <textarea value={message}
                                  onChange={(e) => (setMessage(e.target.value))}
                                  name={"message"}
                                  className={s.inputMessage}
                                  placeholder={"Сообщение"}/>
                        <button type={"submit"}
                                className={`${s.btnSendMsg} ${btnDisabled && s.btnSendMsgDisabled}`}
                                disabled={btnDisabled}>Отправить
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BlockConnect;



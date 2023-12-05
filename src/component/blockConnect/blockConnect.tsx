import React from 'react';
import s from "../../App.module.css";

const BlockConnect = () => {
    return (
        <div className={s.blockConnect} id={"blockConnect"}>
            <div className={s.blockConnectMain}>
                <div className={s.messageFromMe}>Drop me a line.
                    I would like to hear from you.
                </div>
                <div className={s.inputs}>
                    <div className={s.titleBlock}>Get in Touch</div>
                    <input className={s.inputName} placeholder={"Name"}/>
                    <input className={s.inputEmail} placeholder={"Email"}/>
                    <textarea className={s.inputMessage} placeholder={"Message"}/>
                    <button className={s.btnSendMsg}>Send Message</button>
                </div>
            </div>

        </div>
    );
};

export default BlockConnect;

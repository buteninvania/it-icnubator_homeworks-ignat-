import React from 'react'
import m from './Message.module.css'

const Message: React.FC<MessagePropsType> = ({message, avatar, time, name}) => {
    return (
        <div className={m.item}>
            <img src={avatar} alt="avatar"/>
            <div className={m.content}>
                <div className={m.name}>{name}</div>
                <div className={m.text}>{message}</div>
                <div className={m.time}>{time}</div>
            </div>
        </div>
    )
}

export default Message

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


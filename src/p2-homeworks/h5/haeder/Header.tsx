import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'

export const Header = () => {

    const [isShowHeader, setIsShowHeader] = useState(false)

    return (
        <div className={s.wrapper}>
            <div className={s.control} onClick={() => setIsShowHeader(!isShowHeader)}>{!isShowHeader ? "Открыть ссылки" : "Закрыть ссылки"}</div>
            <div className={s.linksList} style={isShowHeader ? {animationName:s.openHeader, left: 0} : {animationName:s.closeHeader, left: -200}}>
                <NavLink to={'/pre-junior'}>Pre-junior</NavLink>
                <NavLink to={'/junior'}>Junior</NavLink>
                <NavLink to={'/junior-plus'}>Junior+</NavLink>
            </div>
        </div>
    )
}

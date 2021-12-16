import React from 'react'
import {AffairType, levelColors} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)

    return (
        <div className={s.affairItem}>
            <div>{props.affair.name}</div>
            <div style={{ color: `${levelColors[props.affair.priority]}` }}>[{props.affair.priority}]</div>
            <SuperButton className={s.delete} high children={"x"} onClick={deleteCallback}/>
        </div>
    )
}

export default Affair

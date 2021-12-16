import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType, levelColors} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const onClickButtonHandler = (filter: FilterType) => props.setFilter(filter)

    return (
        <div className={s.affairsWrapper}>

            {mappedAffairs}
            <div className={s.buttonsWrapper}>
                <SuperButton onClick={() => onClickButtonHandler('all')} children={'all'}/>
                <SuperButton onClick={() => onClickButtonHandler('high')} high children={'high'}/>
                <SuperButton onClick={() => onClickButtonHandler('middle')} middle children={'middle'}/>
                <SuperButton onClick={() => onClickButtonHandler('low')} low children={'low'}/>
            </div>

        </div>
    )
}

export default Affairs

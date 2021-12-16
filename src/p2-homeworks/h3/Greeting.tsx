import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {

    return (
        <div>
            <div className={s.form}>
                <SuperInputText error={error} value={name} onChange={setNameCallback}/>
                <SuperButton onClick={addUser} children={"add"}/>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting

import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    high?: boolean
    low?: boolean
    middle?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        high, low, middle, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {



    const finalClassName = `${high ? s.high : low ? s.low : middle ? s.middle : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton

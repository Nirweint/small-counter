import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type PropsType = {
    value: number
    setValue: (value: number) => void
    type?: string
    min?: number
    max?: number
}

export const Input = ({type, value, min, max, setValue, ...props}: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let num = e.currentTarget.value
        setValue(+num)
    }

    const errorStyle = min === value ? s.error : '' || max === value ? s.error : '';

    return (
        <input
            className={errorStyle}
            value={value}
            onChange={onChangeHandler}
            type={type}
            min={min}
            max={max}
        />
    );
}
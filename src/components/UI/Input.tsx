import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type PropsType = {
    value: number
    setValue: (value: number) => void
    type?: string
    min?: number
    max?: number
}

export const Input = ({type, value, ...props}: PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let num = e.currentTarget.value
        props.setValue(+num)
    }

    const errorStyle = props.min === value ? s.error : '' || props.max === value ? s.error : '';

    return (
        <input
            className={errorStyle}
            value={value}
            onChange={onChangeHandler}
            // onKeyPress={onKeyPressHandler}
            type={type}
            min={props.min}
            max={props.max}
        />
    );
}
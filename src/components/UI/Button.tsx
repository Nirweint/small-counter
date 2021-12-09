import React from 'react';
import s from './Button.module.css';

type PropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const Button = ({name, callBack, disabled}: PropsType) => {

    const disabledStyle = disabled ? `${s.disabled} ${s.btn}` : `${s.btn}`;
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button className={disabledStyle} onClick={onClickHandler}>
            {name}
        </button>
    );
}
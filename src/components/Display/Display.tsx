import React from 'react';
import s from './Display.module.css'

type PropsType = {
    currentValue?: number
    maxValue: number
    change: boolean
    error: boolean
}

export const Display = ({currentValue, maxValue,change, error, ...props}: PropsType) => {

    const displayNumberStyle = maxValue === currentValue && change ? `${s.display} ${s.active}` : `${s.display}`

    return (
        <div className={displayNumberStyle}>
            {change ? currentValue : error || <span className={s.change}>Enter values and press 'set'</span>}
            {error && <span className={s.error}>Incorrect value!</span>}
        </div>
    );
}
import React from 'react';
import s from './Display.module.css'

type PropsType = {
    value: number
    maxValue: number
}

export const Display = ({value, maxValue, ...props}: PropsType) => {

    const displayNumberStyle = maxValue === value ? `${s.display} ${s.active}` : `${s.display}`

    return (
        <div className={displayNumberStyle}>
            {value}
        </div>
    );
}
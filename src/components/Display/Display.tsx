import React from 'react';
import s from './Display.module.css'

type PropsType = {
    value?: number
    maxValue: number
    change: boolean
    error: boolean
}

export const Display = ({value, maxValue,change, error, ...props}: PropsType) => {

    const displayNumberStyle = maxValue === value ? `${s.display} ${s.active}` : `${s.display}`

    return (
        <div className={displayNumberStyle}>
            {change ? value : error || <span className={s.change}>Enter values and press 'set'</span>}
            {error && <span className={s.error}>Incorrect value!</span>}
            {/*{error && change ? value : <span>Incorrect value!</span>}*/}
            {/*{!error && !change ? value : <span className={s.change}>Enter values and press 'set'</span>}*/}
        </div>
    );
}
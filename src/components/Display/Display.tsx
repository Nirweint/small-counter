import React from 'react';
import s from './Display.module.css'

type PropsType = {
    currentValue?: number
    maxValue: number
    editMode: boolean
    error: boolean
}

export const Display = ({currentValue, maxValue, editMode, error, ...props}: PropsType) => {

    const displayNumberStyle = maxValue === currentValue && !editMode ? `${s.display} ${s.active}` : `${s.display}`

    return (
        <div className={displayNumberStyle}>
            {!editMode ? currentValue : error || <span className={s.editMode}>Enter values and press 'set'</span>}
            {error && <span className={s.error}>Incorrect value!</span>}
        </div>
    );
}
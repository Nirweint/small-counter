import React from 'react';
import s from './Display.module.css'

type PropsType = {
    currentValue: number
    maxValue: number
    editMode: boolean
    error: boolean
}

export const Display = ({currentValue, maxValue, editMode, error}: PropsType) => {

    const displayNumberStyle = maxValue === currentValue && !editMode ? `${s.display} ${s.active}` : `${s.display}`
    const isEditModeOn = !editMode ? currentValue : error || <span className={s.editMode}>Enter values and press 'set'</span>
    const isErrorOn = error && <span className={s.error}>Incorrect value!</span>

    return (
        <div className={displayNumberStyle}>
            {isEditModeOn}
            {isErrorOn}
        </div>
    );
}
import React from 'react';
import {Display} from "../Display/Display";
import {Button} from "../UI/Button";
import {StateType} from "../../App";
import s from './Counter.module.css'

type CounterPropsType = {
    state: StateType
    increaseNumber: () => void
    resetNumber: () => void
    editMode: boolean
    error: boolean
}

export const Counter = ({state, increaseNumber, resetNumber, editMode, error, ...props}: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display
                currentValue={state.currentValue}
                maxValue={state.maxValue}
                editMode={editMode}
                error={error}
            />

            <div className={s.buttons}>
                <Button
                    name={'increase'}
                    callBack={increaseNumber}
                    disabled={state.currentValue === state.maxValue || editMode}
                />
                <Button
                    name={'reset'}
                    callBack={resetNumber}
                    disabled={state.currentValue === state.minValue || editMode}
                />
            </div>
        </div>
    );
}
import React from 'react';
import {Display} from "../Display/Display";
import {Button} from "../UI/Button";
import {StateType} from "../../App";
import s from './Counter.module.css'

type CounterPropsType = {
    state: StateType
    increaseNumber: () => void
    resetNumber: () => void
    change: boolean
    error: boolean
}

export const Counter = ({state, increaseNumber, resetNumber, change, error, ...props}: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display
                value={state.currentValue}
                maxValue={state.maxValue}
                change={change}
                error={error}
            />

            <div className={s.buttons}>
                <Button
                    name={'increase'}
                    callBack={increaseNumber}
                    disabled={state.currentValue === state.maxValue || !change}
                />
                <Button
                    name={'reset'}
                    callBack={resetNumber}
                    disabled={state.currentValue === state.minValue || !change}
                />
            </div>
        </div>
    );
}
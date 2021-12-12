import React from 'react';
import {Display} from "../Display/Display";
import {Button} from "../UI/Button";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../state/store";
import {increaseNumberAC, resetNumberAC} from "../../state/counter-reducer";
import {StateType} from "../../types/counter";

export const Counter: React.FC = () => {

    const state = useSelector<RootReducerType, StateType>(state => state.counter)
    const dispatch = useDispatch()

    const increaseNumber = () => {
        if (state.currentValue < state.maxValue) {
            dispatch(increaseNumberAC())
        }
    }
    const resetNumber = () => {
        dispatch(resetNumberAC())
    }
    const isButtonDisabled = (value: number) => {
        return state.currentValue === value || state.editMode
    }

    return (
        <div className={s.counter}>
            <Display
                currentValue={state.currentValue}
                maxValue={state.maxValue}
                editMode={state.editMode}
                error={state.error}
            />

            <div className={s.buttons}>
                <Button
                    name={'increase'}
                    callBack={increaseNumber}
                    disabled={isButtonDisabled(state.maxValue)}
                />
                <Button
                    name={'reset'}
                    callBack={resetNumber}
                    disabled={isButtonDisabled(state.minValue)}
                />
            </div>
        </div>
    );
}
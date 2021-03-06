import React, {useEffect} from 'react';
import {Button} from "../UI/Button";
import {Input} from "../UI/Input";
import s from './SettingsForCounter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
    getStateFromLocalStorageTC,
    resetNumberAC, setEditModeAC, setErrorAC,
    setMaxValueAC, setMaxValueToLocalStorageTC,
    setMinValueAC, setMinValueToLocalStorageTC,
    startedMinValue,
} from "../../state/counter-reducer";
import {RootReducerType} from "../../state/store";
import {StateType} from "../../types/counter";

export const SettingsForCounter: React.FC = () => {
    const dispatch = useDispatch()
    const state = useSelector<RootReducerType, StateType>(state => state.counter)
    useEffect(() => {
        dispatch(getStateFromLocalStorageTC())
        dispatch(setEditModeAC(false))
    }, [])

    const setMinValue = (value: number) => {
        if (value < startedMinValue || value >= state.maxValue) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setErrorAC(false))
        }
        dispatch(setEditModeAC(true))
        dispatch(setMinValueAC(value))
    }
    const setMaxValue = (value: number) => {
        if (value <= state.minValue) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setErrorAC(false))
        }
        dispatch(setMaxValueAC(value))
        dispatch(setEditModeAC(true))
    }
    const applySettingsHandler = () => {
        if (state.minValue !== state.maxValue && state.minValue >= startedMinValue && state.editMode) {
            dispatch(setMinValueToLocalStorageTC(state.minValue))
            dispatch(setMaxValueToLocalStorageTC(state.maxValue))
            dispatch(resetNumberAC())
            dispatch(setEditModeAC(false))
        }
    }

    const isButtonDisabled = !state.editMode || state.error || state.minValue < 0

    return (
        <div className={s.settings}>
            <div className={s.display}>
                <div className={s.items}>
                    <div className={s.item}>
                        <span>max value:</span>
                        <Input
                            type="number"
                            value={state.maxValue}
                            onChange={setMaxValue}
                            min={state.minValue}
                        />
                    </div>
                    <div className={s.item}>
                        <span>start value:</span>
                        <Input
                            type="number"
                            value={state.minValue}
                            onChange={setMinValue}
                            min={startedMinValue - 1}
                            max={state.maxValue}
                        />
                    </div>
                </div>
            </div>
            <Button name={'set'} callBack={applySettingsHandler} disabled={isButtonDisabled}/>
        </div>
    );
}
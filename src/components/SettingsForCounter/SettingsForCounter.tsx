import React, {useEffect} from 'react';
import {Button} from "../UI/Button";
import {Input} from "../UI/Input";
import s from './SettingsForCounter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
    applySettingsTC,
    resetNumberAC,
    setMaxValueAC,
    setMinValueAC,
    startedMinValueForError,
    StateType
} from "../../state/counter-reducer";
import {RootReducerType} from "../../state/store";
import {saveState} from "../../localStorage/localStorage";

type PropsType = {
    editMode: boolean
    error: boolean
    setError: (value: boolean) => void
    setEditMode: (value: boolean) => void
}

export const SettingsForCounter = ({setError, setEditMode, editMode, error}: PropsType) => {
    const dispatch = useDispatch()
    const state = useSelector<RootReducerType, StateType>(state => state.counter)
    useEffect(() => {
        dispatch(applySettingsTC())
        setEditMode(false)
    }, [])

    const setMinValue = (value: number) => {
        if (value < startedMinValueForError || value >= state.maxValue) {
            setError(true)
        } else {
            setError(false)
        }
        setEditMode(true)
        dispatch(setMinValueAC(value))
    }
    const setMaxValue = (value: number) => {
        if (value <= state.minValue) {
            setError(true)
        } else {
            setError(false)
        }
        dispatch(setMaxValueAC(value))
        setEditMode(true)
    }
    const applySettings = () => {
        if (state.minValue !== state.maxValue && state.minValue >= startedMinValueForError && editMode) {
            setMinValue(state.minValue)
            setMaxValue(state.maxValue)
            dispatch(resetNumberAC())
            setEditMode(false)
            saveState<number>('maxValue', state.maxValue)
            saveState<number>('minValue', state.minValue)
        }
    }


    return (
        <div className={s.settings}>
            <div className={s.display}>
                <div className={s.items}>
                    <div className={s.item}>
                        <span>max value:</span>
                        <Input
                            type="number"
                            value={state.maxValue}
                            setValue={setMaxValue}
                            min={state.minValue}
                        />
                    </div>
                    <div className={s.item}>
                        <span>start value:</span>
                        <Input
                            type="number"
                            value={state.minValue}
                            setValue={setMinValue}
                            min={startedMinValueForError - 1}
                            max={state.maxValue}
                        />
                    </div>
                </div>
            </div>
            <Button name={'set'} callBack={applySettings} disabled={!editMode || error}/>
        </div>
    );
}
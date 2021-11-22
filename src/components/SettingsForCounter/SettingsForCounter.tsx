import React from 'react';
import {Button} from "../UI/Button";
import {Input} from "../UI/Input";
import {StateType} from "../../App";
import s from './SettingsForCounter.module.css';

type PropsType = {
    startedMinValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    onSet: () => void
    state: StateType
    editMode: boolean
    error: boolean
}

export const SettingsForCounter = ({
                                       startedMinValue, state, editMode,
                                       error, setMinValue, setMaxValue, onSet, ...props
                                   }: PropsType) => {

    const setMinValueHandler = (value: number) => {
        setMinValue(value)
    }
    const setMaxValueHandler = (value: number) => {
        setMaxValue(value)
    }
    const onSetHandler = () => {
            onSet()
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
                            setValue={setMaxValueHandler}
                            min={state.minValue}
                        />
                    </div>

                    <div className={s.item}>
                        <span>start value:</span>
                        <Input
                            type="number"
                            value={state.minValue}
                            setValue={setMinValueHandler}
                            min={startedMinValue - 1}
                            max={state.maxValue}
                        />
                    </div>

                </div>
            </div>
            <Button name={'set'} callBack={onSetHandler} disabled={!editMode || error}/>
        </div>
    );
}
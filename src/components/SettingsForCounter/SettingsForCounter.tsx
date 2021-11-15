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
    change: boolean
    error: boolean
}

export const SettingsForCounter = ({startedMinValue, ...props}: PropsType) => {

    const setMinValueHandler = (value: number) => {
        props.setMinValue(value)

    }
    const setMaxValueHandler = (value: number) => {
        props.setMaxValue(value)
    }

    const onSetHandler = () => {
        props.onSet()
    }


    return (
        <div className={s.settings}>
            <div className={s.display}>
                <div className={s.items}>

                    <div className={s.item}>
                        <span>max value:</span>
                        <Input
                            type="number"
                            value={props.state.maxValue}
                            setValue={setMaxValueHandler}
                            min={props.state.minValue}
                        />
                    </div>

                    <div className={s.item}>
                        <span>start value:</span>
                        <Input
                            type="number"
                            value={props.state.minValue}
                            setValue={setMinValueHandler}
                            min={startedMinValue - 1}
                            max={props.state.maxValue}
                        />
                    </div>

                </div>
            </div>
            <Button name={'set'} callBack={onSetHandler} disabled={props.change || props.error}/>
        </div>
    );
}
import React, {useEffect, useState} from 'react';
import './App.css';
import {SettingsForCounter} from "./components/SettingsForCounter/SettingsForCounter";
import {Counter} from "./components/Counter/Counter";

export type StateType = {
    minValue: number
    maxValue: number
    currentValue: number
}

export const App = () => {

    const startedMinValue = 0;
    const startedMaxValue = 5;

    const initState: StateType = {
        minValue: startedMinValue,
        maxValue: startedMaxValue,
        currentValue: startedMinValue,
    }


    let [state, setState] = useState<StateType>(initState)
    let [change, setChange] = useState<boolean>(true)
    let [error, setError] = useState<boolean>(false)

    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(state.minValue))
    //     localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
    //     localStorage.setItem('currentValue', JSON.stringify(state.currentValue))
    // }, [])

    const increaseNumber = () => {
        if (state.currentValue < state.maxValue) {
            setState({...state, currentValue: state.currentValue + 1})
        }
    }
    const resetNumber = () => {
        setState({...state, currentValue: state.minValue})
    }
    const setMinValue = (value: number) => {
        if (value < startedMinValue || value >= state.maxValue) {
            setError(true)
        } else {
            setError(false)
        }
        setChange(false)
        setState({...state, minValue: value})
    }

    const setMaxValue = (value: number) => {
        if (value <= state.minValue ) {
            setError(true)
        } else {
            setError(false)
        }
        setState({...state, maxValue: value})
        setChange(false)
    }

    const onSet = () => {
        if (state.minValue !== state.maxValue) {
            setMinValue(state.minValue)
            setMaxValue(state.maxValue)
            resetNumber()
            setChange(true)
        }
    }

    return (
        <div className={"app"}>

            <SettingsForCounter
                startedMinValue={startedMinValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                onSet={onSet}
                state={state}
                change={change}
                error={error}
            />
            <Counter
                state={state}
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
                change={change}
                error={error}
            />

        </div>
    );
}


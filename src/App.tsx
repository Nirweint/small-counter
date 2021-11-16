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

    const startedMinValueForError = 0; // min value to catch error with negative integer
    const startedMaxValue = 5;

    const initState: StateType = {
        minValue: startedMinValueForError,
        maxValue: startedMaxValue,
        currentValue: startedMinValueForError,
    }

    const [state, setState] = useState<StateType>(initState)
    const [change, setChange] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const minValueFromLocalstorage = localStorage.getItem('minValue')
        const maxValueFromLocalstorage = localStorage.getItem('maxValue')

        if (minValueFromLocalstorage && maxValueFromLocalstorage) {
            const minValue = JSON.parse(minValueFromLocalstorage)
            const maxValue = JSON.parse(maxValueFromLocalstorage)

            setState({...state, minValue, maxValue, currentValue: minValue})
        }
    }, [])

    const increaseNumber = () => {
        if (state.currentValue < state.maxValue) {
            setState({...state, currentValue: state.currentValue + 1})
        }
    }
    const resetNumber = () => {
        setState({...state, currentValue: state.minValue})
    }
    const setMinValue = (value: number) => {
        if (value < startedMinValueForError || value >= state.maxValue) {
            setError(true)
        } else {
            setError(false)
        }
        setChange(false)
        setState({...state, minValue: value})
    }
    const setMaxValue = (value: number) => {
        if (value <= state.minValue) {
            setError(true)
        } else {
            setError(false)
        }
        setState({...state, maxValue: value})
        setChange(false)
    }
    const onSet = () => {
        if (state.minValue !== state.maxValue && state.minValue >= startedMinValueForError) {
            setMinValue(state.minValue)
            setMaxValue(state.maxValue)
            resetNumber()
            setChange(true)

            localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
            localStorage.setItem('minValue', JSON.stringify(state.minValue))
        }
    }

    return (
        <div className={"app"}>

            <SettingsForCounter
                startedMinValue={startedMinValueForError}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                onSet={onSet}
                state={state}
                change={change}
                error={error}
            />
            <Counter
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
                state={state}
                change={change}
                error={error}
            />

        </div>
    );
}


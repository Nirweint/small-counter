import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/UI/Button";
import {Display} from "./components/Display/Display";

export const App = () => {

    const minValue = 0;
    const maxValue = 5;

    let [state, setState] = useState<number>(minValue)

    const increaseNumber = () => {
        if (state < maxValue) {
            setState(state + 1)
        }
    }
    const resetNumber = () => {
        setState(0)
    }

    return (
        <div className={"app"}>
            <div className={'counter'}>
                <Display
                    value ={state}
                    maxValue={maxValue}
                />
                <div className={'buttons'}>
                    <Button
                        name={'increase'}
                        callBack={increaseNumber}
                        disabled={state === maxValue}
                    />
                    <Button
                        name={'reset'}
                        callBack={resetNumber}
                        disabled={state === minValue}
                    />
                </div>
            </div>
        </div>
    );
}


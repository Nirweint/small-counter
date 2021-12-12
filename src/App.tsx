import React from 'react';
import './App.css';
import {SettingsForCounter} from "./components/SettingsForCounter/SettingsForCounter";
import {Counter} from "./components/Counter/Counter";


export const App = () => {

    return (
        <div className={"app"}>
            <SettingsForCounter/>
            <Counter/>
        </div>
    );
}


import React, {useState} from 'react';
import './App.css';
import {SettingsForCounter} from "./components/SettingsForCounter/SettingsForCounter";
import {Counter} from "./components/Counter/Counter";


export const App = () => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    return (
        <div className={"app"}>
            <SettingsForCounter
                editMode={editMode}
                error={error}
                setError={setError}
                setEditMode={setEditMode}
            />
            <Counter
                editMode={editMode}
                error={error}
            />
        </div>
    );
}


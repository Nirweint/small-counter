import {
    increaseNumberAC,
    resetNumberAC,
    setCurrentValueAC, setEditModeAC, setErrorAC,
    setMaxValueAC,
    setMinValueAC
} from "../state/counter-reducer";

export enum COUNTER_ACTION_TYPES {
    INCREASE_NUMBER = "INCREASE_NUMBER",
    RESET_NUMBER = "RESET_NUMBER",
    SET_MIN_VALUE = "SET_MIN_VALUE",
    SET_MAX_VALUE = "SET_MAX_VALUE",
    SET_CURRENT_VALUE = "SET_CURRENT_VALUE",
    SET_EDIT_MODE = "SET_EDIT_MODE",
    SET_ERROR = "SET_ERROR",
}

export type StateType = {
    minValue: number
    maxValue: number
    currentValue: number
    editMode: boolean
    error: boolean
}

export type increaseNumberACType = ReturnType<typeof increaseNumberAC>
export type resetNumberACType = ReturnType<typeof resetNumberAC>
export type setMinValueACType = ReturnType<typeof setMinValueAC>
export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export type setCurrentValueACType = ReturnType<typeof setCurrentValueAC>
export type setEditModeACType = ReturnType<typeof setEditModeAC>
export type setErrorACType = ReturnType<typeof setErrorAC>


export type CounterActionTypes =
    increaseNumberACType
    | resetNumberACType
    | setMinValueACType
    | setMaxValueACType
    | setCurrentValueACType
    | setEditModeACType
    | setErrorACType
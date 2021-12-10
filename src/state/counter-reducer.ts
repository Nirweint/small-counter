import {Dispatch} from "redux";
import {restoreState} from "../localStorage/localStorage";

export type StateType = {
    minValue: number
    maxValue: number
    currentValue: number
}

export const startedMinValue = 0; // min value to catch error with negative integer
const startedMaxValue = 5;

const initialState: StateType = {
    minValue: startedMinValue,
    maxValue: startedMaxValue,
    currentValue: startedMinValue,
}

type rootActionsType =
    increaseNumberACType
    | resetNumberACType
    | setMinValueACType
    | setMaxValueACType
    | setCurrentValueACType

export const counterReducer = (state = initialState, action: rootActionsType): StateType => {
    switch (action.type) {
        case "INCREASE-NUMBER": {
            return {...state, currentValue: state.currentValue + 1}
        }
        case "RESET-NUMBER": {
            return {...state, currentValue: state.minValue}
        }
        case "SET-MIN-VALUE": {
            return {...state, minValue: action.value}
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.value}
        }
        case "SET-CURRENT-VALUE": {
            return {...state, currentValue: action.value}
        }
        default: {
            return state
        }
    }
}

// THUNK
export const applySettingsTC = () => (dispatch: Dispatch) => {
    dispatch(setMinValueAC(restoreState('minValue', startedMinValue)))
    dispatch(setMaxValueAC(restoreState('maxValue', startedMaxValue)))
    dispatch(setCurrentValueAC(restoreState('minValue', startedMinValue)))
}


// ACTION CREATORS
export type increaseNumberACType = ReturnType<typeof increaseNumberAC>
export const increaseNumberAC = () => {
    return {
        type: "INCREASE-NUMBER"
    } as const
}

export type resetNumberACType = ReturnType<typeof resetNumberAC>
export const resetNumberAC = () => {
    return {
        type: "RESET-NUMBER"
    } as const
}

export type setMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (value: number) => {
    return {
        type: "SET-MIN-VALUE",
        value,
    } as const
}

export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => {
    return {
        type: "SET-MAX-VALUE",
        value,
    } as const
}

export type setCurrentValueACType = ReturnType<typeof setCurrentValueAC>
export const setCurrentValueAC = (value: number) => {
    return {
        type: "SET-CURRENT-VALUE",
        value,
    } as const
}
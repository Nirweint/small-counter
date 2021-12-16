import {Dispatch} from "redux";
import {restoreState, saveState} from "../localStorage/localStorage";
import {COUNTER_ACTION_TYPES, CounterActionTypes, StateType} from "../types/counter";

export const startedMinValue = 0; // min value to catch error with negative integer
const startedMaxValue = 5;

const initialState: StateType = {
    minValue: startedMinValue,
    maxValue: startedMaxValue,
    currentValue: startedMinValue,
    editMode: false,
    error: false,
}


export const counterReducer = (state = initialState, action: CounterActionTypes): StateType => {
    switch (action.type) {
        case COUNTER_ACTION_TYPES.INCREASE_NUMBER: {
            return {...state, currentValue: state.currentValue + 1}
        }
        case COUNTER_ACTION_TYPES.RESET_NUMBER: {
            return {...state, currentValue: state.minValue}
        }
        case COUNTER_ACTION_TYPES.SET_MIN_VALUE: {
            return {...state, minValue: action.payload}
        }
        case COUNTER_ACTION_TYPES.SET_MAX_VALUE: {
            return {...state, maxValue: action.payload}
        }
        case COUNTER_ACTION_TYPES.SET_CURRENT_VALUE: {
            return {...state, currentValue: action.payload}
        }
        case COUNTER_ACTION_TYPES.SET_EDIT_MODE: {
            return {...state, editMode: action.payload}
        }
        case COUNTER_ACTION_TYPES.SET_ERROR: {
            return {...state, error: action.payload}
        }
        default: {
            return state
        }
    }
}

// THUNK
export const getStateFromLocalStorageTC = () => (dispatch: Dispatch<CounterActionTypes>) => {
    dispatch(setMinValueAC(restoreState('minValue', startedMinValue)))
    dispatch(setMaxValueAC(restoreState('maxValue', startedMaxValue)))
    dispatch(setCurrentValueAC(restoreState('minValue', startedMinValue)))
}
export const setMinValueToLocalStorageTC = (minValue: number) => (dispatch: Dispatch<CounterActionTypes>) => {
    saveState<number>('minValue', minValue)
    dispatch(setMinValueAC(minValue))
}
export const setMaxValueToLocalStorageTC = (maxValue: number) => (dispatch: Dispatch<CounterActionTypes>) => {
    saveState<number>('maxValue', maxValue)
    dispatch(setMaxValueAC(maxValue))
}




// ACTION CREATORS
export const increaseNumberAC = () => {
    return {
        type: COUNTER_ACTION_TYPES.INCREASE_NUMBER
    } as const
}

export const resetNumberAC = () => {
    return {
        type: COUNTER_ACTION_TYPES.RESET_NUMBER
    } as const
}

export const setMinValueAC = (payload: number) => {
    return {
        type: COUNTER_ACTION_TYPES.SET_MIN_VALUE,
        payload,
    } as const
}

export const setMaxValueAC = (payload: number) => {
    return {
        type: COUNTER_ACTION_TYPES.SET_MAX_VALUE,
        payload,
    } as const
}

export const setCurrentValueAC = (payload: number) => {
    return {
        type: COUNTER_ACTION_TYPES.SET_CURRENT_VALUE,
        payload,
    } as const
}

export const setEditModeAC = (payload: boolean) => {
    return {
        type: COUNTER_ACTION_TYPES.SET_EDIT_MODE,
        payload,
    } as const
}

export const setErrorAC = (payload: boolean) => {
    return {
        type: COUNTER_ACTION_TYPES.SET_ERROR,
        payload,
    } as const
}
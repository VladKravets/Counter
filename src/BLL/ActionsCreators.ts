export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'
export const SET_MIN_VALUE = 'SET_MIN_VALUE'
export const SET_MAX_VALUE = 'SET_MAX_VALUE'
export const SET_MIN_VALUE_TO_COUNTER = 'SET_MIN_VALUE_TO_COUNTER'
export const SET_DISABLE_INC_RESET = 'SET_DISABLE_INC_RESET'
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
export const SET_ERROR = 'SET_ERROR'
export const SET_MESSAGE = 'SET_MESSAGE'

export const IncrementAC = () => ({ type: INCREMENT } as const)
export const ResetAC = () => ({ type: RESET } as const)
export const SetMinValueAC = (valueMin: number, disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean) => ({ type: SET_MIN_VALUE, valueMin, disableBtnSet, disableBtnInc, disableBtnReset } as const)
export const SetMaxValueAC = (valueMax: number, disableBtnSet: boolean,  disableBtnInc: boolean, disableBtnReset: boolean) => ({ type: SET_MAX_VALUE, valueMax, disableBtnSet, disableBtnInc, disableBtnReset } as const)
export const SetMinValueToCounterAC = (valueMin: number,  disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean ) => ({ type: SET_MIN_VALUE_TO_COUNTER,  valueMin, disableBtnSet, disableBtnInc, disableBtnReset} as const)
export const DisabledIncResetAC = (disableBtnInc: boolean, disableBtnReset: boolean) => ({ type: SET_DISABLE_INC_RESET, disableBtnInc, disableBtnReset} as const)
export const setErrorMessageAC = (errorMessage: string) => ({ type: SET_ERROR_MESSAGE, errorMessage } as const)
export const setErrorAC = (error: boolean, disableBtnSet: boolean) => ({ type: SET_ERROR, error, disableBtnSet } as const)
export const setMessageAC = (message: string) => ({ type: SET_MESSAGE, message } as const)

type IncrementActionType = ReturnType<typeof IncrementAC>
type ResetActionType = ReturnType<typeof ResetAC>
type SetMinValueType = ReturnType<typeof SetMinValueAC>
type SetMaxValueType = ReturnType<typeof SetMaxValueAC>
type SetMaxValueToCounterType = ReturnType<typeof SetMinValueToCounterAC>
type DisabledIncResetType = ReturnType<typeof DisabledIncResetAC>
type setErrorMessageType = ReturnType<typeof setErrorMessageAC>
type setErrorType = ReturnType<typeof setErrorAC>
type setMessageType = ReturnType<typeof setMessageAC>

export type ActionsType =
    IncrementActionType
    | ResetActionType
    | SetMinValueType
    | SetMaxValueType
    | SetMaxValueToCounterType
    | DisabledIncResetType
    | setErrorType
    | setMessageType
    | setErrorMessageType
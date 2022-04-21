const initialState = {
    counterValue: 0,
    minValue: 0,
    maxValue: 5,
    disableBtnSet: true,
    disableBtnReset: false,
    disableBtnInc: false,
    errorMessage: 'Invalid error!',
    message: '',
    error: false
}

type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counterValue: action.counterValue +1
            }
        case RESET:
            return {
                ...state,
                counterValue: action.minValue
            }
        case "SET-COUNT-FROM-LS":
            return {
                ...state, value: action.value
            }
        default:
            return state
    }
}


export const incValueAC = () => ({type: 'INC-COUNT'} as const)
export const setValueAC = (value: number) => ({
    type: 'SET-COUNT-FROM-LS',
    value
} as const)





export type IncrementCounterValueType = ReturnType<typeof incValueAC>
export type SetCounterValueType = ReturnType<typeof setValueAC>
export type ActionsType = IncrementCounterValueType | SetCounterValueType
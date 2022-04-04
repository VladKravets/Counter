export const initialState = {
    value: 0
}

type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INC-COUNT":
            return {
                ...state, value: state.value + 1
            }
        default:
            return state
    }
}


export const incValueAC = () => ({type: 'INC-COUNT'} as const)
export type IncrementCounterValueType = ReturnType<typeof incValueAC>
export type ActionsType = IncrementCounterValueType
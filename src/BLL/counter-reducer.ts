import {
    ActionsType,
    INCREMENT,
    RESET,
    SET_DISABLE_INC_RESET, SET_ERROR, SET_ERROR_MESSAGE,
    SET_MAX_VALUE, SET_MESSAGE,
    SET_MIN_VALUE,
    SET_MIN_VALUE_TO_COUNTER
} from "./ActionsCreators";



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


export const counterReducer = (state: InitialStateType= initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case RESET:
            return {
                ...state,
                counterValue: state.minValue
            }
        case SET_MIN_VALUE:
            return {
                ...state,
                minValue: action.valueMin,
                disableBtnSet: action.disableBtnSet,
                disableBtnInc: action.disableBtnInc,
                disableBtnReset: action.disableBtnReset
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.valueMax,
                disableBtnSet: action.disableBtnSet,
                disableBtnInc: action.disableBtnInc,
                disableBtnReset: action.disableBtnReset
            }
        case SET_MIN_VALUE_TO_COUNTER:
            return {
                ...state,
                counterValue: action.valueMin,
                disableBtnSet: action.disableBtnSet,
                disableBtnInc: action.disableBtnInc,
                disableBtnReset: action.disableBtnReset
            }
        case SET_DISABLE_INC_RESET:
            return {
                ...state,
                disableBtnInc: !action.disableBtnInc,
                disableBtnReset: !action.disableBtnReset
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        case SET_ERROR_MESSAGE    :
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
                disableBtnSet: action.disableBtnSet,
            }
        default:
            return state
    }
}
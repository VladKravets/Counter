import React from 'react';
import './Settings.css';
import Settings from './Settings';
import {connect} from 'react-redux';
import {
    setErrorAC,
    setErrorMessageAC,
    SetMaxValueAC, setMessageAC,
    SetMinValueAC,
    SetMinValueToCounterAC
} from '../../BLL/ActionsCreators';
import {AppStateType} from '../../BLL/store';
import {Dispatch} from 'redux';


const mapStateToProps = (state: AppStateType) => {
    return {
        counterValue: state.counter.counterValue,
        minValue: state.counter.minValue,
        maxValue: state.counter.maxValue,
        disableBtnSet: state.counter.disableBtnSet,
        disableBtnReset: state.counter.disableBtnReset,
        disableBtnInc: state.counter.disableBtnInc,
        error: state.counter.error,
        message: state.counter.message
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setMinValue: (valueMin: number, disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean) => {
            dispatch(SetMinValueAC(valueMin, disableBtnSet, disableBtnInc, disableBtnInc))
        },

        setMaxValue: (valueMax: number, disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean) => {
            dispatch(SetMaxValueAC(valueMax, disableBtnSet, disableBtnInc, disableBtnReset))
        },
        setMinValueToCounterValue: (valueMin: number, disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean) => {
            dispatch(SetMinValueToCounterAC(valueMin, !disableBtnSet, !disableBtnInc, !disableBtnReset))
        },
        setMessage:(message: string) => {
            dispatch(setMessageAC(message))
        },
        errorMessage: (errorMessage: string) => {
            dispatch(setErrorMessageAC(errorMessage))
        },
        setError: (error: boolean, disableBtnSet: boolean) => {
            dispatch(setErrorAC(error, disableBtnSet))
        }
    }
}


const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;
import React, {ChangeEvent} from 'react';
import './Settings.css';

type SettingsPropsType = {
    disableBtnReset: boolean
    disableBtnInc: boolean
    minValue: number
    maxValue: number
    counterValue: number
    disableBtnSet: boolean
    setMinValue: (valueMin: number, disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean) => void
    setMaxValue: (valueMax: number, disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean) => void
    setMinValueToCounterValue: (valueMin: number, disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean) => void
    setMessage: (message: string) => void
    errorMessage: (message: string) => void
    setError: (error: boolean, disableBtnSet: boolean) => void
    error: boolean
    message: string
}

const Settings = (props: SettingsPropsType) => {

    const changeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMessage('enter values and press SET')
        const value = event.currentTarget.valueAsNumber;
        props.setMinValue(value, false, true, true)

        const maxValue  =  props.maxValue;
        if ( value > maxValue || value === maxValue || value < 0 || maxValue < 0 && value < maxValue ) {
            props.setError(true, true);
        } else {
            props.setError(false, false);
        }
    }
    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMessage('enter values and press SET')
        const value = +event.currentTarget.value;
        props.setMaxValue(value, false, true, true)

        const minValue  =  props.minValue;
        if (value < 0 || value === minValue || value < minValue || minValue < 0) {
            props.setError(true, true);
        } else {
            props.setError(false, false);
        }
    }

    const setMinValueToCounterValue = () => {
        props.setMinValueToCounterValue(props.minValue, props.disableBtnSet, props.disableBtnInc, props.disableBtnReset)
    }

    return (
        <div className="settings">
            <div className='settings__min'>
                <p className='settings__min-text'>min value:</p>
                <input className={ props.error ? 'value__min--error': 'value__min'} value={props.minValue} type={'number'} onChange={changeMinValue}/>
            </div>
            <div className='settings__max'>
                <p className='settings__min-text'>max value:</p>
                <input className={ props.error ? 'value__max--error': 'value__max'}  value={props.maxValue} type={'number'} onChange={changeMaxValue}/>
            </div>
            {/*<Button title='Set'/>*/}
            {/*<button className={'button'}  disabled={props.disableBtnSet} onClick={setMinValueToCounterValue}>SET</button>*/}
            <button className={'button'}  disabled={props.error ? true : props.disableBtnSet} onClick={setMinValueToCounterValue}>SET</button>
        </div>
    );
}

export default Settings;
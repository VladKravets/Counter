import React from 'react';
import Button from "../Button/Button";

type propsType = {
    counter: number
    incrementCounter: () => void
    resetCounter: () => void
    stopCount: boolean
}
const Counter: React.FC<propsType> = (
    {
        counter,
        incrementCounter,
        resetCounter,
        stopCount
    }) => {

    return (
        <div className={'Wrap'}>
            <div className={'displayWrap'}>
                <h2 className={`display ${stopCount ? 'redText' : ''}`}>{counter}</h2>
            </div>
            <div className={'counterButtonsWrap'}>
                <Button name={'inc'}
                        callback={incrementCounter}
                        disabled={stopCount}/>
                <Button name={'reset'}
                        callback={resetCounter}/>
            </div>

        </div>
    );
};

export default Counter;
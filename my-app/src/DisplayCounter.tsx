import React from 'react';

type DisplayPropsType = {
    counter: number
    minValue: number
    maxValue: number
}

const DisplayCounter: React.FC<DisplayPropsType> = (props) => {
    return (
        <div className={props.counter === props.maxValue ? 'max-counterValue' : 'counter-value'}>{props.counter}</div>
    );
};

export default DisplayCounter;

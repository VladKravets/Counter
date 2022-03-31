import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import DisplayCounter from "./components/DisplayCounter";
import Settings from "./components/Settings";


function App() {
    const [counter, setCounter] = useState(0)
    const [minValue, setMinValue] = useState(12)
    const [maxValue, setMaxValue] = useState(24)
    const setUpCounterHandler = () => {

        setCounter((actual) => actual + 1)

    }
    const resetCounter = () => {
        setCounter(minValue)
    }

    return (
        <div className="App">
            <div className={'settings'}>
                <Settings/>
            </div>
            <div className={'counter-block'}>
                <DisplayCounter counter={counter} minValue={minValue} maxValue={maxValue}/>
                <div className={'counter-buttons'}>
                    <Button disabled={counter === maxValue} name={'inc'} callback={setUpCounterHandler}/>
                    <Button disabled={counter === minValue} name={'reset'} callback={resetCounter}/>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;

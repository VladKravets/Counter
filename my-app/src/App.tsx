import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import DisplayCounter from "./DisplayCounter";

function App() {
    const [counter, setCounter] = useState(0)
    const maxValue = 5
    const minValue = 0
    const setUpCounterHandler = () => {

        setCounter((actual) => actual + 1)

    }
    const resetCounter = () => {
        setCounter(0)
    }
    return (
        <div className="App">
            <div className={'counter-block'}>
                <DisplayCounter counter={counter} minValue={minValue} maxValue={maxValue}/>
                <div className={'counter-buttons'}>
                    <Button disabled={counter === maxValue} name={'inc'} callback={setUpCounterHandler}/>
                    <Button disabled={counter === 0} name={'reset'} callback={resetCounter}/>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;

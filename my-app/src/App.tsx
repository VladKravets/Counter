import React, {useState} from 'react';
import './App.css';
import Button from "./Button";

function App() {
    const [counter, setCounter] = useState(0)
    const maxValueCounter = 5
    const setUpCounterHandler = () => {
        setCounter((actual) => actual + 1)
    }
    const resetCounter = () => {
        setCounter(0)
    }


    return (
        <div className="App">
            <div className={'counter-block'}>
                <div className={counter === maxValueCounter ? 'max-counterValue' : 'counter-value'}>{counter}</div>
                <div className={'counter-buttons'}>
                    <Button disabled={counter === maxValueCounter} name={'inc'} callback={setUpCounterHandler}/>
                    <Button disabled={counter !== maxValueCounter} name={'reset'} callback={resetCounter}/>
                </div>
            </div>
        </div>
    );
}

export default App;

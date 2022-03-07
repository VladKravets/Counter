import React, {ChangeEvent, useState} from 'react';
import Button from "./Button";
import s from './Settings.module.css'


const Settings = () => {
    const [value, setValue] = useState('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const setValueCounter = () => {
        localStorage.setItem('current value', JSON.stringify(value))
    }

    return (
        <div className={s.settingsBlock}>
            <div className={s.settingsText}>Max value:<input onChange={onChangeInput} type="number"/></div>
            <div className={s.settingsText}>Start value:<input type="number"/></div>
            <div className={s.settingsButtons}>
                <Button name={'set'} callback={setValueCounter}/>
            </div>
        </div>
    );
};

export default Settings;

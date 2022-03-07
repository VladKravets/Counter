import React from 'react';
import Button from "./Button";
import s from './Settings.module.css'

type SettingsPropsType = {
    counter: number
}

const Settings: React.FC<SettingsPropsType> = (counter) => {
    const setValueCounter = () => {
        localStorage.setItem('current value', JSON.stringify(counter))
    }

    return (
        <div className={s.settingsBlock}>
            <div className={s.settingsText}>Max value:<input type="number"/></div>
            <div className={s.settingsText}>Start value:<input type="number"/></div>
            <div className={s.settingsButtons}>
                <Button name={'set'} callback={setValueCounter}/>
            </div>
        </div>
    );
};

export default Settings;

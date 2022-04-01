import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {settingsType} from "../Counter/Counter";
import Button from "../Button/Button";

type propsType = {
    settings: settingsType
    setSettings: Dispatch<SetStateAction<settingsType>>
    error: string | null
    saveSettings: (startValue: number, maxValue: number) => void
}

const Settings: React.FC<propsType> = (
    {
        setSettings,
        settings,
        saveSettings,
        error
    }) => {

    const onStartValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            START_VALUE: +e.currentTarget.value
        })
    }
    const onMaxValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            MAX_VALUE: +e.currentTarget.value
        })

    }
    const setBtnHandler = () => {
        saveSettings(settings.START_VALUE, settings.MAX_VALUE)
    }

    return (
        <div className={'Wrap'}>
            <div className={'inputSettings displayWrap'}>
                <div>
                    <span>Start Value</span>
                    <input
                        className={'inputValue'}
                        value={settings.START_VALUE.toString()}
                        onChange={onStartValueInputChange}
                        type="number"/>
                </div>
                <div>
                    <span>Max Value</span>
                    <input
                        className={'inputValue'}
                        value={settings.MAX_VALUE.toString()}
                        onChange={onMaxValueInputChange}
                        type="number"/>
                </div>
            </div>
            <div className={'settingsBtnWrap displayWrap'}>
                <Button name={'set'} callback={setBtnHandler}/>
            </div>
            <div className={"errorField"}>
                {error}
            </div>
        </div>
    );
};

export default Settings;
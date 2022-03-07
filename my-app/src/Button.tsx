import React from "react";


export type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean | undefined
}

const Button: React.FC<ButtonPropsType> = ({callback,disabled,name}) => {
    const onClickHandler = () => {
        callback()
    }

    return <button disabled={disabled} onClick={onClickHandler}>{name}</button>
};
export default Button;
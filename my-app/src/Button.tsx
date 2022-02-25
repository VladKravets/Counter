import React from "react";


export type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean | undefined
}

const Button: React.FC<ButtonPropsType> = (props) => {
    const onClickHandler = () => {
        props.callback()
    }

    return <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
};
export default Button;
import React from 'react'
import './button.scss';

const SIZES = ['btn-small', 'btn-medium']

export const Button = ({
    onClick, type, children, buttonSize }) => {
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button onClick={onClick} type={type} className={`btn draw-border ${checkButtonSize}`}>
            {children}
        </button>
    )
}

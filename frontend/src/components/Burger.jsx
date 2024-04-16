import React from 'react'

const Burger = ({handleClick, isOpen}) => {
    return (
        <div className={`burger ${isOpen && "times"}`} onClick={handleClick}>
            <span></span><span></span><span></span>
        </div>
    )
}

export default Burger

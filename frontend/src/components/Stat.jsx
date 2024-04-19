import React from 'react'

const Stat = ({ number, text, image, alt}) => {
    return (
        <div className='stat'>
            <img src={`${image}.jpg`} alt={alt} />
            <div className="data">
                <b>{number}</b>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Stat

import React from 'react'

const PagesHero = ({image, text}) => {
    return (
        <div>
            <div className="pages-hero">
                <img src={image} alt="" />
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default PagesHero

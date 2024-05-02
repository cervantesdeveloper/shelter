import React from 'react'

const TeamCard = ({picture, name, position}) => {
    return (
        <figure className="team-card">
            <div className="team-card__media">
                <img src={picture} alt="" />
            </div>
            <div className="team-card__name">
                <h4>{name}</h4>
            </div>
            <p className="team-card__summary">
                {position}
            </p>
        </figure>
    )
}

export default TeamCard

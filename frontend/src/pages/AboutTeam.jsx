import React from 'react'
import TeamCard from '../components/TeamCard'

const AboutTeam = () => {
    return (
        <article className="article">
            <h1 className="article__header">
                Nuestro Equipo
            </h1>
            <p className="article__text">
                Conoce a nuestro equipo, fundadores y colaboradores.
            </p>
            <div className="adopt-dogs__gallery about-gallery">
                <TeamCard 
                    picture="https://picsum.photos/id/633/300/180"
                    name="Alex Mesa"
                    position="Fundador"
                />

                <TeamCard 
                    picture="https://picsum.photos/id/633/300/180"
                    name="Andy Antonieta"
                    position="Vice presidenta"
                />

                <TeamCard 
                    picture="https://picsum.photos/id/633/300/180"
                    name="Blake Gomez"
                    position="Mantenimeinto"
                />

                <TeamCard 
                    picture="https://picsum.photos/id/633/300/180"
                    name="Chace Gomez"
                    position="Mantenimeinto"
                />
            </div>
        </article>
    )
}

export default AboutTeam

import React from 'react'

const About = () => {
    return (
        <article className="container article article-about">
            <div className="contained">
                <h1 className="article__header">
                    ¿Quiénes somos?
                </h1>
                <p className='article__text'>
                    SANTUARIO es un refugio que provee hogar y cuidado veterinario a perros en estado de calle. Hemos estado cuidando de los perros de nuestra comunidad por más de 4 años.
                </p>
                <p className='article__text'>
                    Creemos que la relación entre humanos y animales tiene un profundo significado y hacemos un llamado a nuestra ciudad y a todos los demás para que tomen medidas. Juntos formamos un frente unido contra la crueldad y negligencia.
                </p>

                <div className="article__mision">
                    <p className='article__text'>
                        <b>La mision</b> de SANTUARIO es mejorar el bienestr de los perros de nuestra comunidad al proveer servicios de calidad, incluyendo iniciativas preventivas, educación, y adopción permanente dentro de hogares amorosos.
                    </p>
                    <p className='article__text'>
                        <b>La vision</b> de SANTUARIO es ser la organización lider para el bienestar y protección de animales de compañia en nuestra comunidad.
                    </p>
                </div>

            </div>
        </article>
    )
}

export default About

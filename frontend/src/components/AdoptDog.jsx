import React from 'react'

const AdoptDog = ({name, picture, gender, age, description, size, id}) => {
    const currentYear = new Date;

    console.log(currentYear.getFullYear());

    return (
        <>
            <h1 className="article__header">{name}</h1>
            <figure className="adopt-dog__card">
                <div className="adopt-dog__card-media">
                    <img src={picture} alt="name" />
                </div>
                <div className="adopt-dog__text">
                    <ul>
                        <li><b>Edad:</b> {`${currentYear.getFullYear() - age} años`}</li>
                        <li><b>Tamaño:</b> {size}</li>
                        <li><b>ID:</b> {id.slice(-4)}</li>
                        <li><b>Sexo:</b> {gender}</li>
                    </ul>
                </div>
            </figure>
            <p className="adopt-article__content">
                {
                    description
                }
            </p>
        </>
    )
}

export default AdoptDog

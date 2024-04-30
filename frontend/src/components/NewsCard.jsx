import React from 'react'
import TextLink from './TextLink'



const NewsCard = ({picture, title, date, summary, id}) => {

    let day = date.slice(8, 10),
        monthNumber = date.slice(5, 7),
        year = date.slice(0, 4);

    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

    let month = (monthNumber)=>{
        return months[parseInt(monthNumber) - 1]
    }

    return (
        <figure className='news-card'>
            <div className="news-card__media">
                <img src={picture}/>
            </div>
            <div className="news-card__title">
                <h4>{title}</h4>
            </div>
            <div className="news-card__summary">
                <p>{summary}</p>
            </div>
            <div className="news-card__date">
                <p>{`${day} de ${month(monthNumber)} del ${year}`}</p>
            </div>
            
            <TextLink text="Leer Más" link={`/news/${id}`}/>
        </figure>
    )
}

export default NewsCard

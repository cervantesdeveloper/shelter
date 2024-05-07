import React, {useState, useEffect} from 'react'

import NewsCard from "../components/NewsCard"
import IconLoading from '../components/IconLoading';

const News = () => {
    const [news, setNews] =  useState([]);
    const [loading, setLoading] =  useState(false);

    useEffect(()=>{
        setLoading(true);

        try {
            const getNews = async(link)=>{
                let res =  await fetch(link),
                    json =  await res.json();

                setNews(json.news)
                setLoading(false)
            }
            getNews("http://localhost:5555/api/news")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [])


    return (
        <section className="container news">
            <article className="contained">
                <h1 className="article__header">Entérate de lo que sucede con los perritos y el refugio.</h1>
            </article>
            <div className="contained news__list">
                
               {
                loading
                    ? <IconLoading />
                    : news.reverse().map(news =>{
                        return(
                            <NewsCard 
                                key={news._id}
                                picture={news.picture}
                                title={news.title}
                                date={news.createdAt}
                                id={news._id}
                                summary={news.content}
                            />
                        )
                    })
               }
                
            </div>

        </section>
    )
}

export default News

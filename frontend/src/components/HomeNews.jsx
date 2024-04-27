import React, {useEffect, useState} from 'react'

import ButtonLink from './ButtonLink'
import NewsCard from './NewsCard'
import IconLoading from './IconLoading';

const HomeNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);

        try {
            const getNews = async(link)=>{
                let res = await fetch(link),
                    json = await res.json();
    
                setNews(json.news)
                setLoading(false);
            }
            
            getNews("http://localhost:5555/api/news")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [])

    
    return (
        <section className="container">
            <div className="contained home-news">
                <div className="home-news__title">
                    <h3>Noticias</h3>
                    <p>
                        Entérate de lo que sucede con los perritos y el refugio.
                    </p>
                    <ButtonLink text={"Leer todo"} link={"/news"}/>
                </div>
                {
                    loading
                        ?   <IconLoading />
                        : (
                            <div className="home-news__content">
                                {
                                    news.reverse().slice(0, 3).map(news=>{
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
                        )
                }
            </div>
        </section>
    )
}

export default HomeNews

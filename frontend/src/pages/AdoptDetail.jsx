import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import IconLoading from '../components/IconLoading';
import AdoptDog from '../components/AdoptDog';

const AdoptDetail = () => {
    const [dog, setDog] = useState({});
    const [loading, setLoading] =  useState(false);
    const params = useParams();
    const id = params.id;

    useEffect(()=>{
        setLoading(true);
        try {
            const getDog =  async(link)=>{
                let res = await fetch(link),
                    json = await res.json();

                setDog(json)
                setLoading(false)
            }

            getDog(`http://localhost:5555/api/dogs/${id}`)
            console.log(dog)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [])

    
    return (
        <article className="article">
            {
                loading
                    ? <IconLoading />
                    : <AdoptDog 
                        name={dog.name}
                        picture={dog.picture}
                        gender={dog.gender}
                        age={dog.age}
                        description={dog.description}
                        size={dog.size}
                        id={id}
                    />
                        
            }
            
        </article>
    )
}

export default AdoptDetail

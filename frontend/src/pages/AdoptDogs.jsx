import React, {useState, useEffect} from 'react'

import AdoptCard from '../components/AdoptCard.jsx';
import IconLoading from '../components/IconLoading.jsx';

const AdoptDogs = () => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);

        try {
            const getDogs =  async(link)=>{
                let res = await fetch(link),
                    json = await res.json();

                setDogs(json.data)
                setLoading(false)
            }

            getDogs("http://localhost:5555/api/dogs")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }, [])

    return (
        <article className='adopt-article'>
            <h1 className="adopt-article__header"> Nuestros perros</h1>
            {
                loading
                ? <IconLoading />
                : (
                    <div className="adopt-dogs__gallery">
                        {
                            dogs.map(dog=>{
                                return(
                                    <AdoptCard 
                                        key={dog._id} 
                                        name={dog.name} 
                                        picture={dog.picture}
                                        age={dog.age}
                                        size={dog.size}
                                        genre={dog.gender}
                                        id={dog._id.slice(-4)}
                                        link={`../${dog._id}`}
                                    />
                                )
                            })
                            
                        }
                    </div>
                )
            }
            

        </article>
    )
}

export default AdoptDogs

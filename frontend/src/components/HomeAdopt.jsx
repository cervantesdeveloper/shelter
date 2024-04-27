import React, {useEffect, useState} from 'react';

import AdoptCard from './AdoptCard.jsx';
import IconLoading from './IconLoading.jsx';


const HomeAdopt = () => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(false);

    

    useEffect(()=>{
        setLoading(true);

        try {
            const getDogs = async(link)=>{
                let res = await fetch(link),
                    json = await res.json();
    
                setDogs(json.data)
                setLoading(false);
            }
    
            getDogs("http://localhost:5555/api/dogs")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }, []);
    
    return (
        <section className="container dark home-adopt">
            <div className="contained">
                <h3>Perros <span>Destacados</span></h3>
            </div>
            <div className="contained home-adopt__gallery">
                
                {
                    loading
                        ? <IconLoading /> 
                        : (
                            <div className="adopt-home__gallery">
                                {
                                    dogs.slice(0, 3).map(dog=>{
                                        return(
                                            <AdoptCard 
                                                key={dog._id} 
                                                name={dog.name} 
                                                picture={dog.picture}
                                                age={dog.age}
                                                size={dog.size}
                                                genre={dog.gender}
                                                id={dog._id.slice(-4)}
                                                link={dog._id}
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

export default HomeAdopt

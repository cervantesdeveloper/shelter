import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Stat from './Stat'

const StatsCarrousel = () => {
    const responsive = {
        
          desktopLarge: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4
          },
          desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },   
            items: 1
          }
    }
    

    return (
        
        <Carousel responsive={responsive}>
            <div>
                <Stat 
                    number={"150"}
                    text={"Perros a nuestro Cuidado"}
                    image={"stats_1"}
                    alt={"a crowd of happy dogs"}
                />
            </div>

            <div>
                <Stat 
                    number={"168"}
                    text={"Costales de croquetas al mes"}
                    image={"stats_2"}
                    alt={"they eat a lot"}
                />
            </div>

            <div>
                <Stat 
                    number={"$16,000MXN"}
                    text={"En gastos veterinarios por mes"}
                    image={"stats_3"}
                    alt={"sometimes they get sick"}

                />
            </div>

            <div>
                <Stat 
                    number={"30"}
                    text={"Perros dados en adopción"}
                    image={"stats_4"}
                    alt={"they will be a happpy family"}

                />
            </div>

            
        </Carousel>
        
    )
}

export default StatsCarrousel

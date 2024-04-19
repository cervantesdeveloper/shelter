import React from 'react'
import ButtonCTA from './ButtonCTA'

const HomeValues = () => {
  return (
    <section className="container dark home-values">
        <div className="contained">
            <div className="home-values__values">
                <div className="home-values_value">
                    <h3>Nuestra vision para el <span>futuro</span></h3>
                    <p>Nuestra visión es crear un santuario para perros que sirva como un refugio seguro y amoroso para todos los caninos necesitados. Nos esforzamos por construir instalaciones modernas y espaciosas que proporcionen comodidad y bienestar a cada perro que llega a nuestro santuario. </p>
                    <ButtonCTA text={"Conocenos"} link={"/about"}/>
                </div>

                <div className="home-values_value">
                    <h3>Ayudanos a <span>salvar</span> vidas</h3>
                    <p>¡Únete a nuestro equipo de voluntarios y sé parte del cambio positivo en la vida de los perros! Ya sea que puedas dedicar unas pocas horas a la semana o participar en eventos especiales, tu ayuda es invaluable para nosotros.!</p>
                    <ButtonCTA text={"Ser voluntario"} link={"/volunteering"}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeValues

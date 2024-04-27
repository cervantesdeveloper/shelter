import { Link } from "react-router-dom";


const AdoptCard = ({name, picture, age, size, genre, id, link}) => {
    let date = new Date;
    let calculatedAge = date.getFullYear() - parseInt(age);

    return (
        <div className={`card-adoption`}>
            <div className="card-adoption__title">
                <h4>{name}</h4>
            </div>
            <div className="card-adoption__picture">
                <img src={picture}/>
            </div>
            
            <div className="card-adoption__suporting-text">
                <ul >
                    <li>Edad: <span>{calculatedAge} años</span></li>
                    <li>Tamaño: <span>{size}</span></li>
                    <li>Sexo: <span>{genre}</span></li>
                    <li>ID: <span>{id}</span></li>
                </ul>
            </div> 

            <Link className="btn btn-outlined" to={`./adopt/${link}`}>Conoceme</Link>

        </div>
    )
}

export default AdoptCard

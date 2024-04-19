
import { Key } from "react"
import { Link } from "react-router-dom";

export type CardProps = {
    data: object
}


const Card = (data: {
    description: string;
    name: string; id: Key | null | undefined; owner: { avatar_url: string | undefined } 
}) => {
    
    return (
        <Link to={`/${data.name}`}>
            <li key={data.id} className="card">
                <img src={data.owner.avatar_url} alt="Картинка репозитория" />
                <div className="card__description">
                    <h3 className="card__title">{data.name}</h3>
                    <span className="card__description">{data.description}</span>
                </div>
            </li>
        </Link>
        
    )
}

export default Card
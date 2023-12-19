import { Link } from "react-router-dom"

const Polaroid = ({ id, thumbnail, name, area }) => {
    return (
    <Link className='Polaroid' to={`/recipe/${id}`}>
        <img src={thumbnail} />
        <span>{name}</span>
        <span>{area}</span>
    </Link>
    )
}

export default Polaroid
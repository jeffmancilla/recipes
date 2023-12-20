import { Link } from 'react-router-dom'

const Polaroid = ({ id, thumbnail, name, area }) => {
	return (
		<Link className="Polaroid" to={`/recipe/${id}`}>
			<img src={thumbnail} />
			<div>
				<span>{name}</span>
				<span>{area}</span>
			</div>
		</Link>
	)
}

export default Polaroid

import { Link } from 'react-router-dom'

const Polaroid = ({ id, thumbnail, name, area }) => {
	return (
		<Link className="Polaroid" to={`/recipe/${id}`}>
			<img src={thumbnail} />
			<a>{name}</a>
		</Link>
	)
}

export default Polaroid

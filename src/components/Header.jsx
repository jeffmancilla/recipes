import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import themealdb from '../utils/api/themealdb'

const Header = () => {
	const [categories, setCategories] = useState([])
	const [areas, setAreas] = useState([])

	useEffect(() => {
		themealdb.listCategories(setCategories)
		themealdb.listAreas(setAreas)
	}, [])

	const categoryDialog = document.querySelector('#categoryDialog')
	const areaDialog = document.querySelector('#areaDialog')

	const categoryLinks = categories?.map((category, idx) => (
		<Link onClick={() => categoryDialog.close()} key={idx} to={`/category/${category.strCategory}`}>
			<div>{category.strCategory}</div>
		</Link>
	))
	const areaLinks = areas?.map((area, idx) => (
		<Link onClick={() => areaDialog.close()} key={idx} to={`/cuisine/${area.strArea}`}>
			<li>{area.strArea}</li>
		</Link>
	))

	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Recipes</Link>
					</li>
					<li>
						<dialog id="categoryDialog" onMouseDown={(e) => e.target.id !== 'categoryDialog' ? null : categoryDialog.close()}>
							{categoryLinks}
						</dialog>
						<span onMouseUp={() => categoryDialog.showModal()}>Categories</span>
					</li>
					<li>
						<dialog  id="areaDialog" onMouseDown={(e) => e.target.id !== 'areaDialog' ? null : areaDialog.close()}>
							<ul>{areaLinks}</ul>
						</dialog>
						<span onMouseUp={() => areaDialog.showModal()}>Cuisine</span>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

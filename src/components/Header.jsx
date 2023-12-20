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

	const categoryLinks = categories?.map((category, idx) => (
		<Link key={idx} to={`/category/${category.strCategory}`}>
			<div>{category.strCategory}</div>
		</Link>
	))
	const areaLinks = areas?.map((area, idx) => (
		<Link key={idx} to={`/cuisine/${area.strArea}`}>
			<li>{area.strArea}</li>
		</Link>
	))

	const categoryDialog = document.querySelector('#categoryDialog')
	const areaDialog = document.querySelector('#areaDialog')

	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Recipes</Link>
					</li>
					<li>
						<dialog onClick={() => categoryDialog.close()} id="categoryDialog">
							{categoryLinks}
						</dialog>
						<span onClick={() => categoryDialog.showModal()}>Categories</span>
					</li>
					<li>
						<dialog onClick={() => areaDialog.close()} id="areaDialog">
							<ul>{areaLinks}</ul>
						</dialog>
						<span onClick={() => areaDialog.showModal()}>Cuisine</span>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

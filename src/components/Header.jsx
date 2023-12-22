import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import themealdb from '../utils/api/themealdb'
import Filter from './Filter'

const Header = () => {
	const [categories, setCategories] = useState([])
	const [areas, setAreas] = useState([])

	useEffect(() => {
		themealdb.listCategories(setCategories)
		themealdb.listAreas(setAreas)
	}, [])

	const categoryLinks = categories?.map((category, idx) => (
		<li key={idx}>
			<Link to={`/category/${category.strCategory}`}>
				{category.strCategory}
			</Link>
		</li>
	))
	const areaLinks = areas?.map((area, idx) => (
		<li key={idx}>
			<Link to={`/cuisine/${area.strArea}`}>{area.strArea}</Link>
		</li>
	))

	return (
		<>
			<header className="Header">
				<nav id="primary">
					<ul>
						<li>
							<Link className="center-svg" to="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="accent"
								>
									<path
										fill="currentColor"
										d="M12.5 1.5c-1.77 0-3.33 1.17-3.83 2.87C8.14 4.13 7.58 4 7 4a4 4 0 0 0-4 4a4.01 4.01 0 0 0 3 3.87V19h13v-7.13c1.76-.46 3-2.05 3-3.87a4 4 0 0 0-4-4c-.58 0-1.14.13-1.67.37c-.5-1.7-2.06-2.87-3.83-2.87m-.5 9h1v7h-1zm-3 2h1v5H9zm6 0h1v5h-1zM6 20v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1z"
									/>
								</svg>
							</Link>
						</li>
						<li className="dropdown">
							<a>Categories</a>
							<nav
								className="dropdown-content"
								aria-label="category"
								id="category"
							>
								<ul>{categoryLinks}</ul>
							</nav>
						</li>
						<li className="dropdown">
							<a>Cuisine</a>
							<nav className="dropdown-content" aria-label="area" id="area">
								<ul>{areaLinks}</ul>
							</nav>
						</li>
					</ul>
					<Filter />
				</nav>
			</header>
		</>
	)
}

export default Header

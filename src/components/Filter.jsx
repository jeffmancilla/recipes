import { useEffect, useState } from "react"
import themealdb from "../utils/api/themealdb"

const Filter = () => {

	const [meals, setMeals] = useState([])
	const [query, setQuery] = useState('')

	useEffect(()=>{
		themealdb.searchMeals(query,setMeals)
	},[query])
	
	const handleChange = (e) => {
		console.log(e.target.value)
		setQuery(e.target.value)	
	}

	return (
		<section className="Filter">
			{console.log(meals)}
			<search className="svg-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
					/>
				</svg>
				<input
					onChange={(e) => handleChange(e)}
					type="search"
					placeholder="what are we making today?"
					value={query}
				></input>
			</search>
		</section>
	)
}

export default Filter

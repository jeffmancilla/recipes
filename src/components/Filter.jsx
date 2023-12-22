/**
 *
 * @typedef {Object} Meal
 * @property {number} idMeal: "52929"
 * @property {string} strArea: "Canadian"
 * @property {string} strCategory: "Dessert"
 * @property {string=} strCreativeCommonsConfirmed: null
 * @property {string=} strDrinkAlternate: null
 * @property {string=} strImageSource: null
 * @property {string=} strIngredient1: "Flour"
 * @property {string=} strIngredient2: "Sugar"
 * @property {string=} strIngredient3: "Baking Powder"
 * @property {string=} strIngredient4: "Salt"
 * @property {string=} strIngredient5: "Egg"
 * @property {string=} strIngredient6: "Milk"
 * @property {string=} strIngredient7: "Oil"
 * @property {string=} strIngredient8: "Oil"
 * @property {string=} strIngredient9: "Icing Sugar"
 * @property {string=} strIngredient10: ""
 * @property {string=} strIngredient11: ""
 * @property {string=} strIngredient12: ""
 * @property {string=} strIngredient13: ""
 * @property {string=} strIngredient14: ""
 * @property {string=} strIngredient15: ""
 * @property {string=} strIngredient16: ""
 * @property {string=} strIngredient17: ""
 * @property {string=} strIngredient18: ""
 * @property {string=} strIngredient19: ""
 * @property {string=} strIngredient20: ""
 * @property {string} strInstructions: "Sift together dry ingredients.\r↵Mix together wet ingredients and incorporate into dry. Stir until smooth.\r↵Drop by teaspoonfuls(no bigger…"
 * @property {string=} strMeal: "Timbits"
 * @property {string=} strMealThumb: "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg"
 * @property {string=} strMeasure1: "2 cups "
 * @property {string=} strMeasure2: "1/3 cup"
 * @property {string=} strMeasure3: "3 tsp"
 * @property {string=} strMeasure4: "½ tsp"
 * @property {string=} strMeasure5: "1 beaten"
 * @property {string=} strMeasure6: "¾ cup"
 * @property {string=} strMeasure7: "3 tbs"
 * @property {string=} strMeasure8: "for frying"
 * @property {string=} strMeasure9: "garnish"
 * @property {string=} strMeasure10: ""
 * @property {string=} strMeasure11: ""
 * @property {string=} strMeasure12: ""
 * @property {string=} strMeasure13: ""
 * @property {string=} strMeasure14: ""
 * @property {string=} strMeasure15: ""
 * @property {string=} strMeasure16: ""
 * @property {string=} strMeasure17: ""
 * @property {string=} strMeasure18: ""
 * @property {string=} strMeasure19: ""
 * @property {string=} strMeasure20: ""
 * @property {string=} strSource: "http://www.geniuskitchen.com/recipe/drop-doughnuts-133877"
 * @property {string=} strTags: "Snack,Treat"
 * @property {string=} strYoutube: "https://www.youtube.com/watch?v=fFLn1h80AGQ"
 */

import { useEffect, useState } from 'react'
import themealdb from '../utils/api/themealdb'
import { useNavigate } from 'react-router-dom'

const Filter = () => {
	const [meals, setMeals] = useState([])
	const [query, setQuery] = useState('')

	useEffect(() => {
		if (query) {
			themealdb.searchMeals(query, setMeals)
		} else {
			setMeals([])
		}
	}, [query])

	const navigate = useNavigate()

	const handleChange = (e) => {
		setQuery(e.target.value)
	}

	const handleClick = (id) => {
		navigate(`/recipe/${id}`)
		setMeals([])
		setQuery('')
	}

	const recipeLinks = meals?.map(
		/**
		 *
		 * @param {Meal} meal
		 * @param {number} idx
		 * @returns
		 */
		(meal, idx) => (
			<li key={idx} onClick={() => handleClick(meal.idMeal)}>
				<a>{meal.strMeal}</a>
				<img src={meal.strMealThumb} />
			</li>
		)
	)

	return (
		<div className="Filter dropdown">
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
			<div className="dropdown-content" aria-label="meal" id="recipe">
				<ul>{recipeLinks}</ul>
			</div>
		</div>
	)
}

export default Filter

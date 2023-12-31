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
import { Link } from 'react-router-dom'

const Home = () => {
	/**
	 * @type {[Meal, Function]} meal
	 */
	const [meal, setMeal] = useState({})
	useEffect(() => {
		themealdb.randomMeal(setMeal)
	}, [])
	return (
		<div className="Home">
			<section><div className="hero"><h1>Make your meals from scratch.</h1></div></section>
			<section>
				<div className="random">
					<div>
						<Link to={`/recipe/${meal.idMeal}`}>
							<span>Random Recipe</span>
							<h2>{meal.strMeal}</h2>
							<p>{meal.strArea}</p>
						</Link>
					</div>
					<Link to={`/recipe/${meal.idMeal}`}>
						<img src={meal.strMealThumb} alt={meal.strMeal} />
					</Link>
				</div>
			</section>
		</div>
	)
}

export default Home

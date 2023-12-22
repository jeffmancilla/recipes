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

/**
 * @typedef {Object} Ingredients
 * @property {string} name
 * @property {string} measure
 */

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import theMealDB from '../utils/api/themealdb'

const Recipe = () => {
	/**
	 * @type {[Meal, Function]}
	 */
	const [meal, setMeal] = useState({})
	const [ingredients, setIngredients] = useState([])
	const { id } = useParams()

	useEffect(() => {
		theMealDB.lookupMeal(id, setMeal, setIngredients)
	}, [id])

	const renderYTEmbed = () => {
		console.log(meal.strYoutube)
		let embedCode = meal.strYoutube.split('v=')[1]
		console.log(`https://www.youtube.com/embed/_${embedCode}`)
		return (
			<iframe
				width="100%"
				height="100%"
				src={`https://www.youtube.com/embed/${embedCode}`}
				title="YouTube video player"
				// frameBorder is deprecated, rip
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		)
	}

	return (
		<div className="Recipe">
			<h1>{meal.strMeal}</h1>
			<section>
				<img src={meal.strMealThumb} />
				{/* worth doing pills for these meal tags? data isnt very consistent with giving quality or a value for that matter :(  */}
				{/* <span>{meal.strTags}</span> */}
			</section>
			<section>
				<h2>Ingredients</h2>
				{ingredients?.map((ingredient, idx) => (
					<div key={idx}>
						<label htmlFor={`ingredient${idx}`}>
							<input type="checkbox" id={`ingredient${idx}`} />
							{ingredient.measure} <strong>{ingredient.name}</strong>
						</label>
					</div>
				))}
			</section>
			<section className="instructions">
				<h2>Instructions</h2>
				<p>{meal.strInstructions}</p>
			</section>
			<section className="video">
				{meal.strYoutube ? renderYTEmbed() : null}
			</section>{' '}
		</div>
	)
}

export default Recipe

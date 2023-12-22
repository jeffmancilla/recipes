// api docs: https://www.themealdb.com/api.php
const url = `https://www.themealdb.com/api/json/v1/${import.meta.env.VITE_THEMEALDB_API_KEY}`

const fetchData = async (params) => {
    try {
        const response = await fetch(`${url}/${params}`)
        if (response.status !== 200) {
            throw new Error (`Error (${response.status}): ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (err) {
        return err
    }
}

export default {
    searchMeals: async (query, mealsCB) => {
        const data = await fetchData(`/search.php?s=${query}`)
        return mealsCB(data.meals)
    },
    randomMeal: async (mealCB) => {
        const data = await fetchData(`/random.php`)
        return mealCB(data.meals[0])
    },
    filterByCategory: async (query, mealsCB, filterCB) => {
        const data = await fetchData(`/filter.php?c=${query}`)
        filterCB('')
        return mealsCB(data.meals)
    },
    filterByArea: async (query, mealsCB, filterCB) => {
        const data = await fetchData(`/filter.php?a=${query}`)
        filterCB('')
        return mealsCB(data.meals)
    },
    lookupMeal: async (id, detailsCB, ingredientsCB) => {
        const data = await fetchData(`/lookup.php?i=${id}`)
        const result = data.meals[0]
        detailsCB(result)
        // convert ingredients and measures into array, then pass to ingredients state
        const ingredients = []
        for (const key in result) {
            const ingredientKey = 'strIngredient'
            // iterate through object, looking for ingredient keys that have values
            if (key.startsWith(ingredientKey) && result[key]) {
                // store the number at the end of this key so we can grab the corresponding measure
                const measureKey = `strMeasure${key.substring(ingredientKey.length)}`
                ingredients.push({ name: result[key], measure: result[measureKey] })
            }
        }
        ingredientsCB(ingredients)
        return
    },
    listCategories: async (cb) => {
        const data = await fetchData(`/list.php?c=list`)
        return cb(data.meals)
    },
    listAreas: async (cb) => {
        const data = await fetchData(`/list.php?a=list`)
        return cb(data.meals)
    }
}
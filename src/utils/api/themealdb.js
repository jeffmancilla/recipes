const url = `https://www.themealdb.com/api/json/v1/${import.meta.env.VITE_THEMEALDB_API_KEY}`

const fetchData = async (params) => {
    try {
        const response = await fetch(`${url}/${params}`)
        if (response.status !== 200) {
            throw new Error (`Error (${response.status}): ${response.statusText}`)
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
}

export default {
    search: (query, cb) => {
        const data = fetchData(`/search.php?s=${query}`)
        return cb(data.meals)
    },
    getCategories: (cb) => {
        const data = fetchData(`/list.php?c=list`)
        return cb(data.meals)
    }
}
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
        console.log(err)
    }
}

export default {
    search: async (query, cb) => {
        const data = await fetchData(`/search.php?s=${query}`)
        return cb(data.meals)
    },
    getCategories: async (cb) => {
        const data = await fetchData(`/list.php?c=list`)
        console.log(data)
        return cb(data.meals)
    },
    getAres: async (cb) => {
        const data = await fetchData(`/list.php?a=list`)
        console.log(data)
        return cb(data.meals)
    }
}
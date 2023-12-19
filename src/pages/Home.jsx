import Filter from '../components/Filter'
import { useEffect, useState } from 'react'
import themealdb from '../utils/api/themealdb'

const Home = () => {
	const [meals, setMeals] = useState([])
	const [categories, setCategories] = useState([])
	const [query, setQuery] = useState('chicken')
	useEffect(() => {
		themealdb.search(query, setMeals)
        themealdb.getCategories(setCategories)
	}, [])
	return (
		<>
			<Filter categories={categories} query={query} setQuery={setQuery}/>
			<section>{ meals ? 'loaded' : 'loading'}</section>
		</>
	)
}

export default Home

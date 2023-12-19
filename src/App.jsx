import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Recipe from './pages/Recipe'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recipe/:id" element={<Recipe />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App

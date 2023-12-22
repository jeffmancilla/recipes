import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Results from './pages/Results'
import Recipe from './pages/Recipe'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recipe/:id" element={<Recipe />} />
					<Route path="/category/:param" element={<Results />} />
					<Route path="/cuisine/:param" element={<Results />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App

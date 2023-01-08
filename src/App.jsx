import { Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PokemonsPage from './pages/PokemonsPage'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/pokemons" element={<PokemonsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
  	)
}

export default App

import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PokemonPage from './pages/PokemonPage'

function App() {
	return (
		<div className="App">
			<Navigation/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/pokemon/:name" element={<PokemonPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
  	)
}

export default App

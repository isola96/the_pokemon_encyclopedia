import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PokemonPage from './pages/PokemonPage'
import LogInPage from './pages/LogInPage'
import LogOutPage from './pages/LogOutPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import FavouritesPage from './pages/FavouritesPage'

// Styling
import '../src/assets/App.css'

function App() {
	return (
		<div className="App">
			<Navigation/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LogInPage />} />
				<Route path="/logout" element={<LogOutPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/favourites" element={<FavouritesPage />} />
				<Route path="/pokemon/:name" element={<PokemonPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
  	)
}

export default App

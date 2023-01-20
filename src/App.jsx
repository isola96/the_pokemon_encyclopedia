import { Routes, Route, Navigate } from 'react-router-dom'
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
import ListPage from './pages/ListPage'
import RequireAuth from './components/RequireAuth'
import { useAuthContext } from './contexts/AuthContext'

// Styling
import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/App.css'

function App() {
	const { currentUser } = useAuthContext()
	return (
		<div className="App">
			<Navigation/>
			<Routes>
				{/*  GUEST */}
				<Route path="/login" element={
					currentUser ? <Navigate to={'/'} /> : <LogInPage />
				} />
				<Route path="/signup" element={
					currentUser ? <Navigate to={'/'} /> : <SignUpPage />
				} />
				<Route path="*" element={<NotFoundPage />} />

				{/*  LOGGED IN */}

				<Route path="/" element={
					<RequireAuth>
						<HomePage />
					</RequireAuth>
				} />

				<Route path="/logout" element={
					<RequireAuth>
						<LogOutPage />
					</RequireAuth>
				} />

				<Route path="/profile" element={
					<RequireAuth>
						<ProfilePage />
					</RequireAuth>
					
				} />

				<Route path="/profile/:uid" element={
					<RequireAuth>
						<ListPage />
					</RequireAuth>
				} />

				<Route path="/favourites" element={
					<RequireAuth>
						<FavouritesPage />
					</RequireAuth>
				} />

				<Route path="/pokemon/:name" element={
					<RequireAuth>
						<PokemonPage />
					</RequireAuth>
				} />
			</Routes>
		</div>
  	)
}

export default App

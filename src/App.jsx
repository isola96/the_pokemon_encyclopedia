import { Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
  	)
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import AuthContextProvider from './contexts/AuthContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    	<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
  	</React.StrictMode>,
)

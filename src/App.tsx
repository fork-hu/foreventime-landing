import React from 'react'
import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import { StoreContext, useDato } from './tools/datoCmsTools'

export const AppContext = React.createContext<undefined | {apiKey: string}>(undefined)

function App() {
	const store = useDato()
	return (
		<AppContext.Provider 
			value={{apiKey: "104fd5dcbf41571ac018bb648c6ed2"}}
		>
			<StoreContext.Provider value={store}>
				<LandingPage />
			</StoreContext.Provider>	
		</AppContext.Provider>
	)
}

export default App

const LandingPage = () => (
	<>
			<Header />
			<Main />
			<Footer />
	</>
)




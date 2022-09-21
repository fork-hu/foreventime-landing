import React from 'react'
import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

export const AppContext = React.createContext<undefined | {apiKey: string}>(undefined)

function App() {

	return (
		<AppContext.Provider 
			value={{apiKey: "104fd5dcbf41571ac018bb648c6ed2"}}
		>
			<LandingPage />
			
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




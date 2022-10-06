import React, { useEffect } from 'react'
import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import { StoreContext, useDato, useStaticElement } from './tools/datoCmsTools'

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

const themes = {
	blue: {
		"primary": "#47CCD4",
		"light": "#fff",
		"dark": "#000",
		"grey": "#4F4F4F",
		"lightgrey": "#BDBDBD",
		"bg-light": "#fff",
		"bg-primary": "#D6F4F5"
	},
	green: {
		"primary": "#93c47d",
		"primary-light-10": "#b0d4a0",
		"primary-light-15": "#bfdcb2",
		"primary-light-7": "#a7cf96",
		"primary-alpha-20": "#94c47d33",
		"light": "#fff",
		"dark": "#000",
		"grey": "#4F4F4F",
		"lightgrey": "#BDBDBD",
		"bg-light": "#fff",
		"bg-primary": "#DFFFD8",
		"primary-shadow": "rgba(var(--primary), 0.5)",
	},
	aBlue: {
		"primary": "#046B99",
		"light": "#fff",
		"dark": "#1C304A",
		"grey": "#4F4F4F",
		"lightgrey": "#BDBDBD",
		"bg-light": "#fff",
		"bg-primary": "#B3EFFF"
	},
}
	


const LandingPage = () => {
	
	const [themeSelector] = useStaticElement("theme", false)
	const theme = themes[themeSelector as keyof typeof themes ?? "blue"]
	
	useEffect(() => {
		Object.keys(theme).forEach((key) => {
			document.documentElement.style.setProperty(`--${key}`, theme[key as keyof typeof theme])
		})
	}, [theme])
	return (
		<>
				<Header />
				<Main />
				<Footer />
		</>
	)
}




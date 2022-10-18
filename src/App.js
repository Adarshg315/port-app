import { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Landing from "./components/Landing"
import ReactGA from "react-ga"

const App = () => {
	useEffect(() => {
		ReactGA.initialize(process.env.REACT_APP_TRACKING_ID)
		ReactGA.pageview(window.location.pathname)
	}, [])

	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route component={Error} />
		</Switch>
	)
}

export default App

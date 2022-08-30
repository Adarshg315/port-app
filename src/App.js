import { Route, Switch } from "react-router-dom"
import Landing from "./components/Landing"

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route component={Error} />
		</Switch>
	)
}

export default App

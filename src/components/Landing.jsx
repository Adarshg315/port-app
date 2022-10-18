import NoPhone from "../../src/assests/icons/software-developer-work-on-computer-programmer-coder-svgrepo-com.svg"
import ReactGA from "react-ga"
import { useEffect } from "react"

const Landing = () => {
	useEffect(() => {
		ReactGA.initialize(process.env.REACT_APP_TRACKING_ID)
		ReactGA.pageview(window.location.pathname)
	}, [])

	return (
		<div
			style={{
				display: "grid",
				flexDirection: "row",
				alignContent: "center",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<h1>Adarsh Goyal</h1>
			<h2>Software Developer</h2>

			<h2>
				<a
					href="https://linktr.ee/adarshgoyal"
					target="_blank"
					rel="noreferrer"
				>
					https://linktr.ee/adarshgoyal
				</a>
			</h2>
			<p>
				<img src={NoPhone} alt="no cell phone svg" />
			</p>
			<h1>...</h1>
		</div>
	)
}

export default Landing

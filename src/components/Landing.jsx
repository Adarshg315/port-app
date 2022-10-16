import NoPhone from "../../src/assests/icons/software-developer-work-on-computer-programmer-coder-svgrepo-com.svg"
const Landing = () => {
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
			<small>...</small>
		</div>
	)
}

export default Landing

import { ThemeProvider } from "@material-ui/core"
import { Link, Grid, Fragment, clsx } from "../imports"
import { links, techUsed } from "./Constants"
import { homeStyles } from "./HomeStyles"
import Typewriter from "typewriter-effect"
import { theme } from "./theme"
import { SoudCloudWidget } from "./SoundCloudWidget"

const Home = () => {
	const classes = homeStyles()

	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<Grid
					className={clsx(classes.animatedUpItem)}
					style={{
						backgroundColor: "black",

						height: "15vh",
					}}
				>
					<Grid
						container
						justify="space-around"
						alignItems="center"
						style={{
							color: "#fff",
							padding: "15px",
						}}
					>
						{Object.keys(links).map((key, index) => {
							return (
								<Grid item key={index}>
									<Link
										href={links[key].href}
										color="inherit"
									>
										{links[key].icon}
									</Link>
								</Grid>
							)
						})}
					</Grid>
				</Grid>

				<Grid
					container
					alignItems="center"
					justify="center"
					style={{ backgroundColor: "black", height: "40vh" }}
				>
					<Grid
						item
						style={{
							backgroundColor: "",
							color: "#8ae234",
							fontSize: "50px",
						}}
					>
						<h1>
							<Typewriter
								options={{
									delay: "25",
									deleteSpeed: "25",
									strings: [
										"Adarsh Goyal",
										"SDE-1 @ GytWorkz",
										"Let's Connect",
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</h1>
					</Grid>
				</Grid>
				<Grid
					style={{
						backgroundColor: "black",
						height: "5vh",
					}}
				>
					<Grid
						container
						justify="space-around"
						alignItems="center"
						style={{
							color: "#fff",
							padding: "5px",
							borderTop: "2px solid white",
							borderBottom: "2px solid white",
						}}
					>
						<Grid item>Working on :-</Grid>
					</Grid>
				</Grid>
				<Grid
					className={classes.animatedDownItem}
					style={{
						backgroundColor: "black",
						height: "80vh",
					}}
				>
					<Grid
						container
						justify="space-around"
						alignItems="center"
						style={{
							color: "#fff",
							padding: "15px",
						}}
					>
						{Object.keys(techUsed).map((key, index) => {
							return (
								<Grid item key={index}>
									<Link
										href={techUsed[key].href}
										color="inherit"
									>
										{techUsed[key].icon}
									</Link>
								</Grid>
							)
						})}
					</Grid>
					<Grid
						style={{
							backgroundColor: "black",
							height: "5vh",
						}}
					>
						<Grid
							container
							justify="space-around"
							alignItems="center"
							style={{
								color: "#fff",
								padding: "5px",
								borderTop: "2px solid white",
								borderBottom: "2px solid white",
								marginTop: "180px",
								marginBottom: "10px",
							}}
						>
							<Grid item style={{ backgroundColor: "" }}>
								Tracks produced so far :-
							</Grid>
						</Grid>
						<Grid>
							<div className="elfsight-app-1577b42d-525a-4d70-a645-48f93647b5ad"></div>
						</Grid>
						<Grid
							container
							justify="space-around"
							alignItems="center"
						>
							<Grid item xs>
								<SoudCloudWidget title={"title"} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Fragment>
		</ThemeProvider>
	)
}

export default Home

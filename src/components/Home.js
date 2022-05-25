import { ThemeProvider } from "@material-ui/core"
import { Link, Grid, Typography, Fragment, clsx } from "../imports"
import { links } from "./Constants"
import { homeStyles } from "./HomeStyles"
import Typewriter from "typewriter-effect"
import { theme } from "./theme"

const Home = () => {
	const classes = homeStyles()

	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<Grid
					className={clsx(classes.animatedUpItem, {
						// [classes.animatedDownItem]: exit,
					})}
					style={{
						backgroundColor: "black",
						height: "10vh",
					}}
				>
					<Grid
						container
						justify="space-around"
						alignItems="center"
						style={{ color: "#fff", padding: "15px" }}
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
					style={{ backgroundColor: "black", height: "85vh" }}
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
										"SDE-1 at GytWorkz",
										"Let's Connect",
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</h1>
					</Grid>
				</Grid>

				<Grid>
					<Typography
						component="div"
						className={classes.animatedDownItem}
						style={{
							backgroundColor: "black",
							height: "5vh",
							color: "#fff",
						}}
					></Typography>
				</Grid>
			</Fragment>
		</ThemeProvider>
	)
}

export default Home

import { ThemeProvider } from "@material-ui/core";
import { Link, Grid, Typography, Fragment, clsx } from "../imports";
import { links } from "./Constants";
import { homeStyles } from "./HomeStyles";
import Typewriter from "typewriter-effect";
import { theme } from "./theme";

const Home = () => {
  const classes = homeStyles();

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
                  <Link href={links[key].href} color="inherit">
                    {links[key].icon}
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ backgroundColor: "black", height: "85vh" }}
        >
          <Grid item style={{ backgroundColor: "", color: "#8ae234" }}>
            <Typewriter
              options={{
                // skipAddStyles: "true",
                delay: "25",
                deleteSpeed: "25",
                strings: [
                  "<h1>Adarsh Goyal</h1>",
                  "<h1>Full Stack Developer</h1>",
                  "<h1>Let us Connect</h1>",
                ],
                autoStart: true,
                loop: true,
              }}
            />

            {/* <img
              alt="github"
              src="https://github-readme-stats.vercel.app/api?username=adarshg315&show_icons=true"
            /> */}
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
  );
};

export default Home;

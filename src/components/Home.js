import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import { Fragment } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  animatedUpItem: {
    animation: `$myEffectDown 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedDownItem: {
    animation: `$myEffectup 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes myEffectDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  "@keyframes myEffectup": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const links = {
  linkedin: {
    href: "https://www.linkedin.com/in/adarshg1/",
    icon: <LinkedInIcon style={{ fontSize: 40 }} />,
  },
  twitter: {
    href: "https://twitter.com/_Adarsh_Goyal_",
    icon: <TwitterIcon style={{ fontSize: 40 }} />,
  },
  github: {
    href: "https://github.com/Adarshg315",
    icon: <GitHubIcon style={{ fontSize: 40 }} />,
  },
  email: {
    href: "mailto:adarshg315@gmail.com",
    icon: <EmailIcon style={{ fontSize: 40 }} />,
  },
  phone: {
    href: "tel:+9178287064354",
    icon: <PhoneIcon style={{ fontSize: 40 }} />,
  },
};

const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid>
        <Typography
          component="div"
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
                <Grid item>
                  <Link href={links[key].href} color="inherit">
                    {links[key].icon}
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Typography>
      </Grid>
      <Grid>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "85vh" }}
        />
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
  );
};

export default Home;

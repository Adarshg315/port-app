import { makeStyles } from "@material-ui/core";

export const homeStyles = makeStyles((theme) => ({
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

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    background: "#EDF6F9",
    "&:hover": {
      cursor: "pointer",
    },
  },
  header: {
    title: 40,
    background: "#2D4059",
    color: "#fefefe",
  },
  content: {
    background: "#EDF6F9",
  },
}));

export default useStyles;

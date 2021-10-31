import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    marginBottom: 25,
    marginTop: 10,
  },
  txt: {
    color: "#fff",
  },
  pagination: {
    margin: "auto",
    position: "absolute",
    bottom: "1px",
    padding: "1px",

    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      margin: "auto",
      position: "static",
    },
  },

  root: {
    minHeight: "100vh",
    position: "relative",
  },
}));
export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  search: {
    marginBottom: 25,
    marginTop: 10,
  },
  txt: {
    color: "#fff",
  },
  pagination: {
    margin: "auto",
    padding: "1px",
    position: "absolute",
    bottom: "1px",
  },
  root: {
    minHeight: "100vh",
    position: "relative",
  },
}));
export default useStyles;

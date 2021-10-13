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
    // position: "absolute",
    bottom: 0,

    // marginTop: 20,

    // marginBottom: 15,
  },
  root: {
    minHeight: "100vh",
    position: "relative",
  },
}));
export default useStyles;

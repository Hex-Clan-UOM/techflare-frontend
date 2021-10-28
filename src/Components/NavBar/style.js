import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2D4059 !important",
  },
  txt: {
    color: "#fff",
  },
  search: {
    marginRight: "8px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: "100%",
  },
}));
export default useStyles;

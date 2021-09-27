import loginImage from "../../Assets/login_bg.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  paper: {
    align: "left",
    padding: 20,
    // height: "100%",
    width: 450,
    marginLeft: "2%",
    marginTop: "10%",
    marginBottom: "12%",
    backgroundcolor: "#E5E5E5",
    borderRadius: "15px",
  },
  gridItem: {
    padding: 20,
  },
  gridStyle: {
    display: "flex",
    height: "100vh",
    background: `url(${loginImage}) center/cover no-repeat`,
  },
}));

export default useStyles;

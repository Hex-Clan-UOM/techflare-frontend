import loginImage from "../../Assets/login_bg.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  paper: {
    align: "left",
    padding: 20,
    maxHeight: "80%",
    maxWidth: "100%",
    marginLeft: "2%",
    marginTop: "20%",
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
  avatar: {
    maxWidth: "80%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  moto: {
    color: "#2D4059",
  },
}));

export default useStyles;

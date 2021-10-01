import LoginPage from "./Login/index";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard/index";
import CssBaseline from "@mui/material/CssBaseline";
import { ProtectedRoute } from "../Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <ProtectedRoute path="/home" component={DashBoard} />
      </Switch>
    </>
  );
}

export default App;

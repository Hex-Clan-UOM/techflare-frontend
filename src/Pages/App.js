import LoginPage from "./Login/index";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/index";
import CssBaseline from "@mui/material/CssBaseline";
import { ProtectedRoute } from "../Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <ProtectedRoute path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;

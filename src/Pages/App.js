import LoginPage from "./Login/index";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/index";
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route to="/" exact component={LoginPage} />
        <Route to="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;

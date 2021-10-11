import LoginPage from "./Login/index";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard/index";
import DetailedScreen from "./DetailedTopic/index";
import CssBaseline from "@mui/material/CssBaseline";
import { ProtectedRoute } from "../Components/ProtectedRoute/ProtectedRoute";
import CreateTopic from "./CreateTopic/index";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <ProtectedRoute path="/home" component={DashBoard} />
        <ProtectedRoute path="/detailed" component={DetailedScreen} />
        <ProtectedRoute path="/createtopic" component={CreateTopic} />
      </Switch>
    </>
  );
}

export default App;

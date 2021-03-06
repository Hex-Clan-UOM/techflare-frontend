import LoginPage from "./Login/index";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard/index";
import DetailedScreen from "./DetailedTopic/index";
import CssBaseline from "@mui/material/CssBaseline";
import { ProtectedRoute } from "../Components/ProtectedRoute/ProtectedRoute";
import CreateTopic from "./CreateTopic/index";
import Profile from "./Profile/index";
import Navbar from "../Components/NavBar/index";
import { useSelector } from "react-redux";
import Filtered from "./FilteredTopic/index";
import EditTopic from "./EditTopic/index";
function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <ProtectedRoute path="/home" component={DashBoard} />
        <ProtectedRoute path="/detailed/:id" component={DetailedScreen} />
        <ProtectedRoute path="/createtopic" component={CreateTopic} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/filtered" component={Filtered} />
        <ProtectedRoute path="/edittopic" component={EditTopic} />
      </Switch>
    </>
  );
}

export default App;

import LoginPage from "./Pages/LoginPage";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
function App() {
  return (
    <>
      <Switch>
        <Route to="/" exact component={LoginPage} />
        <Route to="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;

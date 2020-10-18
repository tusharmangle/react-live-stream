import React from "react";
import "./styles/tailwind.css";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import My404Page from "./components/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="*" component={() => <My404Page />} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;

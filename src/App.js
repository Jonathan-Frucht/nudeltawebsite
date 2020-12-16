import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ExecPage from "./pages/ExecPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={}/> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/exec_board" component={ExecPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
    //   <div className="App">
    //     <InitPage />
    //   </div>
  );
}

export default App;

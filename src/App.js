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
import RushPage from "./pages/RushPage";
import RushFormPage from "./pages/RushFormPage";
import AlumInfoPage from "./pages/AlumInfoPage";
import CompositesPage from "./pages/ComposPage";
import PhilanthropyPage from "./pages/PhilPage";
import BrotherhoodPage from "./pages/BrotherhoodPage";
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={}/> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/exec_board" component={ExecPage} />
        <Route exact path="/alum_info" component={AlumInfoPage} />
        <Route exact path="/rush_info" component={RushPage} />
        <Route exact path="/rush_Form" component={RushFormPage} />
        <Route exact path="/composites" component={CompositesPage} />
        <Route exact path="/philanthropy" component={PhilanthropyPage} />
        <Route exact path="/bhgallery" component={BrotherhoodPage} />

        <Redirect to="/" />
      </Switch>
    </Router>
    //   <div className="App">
    //     <InitPage />
    //   </div>
  );
}

export default App;

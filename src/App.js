import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import NotFound from "./components/initialpage/NotFound";
import Dashboard from "./components/MainPage/Main/Dashboard/Dashboard";
import logo from "./logo.svg";
import Vendor from "./components/MainPage/Vendor/Vendor";
import Vendor_details2 from "./components/MainPage/Vendor/Vendor_details2";
import Sidebar from "./components/initialpage/Sidebar/sidebar";
import Header from "./components/initialpage/Sidebar/header";
import Add_vendor from "./components/MainPage/Vendor/Add_vendor";
import { PUBLIC_URL } from "../src/components/MainPage/Main/Vendor/CommonURL";
import Vendor_details from "./components/MainPage/Vendor/Vendor_details";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* Sidebar */}
        <Sidebar />

        <Switch>
          <Route exact path={`/`}>
            <Dashboard />
          </Route>
          <Route exact path="/vendor/add/:id">
            <Add_vendor />
          </Route>
          <Route exact path="/vendor/details_2">
            <Vendor_details2 />
          </Route>
          <Route exact path={`/vendor/details/:id`}>
            <Vendor_details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

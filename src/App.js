import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/initialpage/NotFound";
import Dashboard from "./components/MainPage/Main/Dashboard/Dashboard";
import logo from "./logo.svg";
import HR from "./components/MainPage/HR";
import Estate from "./components/MainPage/Estate";
import Transport from "./components/MainPage/Transport";
import IT from "./components/MainPage/It";
import Store from "./components/MainPage/Store";
import Vendor from "./components/MainPage/Vendor/Vendor";
import Vendor_details2 from "./components/MainPage/Vendor/Vendor_details2";
import Sidebar from "./components/initialpage/Sidebar/sidebar";
import Header from "./components/initialpage/Sidebar/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* Sidebar */}
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/store" element={<Dashboard />} />
          <Route path="/vendor/details" element={<Vendor />} />
          <Route path="/vendor/details_2" element={<Vendor_details2 />} />
          {/* <Route  path="*" element={<NotFound />}/>            */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

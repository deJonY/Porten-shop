import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./component/MyNavBar";
import Header from "./component/Header";
import CenterSection from "./component/CenterSection";
import MidSection from "./component/MidSection";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="App">
            <MyNavBar/>

            <Header/>

            <CenterSection/>

            <MidSection/>

            <Footer/>
        </div>
    );
}

export default App;

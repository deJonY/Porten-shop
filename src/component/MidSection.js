import React from 'react';
import "../component/MidSection.css";
import MSImg from "../img/Rectangle 2.png";

function MidSection() {
    return (
        <div className="container-fluid BGColor">
            <p className="centerTitle">Hаши бренды</p>
            <hr className="hr5"/>

            <div className="logos">
                <img src={MSImg} alt="" className="logo"/>
                <img src={MSImg} alt="" className="logo"/>
                <img src={MSImg} alt="" className="logo"/>
                <img src={MSImg} alt="" className="logo"/>
            </div>
        </div>
    );
}

export default MidSection;
import React from 'react';
import "../component/MyNavbar.css";
import navLogo from "../img/PORTEN.png";
import shopIcon from "../img/bx_bx-cart.png";
import searchIcon from "../img/gridicons_search.png";

function MyNavBar() {
    return (
        <div className="container-fluid BG">
            <div className="container BG">
                <nav className="navbar navbar-expand-sm BG">
                    <a className="navbar-brand" href="#"><img src={navLogo} alt="" className="logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse BG" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link BG" href="#">Понравилось</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link BG" href="#">Личный кабинет</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link BG" href="#">Hастройки</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <button type="button" className="navBtn1">
                                <a href="#" className="Icon"><img src={shopIcon} alt="" className="shopIcon"/></a>
                            </button>
                            <button type="button" className="navBtn2">
                                <a href="#" className="Icon"><img src={searchIcon} alt="" className="searchIcon"/></a>
                            </button>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    );
}

export default MyNavBar;
import React from 'react';
import "../component/Header.css";
import centerImg from "../img/logo (4).png";
import smartWatch from "../img/62050 1.png";

function Header() {
    return (
        <div className="container-fluid BGImg">
            <img src={centerImg} alt="" className="centerImg"/>

            <p className="centerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est
                tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec
                ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna
                feugiat id nunc, dui nisl viverra.</p>

            <div className="row px-0">
                <div className="col-xl-7 text-center">
                    <span className="span"><p className="sezon">СЕЗОН</p><p className="data"> 2020/21</p></span>
                    <hr className="hr1"/>

                    <div className="boxes">
                        <div className="box">
                            <div className="watchImgBox">
                                <img src={smartWatch} alt="" className="watchImg"/>
                            </div>
                            <p className="watchName">Louis XVI ATHOS</p>
                            <p className="watchMoney">165 000 руб.</p>
                        </div>
                        <div className="box">
                            <div className="watchImgBox">
                                <img src={smartWatch} alt="" className="watchImg"/>
                            </div>
                            <p className="watchName">Louis XVI ATHOS</p>
                            <p className="watchMoney">165 000 руб.</p>
                        </div>
                        <div className="box">
                            <div className="watchImgBox">
                                <img src={smartWatch} alt="" className="watchImg"/>
                            </div>
                            <p className="watchName">Louis XVI ATHOS</p>
                            <p className="watchMoney">165 000 руб.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 mx-0 px-0 rightImg">
                    <div className="Texts">
                        <p className="rightTitle">Новая коллекция</p>
                        <hr className="hr2"/>
                        <button type="button" className="RBtn"><a href="#" className="RBtnText">Каталог</a></button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-5">
                    <div className="leftImg"/>
                </div>
                <div className="col-xl-7">
                    <div className="">
                        <p className="leftTitle">Новая коллекция</p>
                        <hr className="hr3"/>
                        <p className="leftText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
                            ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus
                            vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida
                            facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis
                            ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque
                            volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas.
                            Id aliquam a aliquam egestas leo orci pharetra sed diam.</p>
                        <button type="button" className="LBtn">
                            <a href="#" className="LBtnText">посмотреть коллекцию</a>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
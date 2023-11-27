import React from 'react';
import "../component/Footer.css";

function Footer() {
    return (
        <div className="container-fluid footerBgImg">
            <div className="container tr">
                <div className="row tr">
                    <div className="col-xl-4 tr">
                        <p className="footerTitle">О магазине</p>

                        <p className="footerText1 tr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus
                            tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum
                            suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet,
                            porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi,
                            nunc.
                        </p>
                    </div>
                    <div className="col-xl-4 tr">
                        <p className="footerTitle">Категории</p>

                        <div className="buttons1 tr">
                            <button className="button1"><a href="#" className="FBtnLink1">часы</a></button>
                            <button className="button1"><a href="#" className="FBtnLink1">браслеты</a></button>
                            <button className="button1"><a href="#" className="FBtnLink1">ремни</a></button>
                        </div>
                        <div className="buttons2 tr">
                            <button className="button2"><a href="#" className="FBtnLink2">ювелирные изделия</a></button>
                            <button className="button2"><a href="#" className="FBtnLink2">запонки</a></button>
                        </div>
                    </div>
                    <div className="col-xl-4 tr">
                        <p className="footerTitle">РАссылка</p>

                        <p className="footerText tr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
                            viverra nunc cursus tortor lectus nunc nulla nibh.</p>

                        <div className="input-btn">
                            <input type="email" className="footerEmail" placeholder="Ваша почта"/>
                            <button type="button" className="inBtn">
                                <a href="#" className="inBtnText">ПОДПИСАТЬСЯ</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
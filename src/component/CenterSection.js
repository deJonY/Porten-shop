import React from 'react';
import "../component/CenterSection.css";
import smartWatch from "../img/62050 1.png";


function CenterSection() {
    return (
        <div className="container">
            <p className="midTitle">новые поступления</p>
            <hr className="hr4"/>

            <div className="row CSBCenter1">
                <div className="CSPadding">
                    <div className="CSBoxes">
                        <div className="CSBoxImg">
                            <img src={smartWatch} alt="" className="CSwatchImg"/>
                        </div>
                        <p className="CSBoxTitle">Louis XVI ATHOS</p>
                        <p className="CSBoxText">165 000 руб.</p>
                    </div>
                </div>
                <div className="CSPadding">
                    <div className="CSBoxes">
                        <div className="CSBoxImg">
                            <img src={smartWatch} alt="" className="CSwatchImg"/>
                        </div>
                        <p className="CSBoxTitle">Louis XVI ATHOS</p>
                        <p className="CSBoxText">165 000 руб.</p>
                    </div>
                </div>
                <div className="CSPadding">
                    <div className="CSBoxes">
                        <div className="CSBoxImg">
                            <img src={smartWatch} alt="" className="CSwatchImg"/>
                        </div>
                        <p className="CSBoxTitle">Louis XVI ATHOS</p>
                        <p className="CSBoxText">165 000 руб.</p>
                    </div>
                </div>
                <div className="CSPadding">
                    <div className="CSBoxes">
                        <div className="CSBoxImg">
                            <img src={smartWatch} alt="" className="CSwatchImg"/>
                        </div>
                        <p className="CSBoxTitle">Louis XVI ATHOS</p>
                        <p className="CSBoxText">165 000 руб.</p>
                    </div>
                </div>
            </div>

            <div className="row CSBCenter2">
                <div className="CSPadding">
                    <div className="CSBoxes">
                        <div className="CSBoxImg">
                            <img src={smartWatch} alt="" className="CSwatchImg"/>
                        </div>
                        <p className="CSBoxTitle">Louis XVI ATHOS</p>
                        <p className="CSBoxText">165 000 руб.</p>
                    </div>
                </div>
                <div className="CSPadding">
                    <div className="CSBoxes">
                        <div className="CSBoxImg">
                            <img src={smartWatch} alt="" className="CSwatchImg"/>
                        </div>
                        <p className="CSBoxTitle">Louis XVI ATHOS</p>
                        <p className="CSBoxText">165 000 руб.</p>
                    </div>
                </div>
                <div className="CSPadding">
                    <div className="CSBoxes">
                        <div className="CSBoxImg">
                            <img src={smartWatch} alt="" className="CSwatchImg"/>
                        </div>
                        <p className="CSBoxTitle">Louis XVI ATHOS</p>
                        <p className="CSBoxText">165 000 руб.</p>
                    </div>
                </div>
                <div className="CSPadding">
                    <div className="CSBoxes">
                        <div className="CSBoxImg">
                            <img src={smartWatch} alt="" className="CSwatchImg"/>
                        </div>
                        <p className="CSBoxTitle">Louis XVI ATHOS</p>
                        <p className="CSBoxText">165 000 руб.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CenterSection;
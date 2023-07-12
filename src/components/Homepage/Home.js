import React from "react";
import "./styles/Home.scss";
import trucks from "../../assests/truck.gif";
import cartton from "../../assests/cartoon1.gif";
import shops from "../../assests/shop.gif";
import bore from "../../assests/b1.png";
import { NavLink } from "react-router-dom";
function Home(props) {
    return (
        <div className="home-main">
            <div className="main-box">
                <div className="top">
                    <div className="content-top">
                        <h1>
                            <span className="wel mb-5">Welcome too </span>
                            <br></br>
                            <span className="sho">Shopping Cart</span>
                        </h1>
                        <div className="btn">
                            <button className="btns">
                                <NavLink to="/login" className="links">
                                    Start
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={shops} className="cars" />
                    </div>
                </div>
                <div className="bottom">
                    <img src={trucks} className="trucks" />
                </div>
            </div>
        </div>
    );
}

export default Home;

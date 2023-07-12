import React from "react";
import { useCart } from "react-use-cart";
import "./navbar.scss";
import cartstotal from "../../assests/ct1.png";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebasefiles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
function Navbar(props) {
    const usehistory = useHistory();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal,
    } = useCart();

    return (
        <div className="navs">
            <p>items:{totalItems}</p>
            <div className="right_box">
                <p onClick={() => usehistory.push("/cartde")}>
                    <img src={cartstotal} className="carts" />
                    <p className="numbers">{totalItems}</p>
                </p>
                <ToastContainer />
            </div>
            <div>
                <p>{props.names}</p>
            </div>
            <div>
                <button
                    className="logouts"
                    onClick={() => {
                        toast("Logout SuccessFully");
                        auth.signOut();
                        setTimeout(() => {
                            usehistory.push("/login");
                        }, 2000);
                        let GetLocal =
                            localStorage.removeItem("token new users");

                        console.log("received logout", JSON.parse(GetLocal));
                    }}
                >
                    LogOut
                </button>
            </div>
        </div>
        // <div>
        //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //         <div class="container-fluid">
        //             <a class="navbar-brand" href="#">
        //                 Shopping
        //             </a>
        //             <button
        //                 class="navbar-toggler"
        //                 type="button"
        //                 data-bs-toggle="collapse"
        //                 data-bs-target="#navbarSupportedContent"
        //                 aria-controls="navbarSupportedContent"
        //                 aria-expanded="false"
        //                 aria-label="Toggle navigation"
        //             >
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div
        //                 class="collapse navbar-collapse"
        //                 id="navbarSupportedContent"
        //             >
        //                 <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        //                     <li class="nav-item">
        //                         <div className="rights">
        //                             <p
        //                                 onClick={() =>
        //                                     usehistory.push("/cartde")
        //                                 }
        //                             >
        //                                 <img
        //                                     src={cartstotal}
        //                                     className="carts"
        //                                 />
        //                             </p>
        //                             <ToastContainer />
        //                         </div>
        //                     </li>
        //                     <li>
        //                         <p className="numbers">{totalItems}</p>
        //                     </li>
        //                     <li>
        //                         <div className="name">
        //                             <p>
        //                                 Welcome:
        //                                 <span style={{ color: "blue" }}>
        //                                     {name}
        //                                 </span>
        //                             </p>
        //                         </div>
        //                     </li>
        //                 </ul>
        //                 <form class="d-flex">
        //                     <button
        //                         className="logouts"
        //                         onClick={(e) => {
        //                             toast("Logout SuccessFully");
        //                             auth.signOut();
        //                             setTimeout(() => {
        //                                 usehistory.push("/login");
        //                             }, 2000);
        //                         }}
        //                     >
        //                         LogOut
        //                     </button>
        //                 </form>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
}
const mapStateToProps = (state) => {
    return {
        names: state.usernames.username,
    };
};
export default connect(mapStateToProps, null)(Navbar);

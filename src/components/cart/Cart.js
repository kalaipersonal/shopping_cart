import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import mobileorder from "../../assests/mobileorders2.gif";
import "./styles/Carts.scss";
import { useHistory } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import Navbar from "../navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Cart(props) {
    const usehistory = useHistory();
    const [stateCart, SetCartStore] = useState([]);
    const [StateLocalGet, SetLocalGetData] = useState([]);
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
    // if (isEmpty) return <h1>no data</h1>;
    useEffect(() => {
        getCartItems();
        localStorage.setItem("cartdata", JSON.stringify(stateCart));
        console.log("carts", stateCart);
        getLocalStorageData();
    });
    const getCartItems = () => {
        SetCartStore(items);
    };

    const getLocalStorageData = () => {
        let GetLocal = localStorage.getItem("cartdata");
        SetLocalGetData(JSON.parse(GetLocal));
        console.log("received data LocalSorage", JSON.parse(GetLocal));
    };
    return (
        <>
            <div className="main-cart-boxes">
                <button
                    onClick={() => usehistory.goBack()}
                    style={{
                        position: "absolute",
                        left: "10px",
                        top: "20px",
                        widht: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        fontSize: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        outline: "none",
                        backgroundColor: "lightgreen",
                        boxShadow: "0px 0px 10px",
                    }}
                >
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <h1>Cart Add Product List</h1>
                <div className="container mt-5 ms-2">
                    {StateLocalGet.map((items, index) => {
                        return (
                            <div className="">
                                <div class="cardt col-lg-7 mt-3 mb-5">
                                    <div className="left-cart">
                                        <div className="image1">
                                            <img
                                                src={items.image}
                                                class="card-img-tops"
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            <span style={{ fontSize: "2rem" }}>
                                                {" "}
                                                Title:
                                            </span>
                                            <span
                                                className="ms-2"
                                                style={{
                                                    fontSize: "2rem",
                                                    color: "red",
                                                }}
                                            >
                                                {items.title}
                                            </span>
                                        </p>
                                        <p>
                                            {" "}
                                            <span style={{ fontSize: "2rem" }}>
                                                Price:
                                            </span>
                                            <span
                                                className="ms-2"
                                                style={{ fontSize: "2rem" }}
                                            >
                                                {items.price}
                                            </span>
                                        </p>
                                        <div className="d-flex justify-content-center gap-4 str">
                                            <span
                                                className="bts"
                                                onClick={() =>
                                                    updateItemQuantity(
                                                        items.id,
                                                        items.quantity - 1
                                                    )
                                                }
                                            >
                                                -
                                            </span>
                                            <p className="fw-1 fs-1">
                                                {items.quantity}
                                            </p>
                                            <span
                                                className="bts"
                                                onClick={() =>
                                                    updateItemQuantity(
                                                        items.id,
                                                        items.quantity + 1
                                                    )
                                                }
                                            >
                                                +
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-danger text-center mx-auto p-2"
                                            onClick={() => {
                                                toast("deleted Item Success");
                                                removeItem(items.id);
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Cart;

// import React, { useEffect, useState } from "react";
// import { useCart } from "react-use-cart";
// import mobileorder from "../../assests/mobileorders2.gif";
// import "./styles/Carts.scss";
// import { useHistory } from "react-router-dom";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import Navbar from "../navbar/Navbar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// function Cart({ cartitems, handleClickAddItems, handleClickRemove }) {
//     const usehistory = useHistory();
//     const totalPrice = cartitems.reduce(
//         (price, item) => price + item.quantity * item.price,
//         0
//     );

//     return (
//         <>
//             <h1>welcome too cart itemscart</h1>
//             {cartitems.length === 0 && <div>No Data Found....</div>}
//             <div className="container">
//                 {cartitems.map((items, index) => {
//                     return (
//                         <>
//                             <div>
//                                 <img src={items.image} />
//                                 <p>{items.price}</p>
//                                 <p>{items.title}</p>
//                             </div>
//                             <div className="d-flex gap-3">
//                                 <button
//                                     onClick={() => handleClickAddItems(items)}
//                                 >
//                                     +
//                                 </button>
//                                 <button
//                                     onClick={() => handleClickRemove(items)}
//                                 >
//                                     -
//                                 </button>
//                                 <p>{/* {items.quantity}*{items.price} */}</p>
//                                 <p>{totalPrice}</p>
//                             </div>
//                         </>
//                     );
//                 })}
//             </div>
//         </>
//     );
// }

// export default Cart;

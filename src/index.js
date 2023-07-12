import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CartProvider } from "react-use-cart";
import { Provider } from "react-redux";
import Stores from "./components/redux/store/Store";
ReactDOM.render(
    <CartProvider>
        <Provider store={Stores}>
            <App />,
        </Provider>
    </CartProvider>,
    document.getElementById("root")
);

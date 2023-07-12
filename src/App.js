import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Homepage/Home";
import CartHomepage from "./components/carthomepage/CartHomepage";
import Cart from "./components/cart/Cart";
import Address from "./components/addresspage/Address";

import Login from "./components/login/Login";
import Signup from "./components/signups/Signup";
import ForgetPassword from "./components/forgetpassword/ForgetPassword";
import ResetPassword from "./components/resetpassword/ResetPassword";
import Navbar from "./components/navbar/Navbar";
import AddressPageList from "./components/addresspage/AddressPageList";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/carthome/:name" component={CartHomepage} />
                    <Route path="/cartde" component={Cart} />
                    <Route path="/address" component={Address} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/forgetpassword" component={ForgetPassword} />
                    <Route path="/resetpassword" component={ResetPassword} />
                    <Route path="/addresslist" component={AddressPageList} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

// import "./App.scss";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./components/Homepage/Home";
// import CartHomepage from "./components/carthomepage/CartHomepage";
// import Cart from "./components/cart/Cart";
// import Address from "./components/addresspage/Address";

// import Login from "./components/login/Login";
// import Signup from "./components/signups/Signup";
// import ForgetPassword from "./components/forgetpassword/ForgetPassword";
// import ResetPassword from "./components/resetpassword/ResetPassword";
// import Navbar from "./components/navbar/Navbar";
// import AddressPageList from "./components/addresspage/AddressPageList";
// import { useState } from "react";

// function App() {
//     const [cartitems, setCartItems] = useState([]);

//     const handleclickadd = (product) => {
//         // alert("wwe");
//         console.log(product, "tr");
//         const ProductExits = cartitems.find((items) => items.id === product.id);
//         console.log("received is from ", ProductExits);
//         if (ProductExits) {
//             setCartItems(
//                 cartitems.map((itemsdata) =>
//                     itemsdata.id === product.id
//                         ? {
//                               ...ProductExits,
//                               quantity: ProductExits.quantity + 1,
//                           }
//                         : itemsdata
//                 )
//             );
//         } else {
//             setCartItems([...cartitems, { ...product, quantity: 1 }]);
//         }
//     };
//     const handleClickAddItems = () => {};
//     const handleClickRemove = (product) => {
//         const ProductExits = cartitems.find((items) => items.id === product.id);
//         if (ProductExits.quantity === 1) {
//             setCartItems(cartitems.filter((item) => item.id !== product.id));
//         } else {
//             setCartItems(
//                 cartitems.map((item) =>
//                     item.id === product.id
//                         ? {
//                               ...ProductExits,
//                               quantity: ProductExits.quantity - 1,
//                           }
//                         : item
//                 )
//             );
//         }
//     };
//     return (
//         <div className="App">
//             <Router>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/carthome/:name" component={CartHomepage}>
//                         <CartHomepage handleclickadd={handleclickadd} />
//                     </Route>
//                     <Route path="/cart-provide" component={Cart}>
//                         <Cart
//                             cartitems={cartitems}
//                             handleClickAddItems={handleclickadd}
//                             handleClickRemove={handleClickRemove}
//                         />
//                     </Route>
//                     <Route path="/address" component={Address} />
//                     <Route path="/login" component={Login} />
//                     <Route path="/signup" component={Signup} />
//                     <Route path="/forgetpassword" component={ForgetPassword} />
//                     <Route path="/resetpassword" component={ResetPassword} />
//                     <Route path="/addresslist" component={AddressPageList} />
//                 </Switch>
//             </Router>
//         </div>
//     );
// }

// export default App;

import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../../firebasefiles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ass from "../../assests/a4.png";
import g from "../../assests/g.png";
import f from "../../assests/f.png";
import em from "../../assests/et1";
import em2 from "../../assests/wr.png";
import EmailSrength from "../login/component/EmailSrength";
function ForgetPassword(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const usehistory = useHistory();
    const [email, SetEmail] = useState("");

    const submits = async () => {
        // if (name == "kalai" && email == "kalai@gmail.com") {
        //     usehistory.push("/carthome");
        //     alert("success Page");
        // }
        try {
            const result = await auth.sendPasswordResetEmail(email);
            toast.success("Check Your Email");

            setTimeout(() => {
                usehistory.push(`/login`);
            }, 1500);
            console.log("received", result.user.email);
        } catch (err) {
            console.log(err);
            switch (err.code) {
                case "auth/invalid-email":
                    toast.error(
                        "Email Id Is Not Match",
                        err.message,
                        <img src={em2} />
                    );
                    break;
                case "auth/user-disabled":
                    toast.error("user Is Disabled", err.message);
                    break;
                case "auth/user-not-found":
                    toast.error(
                        "User Not Found",
                        err.message,
                        <img src={em2} />
                    );
                    break;
                case "auth/wrong-password":
                    toast.error("Wrong password", err.message);
                    break;
            }
        }
    };
    return (
        <div className="login-main">
            <div className="top-inside-main">
                <div className="left-login col-lg-6 col-sm-10 col-md-10">
                    <h1 className="text-center mt-5 to">
                        Welcome Too <br />
                    </h1>
                    <p className="text-center to ms-5">ForgetPassword Page</p>
                    <ToastContainer />
                    <div className="image1">
                        <img src={ass} />
                    </div>
                </div>
                <div className="right-login col-sm-10 col-md-10 col-lg-6">
                    <div className="forms">
                        <form onSubmit={handleSubmit(submits)}>
                            <h1 className="text-center mb-5">ForgetPassword</h1>
                            <div className="ms">
                                <label>Email:</label>
                                <input
                                    {...register("email", {
                                        required: "no records",
                                    })}
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => SetEmail(e.target.value)}
                                    placeholder="Enter your Name"
                                />
                                <p style={{ marginTop: "-8px" }}>
                                    <EmailSrength email={email} />
                                </p>
                                {errors.email && (
                                    <span style={{ color: "red" }}>
                                        email field is Empty
                                    </span>
                                )}
                            </div>

                            <button className="sub">Reset Password</button>

                            <div className="logos">
                                <div>
                                    <img src={g} className="f" />
                                </div>

                                <p
                                    className="text-middle mt-4 fs-5 fw-3 text-center"
                                    style={{
                                        color: "black",
                                        fontSize: "18px",
                                        fontWeight: "700",
                                    }}
                                    onClick={() => usehistory.push("/login")}
                                >
                                    Login
                                </p>
                                <div>
                                    <img src={f} className="f" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;

import React from "react";
import zxcvbn from "zxcvbn";
import emo from "../../../assests/c1.png";
import emo1 from "../../../assests/c2.png";
import emo2 from "../../../assests/c4.png";
import emo3 from "../../../assests/c5.png";
function EmailSrength({ email }) {
    // console.log(password);
    const testresult = zxcvbn(email);
    // console.log(testresult);
    const num = (testresult.score * 100) / 4;

    const changeColorSet = () => {
        switch (testresult.score) {
            case 0:
                return "red";
            case 1:
                return "blue";
            case 2:
                return "orange";
            case 3:
                return "yellow";
            case 4:
                return "green";
            default:
                return "none";
        }
    };
    const ContentText = () => {
        switch (testresult.score) {
            case 0:
                return "very Bad";
            case 1:
                return (
                    <img
                        src={emo1}
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                );
            case 2:
                return (
                    <img
                        src={emo}
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                );
            case 3:
                return (
                    <img
                        src={emo2}
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                );
            case 4:
                return (
                    <img
                        src={emo3}
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                );
            default:
                return "none";
        }
    };
    const ChangePasswordColor = () => ({
        width: `${num}%`,
        backgroundColor: changeColorSet(),
    });
    return (
        <>
            <div className="progress" style={{ height: "9px" }}>
                <div
                    className="progress-bar"
                    style={ChangePasswordColor()}
                ></div>
            </div>
            <p
                className="mt-2"
                style={{
                    display: "felx",
                    textAlign: "text-end",
                    float: "right",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "black",
                }}
            >
                {ContentText()}
            </p>
        </>
    );
}

export default EmailSrength;

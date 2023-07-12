import React from "react";
import Slider from "react-slick";
import orderdata from "./OderOfferDatas";
import "./styles/Offers.scss";
function Offerdata(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };

    return (
        <div className="main-sliders">
            <Slider {...settings}>
                {orderdata.data.map((items, index) => {
                    return (
                        <div className="main-card-slider">
                            <div className="cardt">
                                <div className="split_box">
                                    <div className="left-box1">
                                        <div className="empty-box">
                                            <img
                                                src={items.image}
                                                alt={items.title}
                                                className="mb_sizes"
                                            />
                                        </div>
                                    </div>
                                    <div className="right-box">
                                        <p
                                            className="text-center"
                                            style={{
                                                fontSize: "30px",
                                                color: "#FFF500",
                                                fontWeight: "700",
                                            }}
                                        >
                                            {items.title}
                                        </p>
                                        <p
                                            className="text-center"
                                            style={{
                                                color: "white",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {items.description}
                                        </p>
                                        <p>{items.price}</p>
                                        <p>
                                            Offer End Date:
                                            <span
                                                style={{
                                                    color: "red",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                {items.offerdate}
                                            </span>
                                        </p>
                                        <p
                                            className="text-end"
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Discount:
                                            <span
                                                style={{
                                                    color: "white",
                                                    fontSize: "20px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {items.discount}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Offerdata;

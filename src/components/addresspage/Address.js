import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { Modal } from "bootstrap";
import { useHistory } from "react-router-dom";
const gatData = () => {
    let data = localStorage.getItem("address");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};
function Address(props) {
    const [id, SetId] = useState("");
    const [name, SetName] = useState("");
    const [city, SetCity] = useState("");
    const [street, SetStreet] = useState("");
    const [address, SetAddress] = useState("");
    const [pincode, SetPincode] = useState("");
    const [area, SetArea] = useState("");

    const [stored, SetStore] = useState(gatData);
    const [OneData, SetOneDataModel] = useState([]);
    const useref = useRef(null);
    const usehistory = useHistory();
    const handlesubmit = (e) => {
        e.preventDefault();
        let emptydata = {
            name,
            city,
            street,
            address,
            pincode,
            area,
        };
        SetStore([...stored, emptydata]);
        SetId("");
        SetName("");
        SetCity("");
        SetStreet("");
        SetPincode("");
        SetArea("");
        SetAddress("");
        // usehistory.push("/addresslist");
    };
    console.log("welcome", stored);
    useEffect(() => {
        localStorage.setItem("address", JSON.stringify(stored));
    }, [stored]);
    const edit = (id) => {
        console.log(id);
        let datas = stored;
        datas.forEach((elemets, index) => {
            if (elemets.name == id) {
                toast("Success Updates");
                SetOneDataModel(elemets);
                console.log(elemets, "local data");
            }
        });
        showModal();
    };

    const removeHandler = (name) => {
        console.log(id);
        const filteredExpense = stored.filter((e) => {
            return e.name !== name;
        });

        SetStore(filteredExpense);
    };

    const showModal = () => {
        const modalEle = useref.current;
        const bsModal = new Modal(modalEle, {
            backdrop: "static",
            keyboard: false,
        });
        bsModal.show();
    };

    const hideModal = () => {
        const modalEle = useref.current;
        const bsModal = Modal.getInstance(modalEle);
        bsModal.hide();
    };

    return (
        <div className="container">
            <div className="col-lg-6 mt-5">
                <form onSubmit={handlesubmit}>
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">
                            Name
                        </label>
                        <input
                            type="name"
                            class="form-control"
                            id="exampleInputName1"
                            aria-describedby="exampleInputName"
                            onChange={(e) => SetName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputCity1" class="form-label">
                            City
                        </label>
                        <input
                            type="city"
                            class="form-control"
                            id="exampleInputCity1"
                            onChange={(e) => SetCity(e.target.value)}
                            value={city}
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputStreet1" class="form-label">
                            Street
                        </label>
                        <input
                            type="street"
                            class="form-control"
                            id="exampleInputStreet1"
                            aria-describedby="exampleInputStreet1"
                            onChange={(e) => SetStreet(e.target.value)}
                            value={street}
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPincode1" class="form-label">
                            Pin Code
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="exampleInputPincode1"
                            aria-describedby="exampleInputPincode1"
                            onChange={(e) => SetPincode(e.target.value)}
                            value={pincode}
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputArea1" class="form-label">
                            Area
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputArea1"
                            aria-describedby="exampleInputArea1"
                            onChange={(e) => SetArea(e.target.value)}
                            value={area}
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputAddress1" class="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputAddress1"
                            aria-describedby="exampleInputAddress1"
                            onChange={(e) => SetAddress(e.target.value)}
                            value={address}
                            required
                        />
                    </div>
                    <div class="mb-3 form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div className="mt-5">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>street</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stored.map((items, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{items.name}</td>
                                        <td>{items.city}</td>
                                        <td>{items.street}</td>
                                        <td onClick={() => edit(items.name)}>
                                            <ion-icon name="create-outline"></ion-icon>
                                        </td>
                                        <td
                                            onClick={() =>
                                                removeHandler(items.name)
                                            }
                                        >
                                            <ion-icon name="trash-outline"></ion-icon>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {stored.length < 1 && <div>No records Data</div>}
                </div>
            </div>

            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
                ref={useref}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label
                                        for="exampleInputName12"
                                        class="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        class="form-control"
                                        id="exampleInputName12"
                                        aria-describedby="exampleInputName"
                                        value={OneData.name}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label
                                        for="exampleInputCity12"
                                        class="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="city"
                                        class="form-control"
                                        id="exampleInputCity12"
                                        value={OneData.city}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label
                                        for="exampleInputStreet12"
                                        class="form-label"
                                    >
                                        Street
                                    </label>
                                    <input
                                        type="street"
                                        class="form-control"
                                        id="exampleInputStreet12"
                                        aria-describedby="exampleInputStreet1"
                                        value={OneData.street}
                                    />
                                </div>

                                <div class="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="exampleCheck12"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="exampleCheck1"
                                    >
                                        Check me out
                                    </label>
                                </div>
                                <button type="submit" class="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Understood
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;

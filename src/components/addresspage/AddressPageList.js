import React, { useEffect, useState, useRef } from "react";
import { Modal } from "bootstrap";
import "./styles/Address.scss";
import { toast } from "react-toastify";
function AddressPageList(props) {
    const [addresslist, SetAddresslist] = useState([]);
    const useref = useRef(null);
    const [OneData, SetOneDataModel] = useState([]);
    useEffect(() => {
        getDataSets();
    }, []);
    const getDataSets = () => {
        let formData = localStorage.getItem("address");
        if (formData) {
            return SetAddresslist(JSON.parse(formData));
        } else {
            return [];
        }
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

    const edit = (id) => {
        console.log(id);
        let datas = addresslist;
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
        console.log(name);
        const filteredExpense = addresslist.filter((e) => {
            return e.name !== name;
        });

        SetAddresslist(filteredExpense);
    };

    return (
        <div className="main-address">
            <div className="inside-address">
                <div className="container">
                    <div className="inside-container">
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
                                {addresslist.map((items, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{items.name}</td>
                                            <td>{items.city}</td>
                                            <td>{items.street}</td>
                                            <td
                                                onClick={() => edit(items.name)}
                                            >
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
                    </div>
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

export default AddressPageList;

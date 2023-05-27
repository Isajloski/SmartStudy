import React, { useState } from 'react';
import '../Style.css';
import img from './img.png';
import repository from "../../../repository/repository";

const PopupDelete = ({ id, name, type, func }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleYes = () => {
        if (type === 'material') {
            repository.deleteMaterial(id)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if(type === 'section'){
            repository.deleteSection(id)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if(type === 'course'){
            repository.deleteCourse(id)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
        console.log("The file " + name + " with the id od  " + id + ", of the type: " + type);
    };

    return (
        <div>
            <div>
                <img src={img} onClick={handleOpenModal} style={{ height: '1.6rem', marginRight: '0.5rem' }}/>
            </div>

            {showModal && (
                <div className="modal modal-overlay" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content bg-white text-black">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete</h5>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure that you want to delete <b className="bg-dark text-white">{name}?</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-dark" onClick={handleCloseModal}>
                                    Close
                                </button>
                                <button type="button " className="btn btn-dark" onClick={handleYes}>
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupDelete;

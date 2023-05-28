import React, { useState } from 'react';
import '../Style.css';
import img from './img.png';

const PopupEdit = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div>
            <div>
                <img src={img} onClick={handleOpenModal} style={{ height: '1.6rem', marginRight: '0.5rem' }}/>
                <button className="btn btn-light" onClick={handleOpenModal}>Edit</button>
            </div>

            {showModal && (
                // <div className="modal modal-overlay" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                //     <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                //         <div className="modal-content bg-dark text-white">
                //             <div className="modal-header">
                //                 <h5 className="modal-title">Delete</h5>
                //
                //             </div>
                //             <div className="modal-body">
                //                 <p>Are you sure that you want to delete this file?</p>
                //             </div>
                //             <div className="modal-footer">
                //                 <button type="button" className="btn btn-outline-light" onClick={handleCloseModal}>
                //                     Close
                //                 </button>
                //                 <button type="button " className="btn btn-light" onClick={handleCloseModal}>
                //                     Yes
                //                 </button>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                <div className="modal modal-overlay" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content bg-white text-black">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit</h5>
                            </div>
                            <div className="modal-body">
                                <label>Rename the file: </label>
                                <input placeholder="01 Introduction"/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-dark" onClick={handleCloseModal}>
                                    Close
                                </button>
                                <button type="button " className="btn btn-dark" onClick={handleCloseModal}>
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

export default PopupEdit;

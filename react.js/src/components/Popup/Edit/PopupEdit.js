import React, { useRef, useState } from 'react';
import '../Style.css';
import img from './img.png';
import repository from "../../../repository/repository";
import PopupDelete from "../Delete/PopupDelete";

const PopupEdit = ({ id, name, file, type, func }) => {
    const [showModal, setShowModal] = useState(false);

    const [newName, setNewName] = useState(() => name);
    const [newFile, setNewFile] = useState( () => file);


    const handleCloseModal = () => {
        setShowModal(false);
        console.log("The file that was about to be sent: " + newName);

        setNewName(name);
        setNewFile(file);
    };

    const handleYes = () => {
        if (type === 'material') {
            const formData = new FormData();
            formData.append('name', newName);
            formData.append('file', newFile);
            repository.editMaterial(id, formData)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if(type === 'section'){
            const formData = new FormData();
            formData.append('name', newName);
            repository.editSection(id, formData)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if(type === 'course'){
            const formData = new FormData();
            formData.append('name', newName);
            repository.editCourse(id,formData)
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
    };


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setNewFile(selectedFile);
            setNewName(selectedFile.name);
        }
    };

    const handleNameChange = (e) => {
        setNewName(e.target.value);
        console.log(newName);
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
                                <h5 className="modal-title">Edit</h5>
                            </div>
                            <div className="modal-body">
                                <label>Rename the {name} to:</label>
                                <input
                                    className="bg-dark text-white w-100"
                                    placeholder={newName}
                                    name={newName}
                                    id={newName}
                                    onChange={handleNameChange}
                                />
                                {type === 'material' ? (
                                    <div>
                                        <br/>
                                        <label>Change the file to: </label>
                                        <input type="file"
                                               name={newFile}
                                               id={newFile}
                                               onChange={handleFileChange}
                                        />
                                    </div>
                                ):null}

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

export default PopupEdit;

import React, { useRef, useState } from 'react';
import '../Style.css';
import repository from "../../../repository/repository";
import PopupDelete from "../Delete/PopupDelete";

const PopupCreate = ({ id, name, time ,file, type, func, modalShow,closeModal, a, b, quiz_id, c, d, answer }) => {
    const [showModal, setShowModal] = useState(modalShow);

    const [newName, setNewName] = useState(() => name);
    const [newFile, setNewFile] = useState(() => file);
    const [newTime, setNewTime] = useState(() => time);
    const [newA, setNewA] = useState('');
    const [newB, setNewB] = useState('');
    const [newC, setNewC] = useState('');
    const [newD, setNewD] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    const handleCloseModal = () => {
        closeModal(false);
        setShowModal(false);
        console.log("The file that was about to be sent: " + newName);
        setNewName(name);
        setNewFile(file);
        setNewTime(time);
    };

    const handleYes = () => {
        if (type === 'material') {
            const formData = new FormData();
            formData.append('name', newName);
            formData.append('file', newFile);
            formData.append('sectionId', id);
            repository.createMaterial(formData)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (type === 'quiz') {
            const formData = new FormData();
            formData.append('name', newName);
            formData.append('time', newTime);
            repository.editQuiz(id, formData)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }


        if (type === 'section') {
            const formData = new FormData();
            formData.append('name', newName);
            formData.append('courseId', id);
            repository.createSection(formData)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (type === 'course') {
            const formData = new FormData();
            formData.append('name', newName);
            repository.editCourse(id, formData)
                .then(() => {
                    func(); // Call the function after the material is successfully deleted
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        closeModal(false);
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

    const handleTimeChange = (e) => {
        setNewTime(e.target.value);
    };

    const handleA = (e) =>{
        setNewA(e.target.value);
        console.log(newA);
    };

    const handleB = (e) =>{
        setNewB(e.target.value);
        console.log(newB);
    };

    const handleC = (e) =>{
        setNewC(e.target.value);
        console.log(newC);
    };

    const handleD = (e) =>{
        setNewD(e.target.value);
        console.log(newD);
    };

    const handleAnswer = (e) => {
        setNewAnswer(e.target.value);
        console.log(newAnswer);
    };

    return (
        <div>
            {showModal && (
                <div className="modal modal-overlay" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content bg-white text-black">
                            <div className="modal-header">
                                <h5 className="modal-title">Create {type}</h5>
                            </div>
                            <div className="modal-body">
                                <label>Rename: </label>
                                <input
                                    className="bg-dark text-white w-100"
                                    placeholder={newName}
                                    name={newName}
                                    id={newName}
                                    onChange={handleNameChange}
                                />
                                {type === 'quiz' ? (
                                    <div>
                                        <label>Change the time {name} to:</label>
                                        <input
                                            className="bg-dark text-white w-100"
                                            placeholder={newTime}
                                            name={newTime}
                                            id={newTime}
                                            onChange={handleTimeChange}
                                        />
                                    </div>
                                ):null}
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

                                {type === 'question' ? (
                                    <div>
                                        <label>a. </label>
                                        <input
                                            className="bg-dark text-white w-100"
                                            placeholder={newA}
                                            name={newA}
                                            id={newA}
                                            onChange={handleA}
                                        />

                                        <label>b. </label>
                                        <input
                                            className="bg-dark text-white w-100"
                                            placeholder={newB}
                                            name={newB}
                                            id={newB}
                                            onChange={handleB}
                                        />

                                        <label>c. </label>
                                        <input
                                            className="bg-dark text-white w-100"
                                            placeholder={newC}
                                            name={newC}
                                            id={newC}
                                            onChange={handleC}
                                        />

                                        <label>d. </label>
                                        <input
                                            className="bg-dark text-white w-100"
                                            placeholder={newD}
                                            name={newD}
                                            id={newD}
                                            onChange={handleD}
                                        />

                                        <label>Answer </label>
                                        <input
                                            className="bg-dark text-white w-100"
                                            placeholder={newAnswer}
                                            name={newAnswer}
                                            id={newAnswer}
                                            onChange={handleAnswer}
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

export default PopupCreate;

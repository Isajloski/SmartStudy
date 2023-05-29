import React from 'react';
import PopupEdit from "../Popup/Edit/PopupEdit";
import PopupDelete from "../Popup/Delete/PopupDelete";
import Repository from "../../repository/repository";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Material from "../Material/Material";
import PopupCreate from "../Popup/Create/PopupCreate";

function Section({courseId}) {

    const user = 'USER';
    const isAdmin = user === 'ADMIN';
    const [sections, setSections] = useState([]);
    const [showPopup, setShowPopup] = useState(false);


    const openModal = () => {
        setShowPopup(true);
    };

    const closeModal = () => {
        setShowPopup(false);
    };


    useEffect(() => {
        loadSections();
    }, []);





    const loadSections = () => {
        Repository.fetchSectionsByCourseId(courseId)
            .then((response) => {
                const data = response.data;
                setSections(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        // <div className="bg-dark  text-white">
        //     {sections.map((section) => (
        //         <h3>{section.name} </h3>
        //         <hr/>
        //         <Material sectionId={section.id} />
        //     ))}
        // </div>
        <div>

            {sections.map((section) => (
                <div key={section.id} className="section-container">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>{section.name}</h3>
                        {isAdmin && (
                            <div className="d-flex align-items-center">
                                <div className="mr-2">
                                    <PopupEdit  id={section.id} name={section.name} type={'section'} func={loadSections}/>
                                </div>
                                <div className="ms-2">
                                    <PopupDelete id={section.id} name={section.name} type={'section'} func={loadSections} />
                                </div>
                            </div>
                        )}
                    </div>
                    <hr />
                    <Material sectionId={section.id} />
                </div>
            ))}
            {isAdmin ? (
                <div>
                    <h3 className="text-center opacity-25"  onClick={openModal}>Create a new section</h3>
                    {showPopup && <PopupCreate closeModal={closeModal} type={'section'} id={courseId} modalShow={true} func={loadSections} />}
                    <hr/>
                </div>
            ):null}

        </div>

    )
}


export default Section;

import React from 'react';
import PopupEdit from "../Popup/Edit/PopupEdit";
import PopupDelete from "../Popup/Delete/PopupDelete";
import Repository from "../../repository/repository";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Material from "../Material/Material";

function Section({courseId}) {

    const user = 'ADMIN';
    const isAdmin = user === 'ADMIN';
    const [sections, setSections] = useState([]);

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

        </div>

    )
}


export default Section;

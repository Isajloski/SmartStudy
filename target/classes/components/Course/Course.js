import React from 'react';
import './Style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Repository from "../../repository/repository";
import Section from "../Section/Section";
import PopupEdit from "../Popup/Edit/PopupEdit";
import PopupDelete from "../Popup/Delete/PopupDelete";
import Material from "../Material/Material";


const Course = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    const user = 'ADMIN';
    const isAdmin = user === 'ADMIN';




    useEffect(() => {
        loadCourse(id);
    }, [id]);

    const loadCourse = () => {
        Repository.fetchCourseById(id)
            .then((data) => {
                setCourse(data.data);
            });
    };



    const theCourseWasDeleted = () =>{
        return ( <div>
            <h1>The course was deleted sucesfully!;</h1>
        </div>);
    }

    if (!course) {
        return <div>No course available</div>;
    }

    return (
        <div className="bg-dark text-white">
            <div className="d-flex justify-content-between align-items-center">
                <h1>{course.name}</h1>
                {isAdmin ? (
                <div className="d-flex align-items-center">
                    <PopupEdit id={id} name={course.name} type={'course'} func={loadCourse}/>
                    <PopupDelete id={id} name={course.name} type={'course'} func={theCourseWasDeleted}/>
                </div>
                    ):null}
            </div>
            <Section courseId={course.id} />
        </div>
    );
}


export default Course;

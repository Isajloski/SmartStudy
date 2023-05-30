import React from 'react';
import './Style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Repository from "../../repository/repository";
import Section from "../Section/Section";
import PopupEdit from "../Popup/Edit/PopupEdit";
import PopupDelete from "../Popup/Delete/PopupDelete";
import Material from "../Material/Material";
import quizLogo from './quiz.png';
import PopupCreate from "../Popup/Create/PopupCreate";
import { Link } from 'react-router-dom';


const Course = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [quizzes, setQuizzes] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    const user = 'ADMIN';
    const isAdmin = user === 'ADMIN';



    useEffect(() => {
        loadCourse(id);
        loadQuiz(id);
    }, [id]);

    const loadCourse = () => {
        Repository.fetchCourseById(id)
            .then((data) => {
                setCourse(data.data);
            });
    };

    const loadQuiz = () => {
        Repository.fetchQuizBySectionId(id)
            .then((data) => {
                setQuizzes(data.data);
            });
    };

    if (!course || !quizzes) {
        return <div>No course available</div>;
    }



    return (

        <div className="bg-dark text-white">
            <div className="d-flex justify-content-between align-items-center">
                <h1>{course.name}</h1>
                <hr />

                {isAdmin ? (
                <div className="d-flex align-items-center">
                    <PopupEdit id={id} name={course.name} type={'course'} func={loadCourse}/>
                    <PopupDelete id={id} name={course.name} type={'course'} func={loadCourse}/>
                </div>
                    ):null}
            </div>
        <hr/>

            <Section courseId={course.id} />
            {quizzes.length !== 0 ? (
                <div>
                    <h3>Испит </h3>
                    <hr/>
                </div>
            ):null}

            {quizzes.map(item => (
                <div key={item.id} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="me-3">
                                <img
                                    src={quizLogo}
                                    alt="Logo"
                                    style={{ height: '1.6rem', marginRight: '0.5rem' }}
                                />
                                <Link className="text-decoration-none text-white" to={`/course/${id}/quiz/${item.id}`}>{item.name}</Link>

                            </p>
                        </div>
                    </div>
                    <div>
                        {isAdmin ? (
                            <div className="d-flex">
                                <div className="ms-2">
                                    <PopupEdit id={item.id} name={item.name} time={item.time} type={'quiz'} func={loadQuiz} />
                                </div>
                                <div className="ms-2">
                                    <PopupDelete id={item.id}  name={item.name} type={'quiz'} func={loadQuiz} />
                                </div>
                            </div>
                        ):null}

                    </div>
                </div>
            ))}







        </div>
    );
}


export default Course;

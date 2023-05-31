import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Repository from "../../repository/repository";

const Grade = () => {
    const { course_id } = useParams();
    const [course, setCourse] = useState(null);
    const [newGrade, setGrade] = useState(null);

    const userJson = localStorage.getItem("User");
    const user = JSON.parse(userJson);

    const userType = user?.role;
    const isAdmin = userType === 1;



    useEffect(() => {
        const loadCourse = () => {
            Repository.fetchCourse(course_id)
                .then((response) => {
                    const data = response.data;
                    setCourse(data);
                    console.log(course);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        loadCourse();

        const fetchGradeByUserAndCourse = () => {
            const formData = new FormData();
            formData.append('user_id', user.id);
            formData.append('course_id', course_id)
            Repository.fetchGradeByUserAndCourse(user.user_id, course_id)
                .then((response) => {
                    const data = response.data;
                    setGrade(data);
                    console.log(newGrade);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        fetchGradeByUserAndCourse();
    }, [course_id, user.id]);

    if (course === null) {
        return <div>waiting</div>;
    }

    return (
        <div className="text-white bg-dark text-center p-4">
            <h1>{user.id}</h1>
            <hr />
            <p>Your grade in this course is</p>
            <button className="btn btn-light disabled">
                <Link className="text-decoration-none text-black">{newGrade.grade}</Link>
            </button>
            <hr />
        </div>
    );
};

export default Grade;

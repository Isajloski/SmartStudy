import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Repository from "../../repository/repository";

const Grades = () => {
    const [course, setCourse] = useState(null);

    const userJson = localStorage.getItem("User");
    const user = JSON.parse(userJson);

    const userType = user?.role;
    const isAdmin = userType === 1;

    const loadCourse = () => {
        Repository.fetchCourseByUser(user.user_id)
            .then((response) => {
                const data = response.data;
                setCourse(data);
                console.log(course);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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





return (
        <div className="text-white bg-dark">
            <h1>Grades</h1>
            <hr/>
        </div>
    );
};

export default Grades;

import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import Repository from "../../repository/repository";

const Quiz = () => {
    const { course_id, quiz_id } = useParams();

    const [quiz, setQuiz] = useState(null);


    useEffect(() => {
        loadQuiz(quiz_id);
    }, [quiz_id]);

    const loadQuiz = () => {
        Repository.fetchQuiz(quiz_id)
            .then((data) => {
                setQuiz(data.data);
            });
    };

    if (!quiz) {
        return <div>No course available</div>;
    }


    return (
        <div className="text-white bg-dark text-center p-4">
            <h1>{quiz.name}</h1>
            <hr/>
            <p>You only have <b className="bg-white text-black fw-semibold">{quiz.time} minutes</b> for this exam. </p>
            <p>Once the time passes you cannot reopen the quiz.</p>
            <button className="btn btn-light">  <Link className="text-decoration-none text-black" to={`/course/${course_id}/quiz/${quiz.id}/question/${1}`}>Start</Link></button>
            <hr/>
        </div>
    );
}

export default Quiz;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Repository from "../../repository/repository";
import Timer from "../Timer/Timer";
import PopupCreate from "../Popup/Create/PopupCreate";

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [quiz, setQuiz] = useState(null);
    const { course_id, quiz_id, question_id } = useParams();
    const [showPopup, setShowPopup] = useState(true);

    const user = 'ADMIN';
    const isAdmin = user === 'ADMIN';

    const openModal = () => {
        setShowPopup(true);
    };

    const closeModal = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        loadQuestions();
        loadQuestion(question_id);
        loadQuiz();
    }, [quiz_id, question_id]);

    const loadQuestions = () => {
        Repository.findQuestionByQuizId(quiz_id)
            .then((response) => {
                const data = response.data;
                setQuestions(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const submitGrade = () => {
        Repository.findQuestionByQuizId(quiz_id)
            .then((response) => {
                const data = response.data;
                setQuestions(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const loadQuiz = () => {
        Repository.fetchQuiz(quiz_id)
            .then((data) => {
                setQuiz(data.data);
            });
    };

    const loadQuestion = (id) => {
        Repository.fetchQuestion(id)
            .then((response) => {
                const data = response.data;
                setQuestion(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleAnswerChange = (event) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [question_id]: event.target.value,
        }));
    };

    const handleAnswerSubmit = () => {
        // Calculate the percentage of correct and wrong answers
        const correctAnswersCount = questions.reduce((count, q) => {
            return selectedAnswers[q.id] === q.answer.charAt(0) ? count + 1 : count;
        }, 0);

        const totalQuestions = questions.length;
        const correctPercentage = (correctAnswersCount / totalQuestions) * 100;

        const user_id = 1;

        const formData = new FormData();
        formData.append('user_id', user_id);
        formData.append('course_id', course_id);
        formData.append('grade', correctPercentage);
        Repository.createGrade(formData);
    };

    if (!questions || !question) {
        return <div>Loading...</div>;
    }

    return (
        <div className="text-white">
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="bg-dark rounded-3 border p-3 border-white border-1 col-md-3">
                        <div className="grid-container row row-cols-3">
                            {questions.map((item, index) => (
                                <div className="grid-item col" key={item.id}>
                                    <div
                                        className={`bg-white rounded-3 border p-3 border-white border-1 d-flex align-items-center justify-content-center ${
                                            !selectedAnswers[item.id] ? "bg-green" : ""
                                        }`}
                                        style={{ marginBottom: index % 3 === 1 ? "10px" : 0 }}
                                    >
                                        <Link
                                            className="m-0 text-decoration-none text-center text-black"
                                            to={`/course/${course_id}/quiz/${quiz_id}/question/${item.id}`}
                                        >
                                            {item.id}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="justify-content-center  align-items-center">
                            <br />
                            <br />
                            <button
                                className="text-center justify-content-center text text-center btn btn-light "
                                onClick={handleAnswerSubmit}
                            >
                                Finish
                            </button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h3>{question.name}</h3>
                                    <hr />

                                    <div>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id="optionA"
                                                className="form-check-input"
                                                name="answer"
                                                value="a"
                                                checked={selectedAnswers[question_id] === "a"}
                                                onChange={handleAnswerChange}
                                            />
                                            <label htmlFor="optionA" className="form-check-label">
                                                a. {question.a}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id="optionB"
                                                className="form-check-input"
                                                name="answer"
                                                value="b"
                                                checked={selectedAnswers[question_id] === "b"}
                                                onChange={handleAnswerChange}
                                            />
                                            <label htmlFor="optionB" className="form-check-label">
                                                b. {question.b}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id="optionC"
                                                className="form-check-input"
                                                name="answer"
                                                value="c"
                                                checked={selectedAnswers[question_id] === "c"}
                                                onChange={handleAnswerChange}
                                            />
                                            <label htmlFor="optionC" className="form-check-label">
                                                c. {question.c}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id="optionD"
                                                className="form-check-input"
                                                name="answer"
                                                value="d"
                                                checked={selectedAnswers[question_id] === "d"}
                                                onChange={handleAnswerChange}
                                            />
                                            <label htmlFor="optionD" className="form-check-label">
                                                d. {question.d}
                                            </label>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        {question_id > 1 ? (
                                            <button className="btn btn-light">
                                                <Link
                                                    className="text-decoration-none text-center text-black"
                                                    to={`/course/${course_id}/quiz/${quiz_id}/question/${
                                                        parseInt(question_id) - 1
                                                    }`}
                                                >
                                                    Previous
                                                </Link>
                                            </button>
                                        ) : (
                                            <button className="btn btn-light disabled">
                                                Previous
                                            </button>
                                        )}
                                        {question_id < questions.length ? (
                                            <button className="btn btn-light">
                                                <Link
                                                    className="text-decoration-none text-center text-black"
                                                    to={`/course/${course_id}/quiz/${quiz_id}/question/${
                                                        parseInt(question_id) + 1
                                                    }`}
                                                >
                                                    Next
                                                </Link>
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-light"
                                                onClick={isAdmin ? openModal : handleAnswerSubmit}
                                            >
                                                {isAdmin ? "Create" : "Finish"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isAdmin ? (
                <div>
                    <h3 className="text-center opacity-25" onClick={openModal}>
                        Create a new Question
                    </h3>
                    {showPopup && (
                        <PopupCreate
                            closeModal={closeModal}
                            type={"question"}
                            quiz_id={quiz_id}
                            id={course_id}
                            modalShow={true}
                            func={loadQuestions}
                        />
                    )}
                    <hr />
                </div>
            ) : null}
        </div>
    );
};

export default Question;

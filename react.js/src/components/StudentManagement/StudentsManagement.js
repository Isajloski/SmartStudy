import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentsManagement = () => {
    const [students, setStudents] = useState([]);
    const [newStudentName, setNewStudentName] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('/api/students');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleAddStudent = async () => {
        try {
            const newStudent = {
                name: newStudentName,
            };
            const response = await axios.post('/api/students', newStudent);
            setStudents([...students, response.data]);
            setNewStudentName(''); // Reset the input field after adding the student
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    const handleDeleteStudent = async (studentId) => {
        try {
            await axios.delete(`/api/students/${studentId}`);
            setStudents(students.filter((student) => student.id !== studentId));
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };


    const handleRateStudent = async (studentId, gradeId) => {
        try {
            const updatedRating = prompt('Enter the new rating:');
            if (updatedRating === null) return; // Handle cancel button click

            const updatedGrade = {
                rating: parseInt(updatedRating),
            };

            await axios.put(
                `/api/students/${studentId}/grades/${gradeId}`,
                updatedGrade
            );

            const updatedStudents = students.map((student) => {
                if (student.id === studentId) {
                    const updatedGrades = student.grades.map((grade) => {
                        if (grade.id === gradeId) {
                            return { ...grade, rating: parseInt(updatedRating) };
                        }
                        return grade;
                    });
                    return { ...student, grades: updatedGrades };
                }
                return student;
            });

            setStudents(updatedStudents);
        } catch (error) {
            console.error('Error changing rating:', error);
        }
    };

    const handleDeleteGrade = async (studentId, gradeId) => {
        try {
            await axios.delete(`/api/students/${studentId}/grades/${gradeId}`);

            const updatedStudents = students.map((student) => {
                if (student.id === studentId) {
                    const updatedGrades = student.grades.filter(
                        (grade) => grade.id !== gradeId
                    );
                    return { ...student, grades: updatedGrades };
                }
                return student;
            });

            setStudents(updatedStudents);
        } catch (error) {
            console.error('Error deleting grade:', error);
        }
    };

    return (
        <div className="bg-dark text-white">
            <button className="btn btn-primary" onClick={handleAddStudent}>
                Add Student
            </button>

            <ul className="list-group">
                {students.map((student) => (
                    <li className="list-group-item bg-dark text-white" key={student.id}>
                        {student.name}

                        {/* Button to delete a grade */}
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteGrade(student.id, grade.id)}
                        >
                            Delete Grade
                        </button>

                        {/* Button to change rating */}
                        <button
                            className="btn btn-info"
                            onClick={() => handleRateStudent(student.id, grade.id)}
                        >
                            Change Rating
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default StudentsManagement;

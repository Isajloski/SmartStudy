import React from 'react';
import Style  from './Style.css';

function Course(props) {
    const { courses } = props;

    if (!courses || courses.length === 0) {
        // Handle the case when the course array is empty or undefined
        return <div>No course available</div>;
    }

    const course = courses[0]; // Assign the first element of the course array to a new variable

    return (
        <div className="bg-dark  text-white">
            <h1 >{course.name}</h1>
            <hr/>
            <h3>Прв колоквиум предавања</h3>
            <hr/>
            <p>01 Introcuction</p>
            <p>02 Project Management Life Cycle</p>
            <p>03 Managing Project Teams</p>
            <hr/>
            <h3>Втор колоквиум предавање</h3>
            <hr /> {/* Apply the fade-line class */}
            <img src=""></img>
            <p>01 Introcuction</p>
            <p>02 Project Management Life Cycle</p>
            <p>03 Managing Project Teams</p>
            <hr/>
            <h3>Домашни</h3>
            <hr />
            <p>
                <img src="https://www.freeiconspng.com/uploads/word-file-icon-8.png" alt="Logo" style={{ height: '1.6rem', marginRight: '0.5rem' }} />
                01 Introcuction
            </p>
            <p>
                <img src="https://pixlok.com/wp-content/uploads/2021/05/PDF_file_icon.jpg" alt="Logo" style={{ height: '1.6rem', marginRight: '0.5rem' }} />
                01 Introcuction
            </p>
            <p>03 Managing Project Teams</p>




        </div>
    );
}


export default Course;

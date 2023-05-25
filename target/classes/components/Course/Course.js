import React from 'react';

function Course (props) {
    const { course } = props;

    return (
        <div>
            <h1>Course Component: </h1>
            <ul>
                {course.map((item) => (
                    <li key={item.id}>
                        <p>ID: {item.id}</p>
                        <p>Sections: {item.sections.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Course;

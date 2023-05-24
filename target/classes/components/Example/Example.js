import React from 'react';

function Example (props) {
    const { example } = props;

    return (
        <div>
            <h1>Example Component: </h1>
            <ul>
                {example.map((item) => (
                    <li key={item.id}>
                        <p>ID: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Number: {item.number}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Example;

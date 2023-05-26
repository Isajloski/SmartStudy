import React, { useState } from 'react';
import Repository from "../../../repository/repository";

const CreateMaterial = () => {

    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [id, setId] = useState(1);


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleId = (e) =>{
        setId(e.target.value);
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setName(selectedFile.name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('sectionId', id);
        formData.append('name', name);
        formData.append('file', file);

        Repository.createMaterial(formData);

        // Reset the form fields
        setName('');
        setFile(null);
        setId(1);
    };

    return (
        <form onSubmit={handleSubmit} className="text-bg-danger">
            <div>
                <label htmlFor="id">Content id:</label>
                <input
                    type="number"
                    id="id"
                    name="id"
                    value={id}
                    onChange={handleId}
                />
            </div>

            <div>
                <label htmlFor="file">File:</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                />
            </div>

            <div>
                <label htmlFor="name">Rename the file name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );

}

export default CreateMaterial;

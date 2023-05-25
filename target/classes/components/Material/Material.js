import React, { useEffect, useState } from "react";




function Material(props) {
    const { material } = props;

    const decodeBase64 = (fileData) => {
        const byteCharacters = atob(fileData);
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        return new Uint8Array(byteNumbers);
    };

    const openFileInNewTab = (fileData, fileName) => {
        const byteArray = decodeBase64(fileData);
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const newTab = window.open();
        newTab.location.href = url;

        // Clean up the URL object
        URL.revokeObjectURL(url);
    };

    const downloadFile = (fileData, fileName) => {
        const byteArray = decodeBase64(fileData);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <h1>List the Course material:</h1>
            <ul>
                {material.map((item) => (
                    <li key={item.id}>
                        <p>ID: {item.section.id}</p>
                        <p>Name: {item.name}</p>
                        <button onClick={() => downloadFile(item.file, item.name)}>Download</button>
                        <button onClick={() => openFileInNewTab(item.file, item.name)}>
                            Open
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default Material;

import React, { useEffect, useState } from "react";
import './Style.css';
import otherFile from  './img/otherfile.png';
import pdf from './img/pdf.png';
import docx from './img/docx.png';
import pptx from './img/pptx.png';
import xlsx from './img/xlsx.png';
import PopupDelete from "../Popup/Delete/PopupDelete";
import PopupEdit from "../Popup/Edit/PopupEdit";
import Repository from "../../repository/repository";
import PopupCreate from "../Popup/Create/PopupCreate";


const Material = ({ sectionId }) => {
    const [material, setMaterial] = useState([]);
    const user = 'USER';
    const isAdmin = user === 'ADMIN';

    const [showPopup, setShowPopup] = useState(false);


    const openModal = () => {
        setShowPopup(true);
    };

    const closeModal = () => {
        setShowPopup(false);
    };


    useEffect(() => {
        loadMaterial();
    }, [sectionId]);

    const loadMaterial = () => {
        Repository.fetchMaterialsBySectionId(sectionId)
            .then((response) => {
                const data = response.data;
                setMaterial(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fileExtensionToIcon = {
        pdf: pdf,
        docx: docx,
        pptx: pptx,
        xlsx: xlsx,
        homework: otherFile
    };

    const getFileIcon = (fileName) => {
        if (!fileName) return null;

        const extension = fileName.split('.').pop();
        return fileExtensionToIcon[extension.toLowerCase()] || null;
    };

    const decodeBase64 = (fileData) => {
        const byteCharacters = atob(fileData);
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        return new Uint8Array(byteNumbers);
    };

    const openFileInNewTab = (fileData, fileName) => {
        const extension = fileName.split('.').pop();
        if(extension !== 'pdf'){
            return downloadFile(fileData,fileName);
        }
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

    const getName = (name) => {
        const extensionIndex = name.lastIndexOf('.');
        if (extensionIndex !== -1) {
            return name.substring(0, extensionIndex);
        }
        return name;
    }

    if(material == null){
    }


    return (
        <div className="text-white bg-dark">


            <ul className="list-unstyled">

                {material.map((item) => (
                    <li className="list-inline" key={item.id}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <p onClick={() => openFileInNewTab(item.file, item.name)}>
                                    <img
                                        src={getFileIcon(item.name)}
                                        alt="Logo"
                                        style={{ height: '1.6rem', marginRight: '0.5rem' }}
                                        onClick={() => openFileInNewTab(item.file, item.name)}
                                    />
                                    {getName(item.name)}
                                </p>
                            </div>
                            {isAdmin ? (
                            <div className="d-flex align-items-center justify-content-end">
                                <div className="mr-2 ">
                                    <PopupEdit id={item.id} name={item.name} file={item.file} type={'material'} func={loadMaterial}/>
                                </div>
                                <div className="ms-2"> {/* Add a small left padding */}
                                    <PopupDelete id={item.id} name={item.name} type={'material'} func={loadMaterial} />
                                </div>
                            </div>
                            ): null}
                        </div>
                    </li>
                ))}
                {isAdmin ? (
                    <div>
                        <p className="text-center opacity-25"  onClick={openModal}>Create a new material</p>
                        {showPopup && <PopupCreate closeModal={closeModal} type={'material'} id={sectionId} modalShow={true} func={loadMaterial} />}
                        <hr/>
                    </div>
                ): null}

            </ul>

        </div>
    );
}

export default Material;

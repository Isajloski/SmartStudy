import axios from '../axios/axios';

const Repository = {
    fetchExample: () => {
        return axios.get("/example/listAll");
    },
    fetchMaterial: () => {
        return axios.get("/material/listAll");
    },
    createMaterial: (formData) => {
        return axios.post("/material/create", formData);
    },
    fetchCourse() {
        return axios.get("/course/listAll");
    },
    deleteMaterial(id) {
        return axios.post(`/material/delete/${id}`);
    }
}

export default Repository;



import axios from '../axios/axios';

const Repository = {
    login:(username,password)=>{
        return axios.post("/auth/signin",{username,password})
    },
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
    },
    fetchCourseById(id) {
        return axios.get(`/course/findById/${id}`);
    },
    fetchSectionsByCourseId(courseId) {
        return axios.get(`/section/findSectionsByCourseId/${courseId}`)
    },
    fetchMaterialsBySectionId(sectionId) {
        return axios.get(`/material/findMaterialsBySectionId/${sectionId}`)
    },
    deleteSection(id) {
        return axios.post(`/section/delete/${id}`);

    },
    deleteCourse(id) {
        return axios.post(`/course/delete/${id}`);
    },
    editSection(id, formData) {
        return axios.post(`/section/edit/${id}`, formData)
    },
    editMaterial(id, formData) {
        return axios.post(`/material/edit/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set the proper content type for form data
            }
        });
    },
    editCourse(id, formData) {
        return axios.post(`/course/edit/${id}`, formData)
    },
    fetchQuizBySectionId(sectionId) {
        return axios.get(`/quiz/findQuizByCourseId/${sectionId}`)
    },
    fetchQuiz(id) {
        return axios.get(`/quiz/findById/${id}`)
    },
    editQuiz(id, formData) {
        return axios.post(`/quiz/edit/${id}`, formData)
    },
    deleteQuiz(id) {
        return axios.post(`/quiz/delete/${id}`)
    },

    createSection(formData) {
        return axios.post("/section/create", formData);
    },
    findQuestionByQuizId(quiz_id) {
        return axios.get(`/question/findQuestionByQuizId/${quiz_id}`)
    },
    fetchQuestion(question_id) {
        return axios.get(`/question/findById/${question_id}`);
    }
}

export default Repository;



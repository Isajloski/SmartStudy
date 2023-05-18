import axios from '../axios/axios';

const Repository = {
    fetchExample: () => {
        return axios.get("/listAll");
    }
}

export default Repository;



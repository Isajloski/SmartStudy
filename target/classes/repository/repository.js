import axios from '../axios/axios';

const Repository = {
    fetchExample: () => {
        return axios.get("/example/listAll");
    }
}

export default Repository;



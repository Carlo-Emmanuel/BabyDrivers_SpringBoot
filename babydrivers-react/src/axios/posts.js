import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'http://localhost:8080',
    headers:{

    }
});

export default authFetch;
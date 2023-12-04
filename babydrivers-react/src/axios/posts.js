import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'http://localhost3600',
    headers:{

    }
});

export default authFetch;
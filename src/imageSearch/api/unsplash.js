import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dIrPZmriuKAXHO0fWEAa4jn0_nVdPmajw8-9aX8kOdM ' 
    }
})


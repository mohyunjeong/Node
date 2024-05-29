import axios from 'axios';

const instance = axios.create({
    baseURL : "http://localhost:3017"
});

export default instance; // react 이기 때문에 export default를 사용해줘야 한다!
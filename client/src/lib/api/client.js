import axios from 'axios';

const client = axios.create();

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     headers: { 'X-Custom-Header': 'foobar' },
//     timeout: 1000,
//   });

export default client;

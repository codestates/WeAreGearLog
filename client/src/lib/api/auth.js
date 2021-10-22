import client from './client';

export const login = ({ email, password }) =>
  client.post('http://52.79.233.29:8080/user/login', { email, password });

export const register = ({ email, username, password }) =>
  client
    .post('http://52.79.233.29:8080/user/signup', {
      email,
      username,
      password,
    })
    .then((res) => console.log('123123123', res));

export const check = () => client.get('api/auth/check');
//이거 내일 해봐야된다!!

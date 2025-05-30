import axios from 'axios';

export const register = async (user: any) =>
  await axios.post(`http://localhost:4000/api/register`, user);

export const signinGoogle = async (payload: any) =>
  await axios.post(`http://localhost:4000/api/signin-google`, payload);

export const login = async (user: any) =>
  await axios.post(`http://localhost:4000/api/login`, user);

// Save user to localStorage
export const authenticate = (data: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('todo-jobs', JSON.stringify(data));
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('todo-jobs')) {
    return JSON.parse(localStorage.getItem('todo-jobs')!);
  } else {
    return false;
  }
};

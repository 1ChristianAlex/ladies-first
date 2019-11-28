const isDev = process.env.NODE_ENV === 'development'

export const apiUrl = isDev ? 'http://localhost:3333' : 'https://social-woman.herokuapp.com';
export const appUrl = 'http://localhost:3000/';
export const appName = 'Leaf';

console.log(process.env);

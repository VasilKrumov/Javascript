import * as api from './api.js';

const host = 'http://localhost:3030'
api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


//Application-specific requests
export async function getAllMovies() {
    await api.get(host + '/data/movies');
}
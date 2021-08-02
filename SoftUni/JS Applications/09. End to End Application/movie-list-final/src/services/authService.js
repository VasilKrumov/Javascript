import * as request from './requester.js';
import * as api from './api.js';


function saveData({ _id, email, accessToken }) {
    localStorage.setItem('_id', _id);
    localStorage.setItem('email', email);
    localStorage.setItem('accessToken', accessToken);
}

function deleteData() {
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
}

export function getData() {
    let _id = localStorage.getItem('_id');
    let email = localStorage.getItem('email');
    let accessToken = getToken();
    
    return {
        _id,
        email,
        accessToken,
    }
}

export function getToken() {
    let accessToken = localStorage.getItem('accessToken');

    return accessToken;
}

export function login(email, password) {
    return request.post(api.login, { email, password })
        .then(data => {
            saveData(data);
        });
}

export function isAuthenticated() {
    let token = localStorage.getItem('accessToken');

    return Boolean(token);
}

export function logout() {
    return request.get(api.logout)
        .then(res => {
            localStorage.clear();
            
            return res;
        })
}
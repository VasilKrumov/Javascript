import { getToken } from './authService.js';

function request(method, url, data) {
    let options = {}
    let token = getToken();
    
    if (method != 'GET') {
        options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                // ...(token && {'X-Authorization': token})
            },
            body: JSON.stringify(data)
        }
    }

    if (token) {
        options.headers = {
            ...(options.headers),
            'X-Authorization': token
        };
    }

    return fetch(url, options)
        .then(res => {
            if (res.url.endsWith('logout')) {
                return res;
            }
            
            return res.json();
        });
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');

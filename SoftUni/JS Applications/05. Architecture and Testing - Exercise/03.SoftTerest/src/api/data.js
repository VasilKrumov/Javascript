import * as api from './api/js';
console.log(api);
const host = 'http://localhost:3000';
api.settings.host = host;

export async function getIdeas(){
    return await api.get(host + '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}
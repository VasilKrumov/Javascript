import * as request from './requester.js';
import * as api from './api.js';

export const getAll = () => request.get(api.movies);

export const getOne = (id) => request.get(`${api.movies}/${id}`);

export const getMyMovies = (ownerId) => request.get(`${api.movies}?where=_ownerId%3D"${ownerId}"`);

export const create = (title, imageUrl, description) => request.post(`${api.movies}`, { title, img: imageUrl, description });

export const update = (movieId, title, imageUrl, description) => request.put(`${api.movies}/${movieId}`, { title, img: imageUrl, description });

export const deleteMovie = (movieId) => request.del(`${api.movies}/${movieId}`);
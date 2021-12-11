import api from './apiConfig';

export const getAllAlbums = async () => {
  const resp = await api.get('/albums');
  return resp.data;
};

export const getOneAlbum = async (id) => {
  const resp = await api.get(`/albums/${id}`);
  return resp.data;
};

export const createAlbum = async (albumData) => {
  const resp = await api.post('/albums', { album: albumData });
  return resp.data;
};

export const putAlbum = async (id, albumData) => {
  const resp = await api.put(`/albums/${id}`, { album: albumData });
  return resp.data;
};

export const deleteAlbum = async (id) => {
  await api.delete(`/albums/${id}`);
};


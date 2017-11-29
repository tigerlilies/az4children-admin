import axios from 'axios';
import config from '../config';

//local host:3000
const API_URL = config.API_URL;

export const fetchProfiles = () => {
  return ({
    type: 'CHILD',
    payload: axios.get(`${API_URL}/api/profiles`)
  });
}

export const addChild = (child) => {
  return ({
    type: 'CHILD_ADD',
    payload: axios.post(`${API_URL}/api/profiles`, child)
  });
}

export const deleteChild = (id, child) => {
  return ({
    type: 'CHILD_DELETE',
    payload: axios.delete(`${API_URL}/api/profiles/${id}`, child)
  });
}

export const updateClient = (id, child) => {
  return ({
    type: 'CHILD_UPDATE',
    payload: axios.patch(`${API_URL}/api/profiles/${id}`, child)
  });
}

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

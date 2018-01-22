import axios from 'axios';
import config from '../config';

//local host:3000
const API_URL = config.API_URL;

// Header for jwt token
const head = {
                headers: {
                  authorization : localStorage.getItem('token')
                }
              }

export const fetchProfiles = (token) => {
  console.log("FETCHPROFILES", token)
  return ({
    type: 'CHILD',
    payload: axios.get(`${API_URL}/api/profiles`, {
                    headers: {
                      authorization : token
                    }
                  })
  });
}

export const addChild = (child ,token) => {
  return ({
    type: 'CHILD_ADD',
    payload: axios.post(`${API_URL}/api/profiles`, child, {
                    headers: {
                      authorization : token
                    }
                  })
  });
}

export const deleteChild = (id, child,token) => {
console.log("deletechild", {
                headers: {
                  authorization : token
                }
              })
  return ({
    type: 'CHILD_DELETE',
    payload: axios.delete(`${API_URL}/api/profiles/${id}`,  {
                    headers: {
                      authorization : token
                    }
                  })
  });
}

export const updateChild = (id, child, token) => {
  return ({
    type: 'CHILD_UPDATE',
    payload: axios.patch(`${API_URL}/api/profiles/${id}`, child, {
                    headers: {
                      authorization : token
                    }
                  }
                )
  });
}

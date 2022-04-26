import axios from 'axios';
import { BASE_URL } from '../constants/endPoints';
const baseUrl = `${BASE_URL}/api/users`;

const getPage = async (page) => {
  const request = await axios.get(`${baseUrl}?page=${page}`);
  return request.data;
};

const post = async (newUser) => {
  const request = await axios.post(baseUrl, newUser);
  return request.data;
};

const put = async (newObject) => {
  const request = await axios.post(`${baseUrl}/${newObject.id}`, newObject);
  return request.data;
};

const remove = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`);
  return request.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPage, post, put, remove };

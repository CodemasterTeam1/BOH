import {BASE_URL} from '../../../utils/URL';
import axios from 'axios';

const API = async (
  url,
  options = {
    method: 'GET',
    head: {},
    body: {},
  },
) => {
  const request = {
    baseURL: BASE_URL,
    method: options.method,
    timeout: 10000,
    url,
    headers: options.head,
    responseType: 'json',
  };

  if (
    request.method === 'POST' ||
    request.method === 'PUT' ||
    request.method === 'DELETE'
  ) {
    request.data = options.body;
  }
  const res = await axios(request);

  return res.data;
};

export default API;

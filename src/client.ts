const API_URL = 'https://jsonplaceholder.typicode.com';

const get = async<T = any>(url: string): Promise<T> => (
  fetch(API_URL + url).then(resp => resp.json())
);

export default {
  get,
};

const API_URL = 'https://jsonplaceholder.typicode.com';

function get<T = any>(url: string): Promise<T> {
  return fetch(API_URL + url).then(resp => resp.json());
}

export default {
  get,
};

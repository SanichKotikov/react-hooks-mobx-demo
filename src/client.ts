const API_URL = 'https://jsonplaceholder.typicode.com';

const get = async(url: string) => (
  fetch(API_URL + url).then(resp => resp.json())
);

export default {
  get,
};

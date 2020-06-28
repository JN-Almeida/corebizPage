import axios from 'axios';

const apiNews = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
});

export default apiNews;

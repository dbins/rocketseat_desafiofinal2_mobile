import axios from 'axios';

const cep = axios.create({
  baseURL: 'https://dbins.websiteseguro.com/ferramentas/cep',
});

export default cep;

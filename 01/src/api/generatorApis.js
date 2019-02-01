import axios from 'axios';

const generateFact = seed => axios
  .get(`http://numbersapi.com/${seed}`)
  .then(response => response.data);

export default generateFact;

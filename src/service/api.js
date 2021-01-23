import axios from 'axios';
const apiKey = '19799176-4c87c41e9b3623f80b0424cac';

const fetchImageWithKeyword = (keyword, page) => {
  const baseUrl = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&page=${page}&per_page=12`;
  return axios.get(baseUrl).then(response => {
    console.log(response.data);
    return response.data;
  });
};
export default fetchImageWithKeyword;

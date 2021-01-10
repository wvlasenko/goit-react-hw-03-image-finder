import axios from 'axios';
const apiKey = '19799176-4c87c41e9b3623f80b0424cac';
const fetchImageWithKeyword = (keyword, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&page=${page}&per_page=12`,
    )
    .then(response => {
      console.log(response.data);
      return response.data;
    });
};
export default fetchImageWithKeyword;

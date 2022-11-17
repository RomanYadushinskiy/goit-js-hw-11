import axios from 'axios';

export default async function getDataImg(inputValue, pageNum) {
    try {
        const imgRef = await axios.get(`https://pixabay.com/api/?key=31303578-edf23fcb2ab8348590995fcb8&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNum}&per_page=40`);
        return imgRef;

    } catch (error) {
        console.error(error);
    }
}
  




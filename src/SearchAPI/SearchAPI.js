import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/?key=37577511-72bc543c0c5ffeeb68534ea38&per_page=12&image_type=photo&orientation=horizontal'
export const getImgBySearch = async (query, page) => {
	const { data } = await axios(`&q=${query}&page=${page}`)
	return data
}
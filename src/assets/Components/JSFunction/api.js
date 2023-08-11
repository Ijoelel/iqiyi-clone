import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getList = async (prop) => {
	const movie = await axios.get(`${baseUrl}/movie/${prop}?api_key=${apiKey}`);
	return movie.data.results;
};

export const getTrending = async () => {
	const movie = await axios.get(
		`${baseUrl}/trending/all/week?language=en-US&api_key=${apiKey}`
	);
	return movie.data.results.slice(0, 6);
};

export const getGenre = async () => {
	const genre = await axios.get(
		`${baseUrl}/genre/movie/list?language=en&api_key=${apiKey}`
	);
	return genre.data.genres;
};

export const getVideo = async (id) => {
	const {data} = await axios.get(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}`)
	return data.results
}

export const getDetail = async (id) => {
	const { data } = await axios.get(
		`${baseUrl}/movie/${id}?api_key=${apiKey}`
	);
	return data;
};

export const searchMovie = async (q) => {
	const search = await axios.get(q);
	return;
};

export const test = async (id) => {
	const img = await axios.get(`${baseUrl}/movie/${id}/images?api_key=${apiKey}&vote_count.gte=10&vote_count.lte=20`)
	return 	img.data.backdrops
}
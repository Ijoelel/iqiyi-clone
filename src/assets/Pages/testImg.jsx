import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { test } from "../Components/JSFunction/api";

const imgUrl = import.meta.env.VITE_BACKDROP_URL

const Test = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null); // Tambahkan state untuk menyimpan data film

	const getMovies = async (id) => {
		try {
			const movieData = await test(id);
			setMovie(movieData); // Simpan data film ke state
		} catch (error) {
			console.error("Error fetching movie data:", error);
		}
	};

	useEffect(() => {
		getMovies(id); // Panggil fungsi getMovies ketika komponen dipasang
	}, [id]); // Jangan lupa tambahkan [id] sebagai dependensi untuk useEffect

	if (!movie) {
		return <p className="text-white">Loading...</p>; // Tampilkan pesan loading jika data masih diambil
	}

	return (
		<>
			{movie.map((data, i) => {
				return <img src={`${imgUrl}${data.file_path}`} key={i} className="bg-cover"></img>;
			})}
		</>
	);
};

export default Test;

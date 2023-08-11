import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail, getVideo } from "../Components/JSFunction/api";
import MovieApp from "../Components/Detail/Movie";
import VideoPlayer from "../Components/Detail/VidPlayer";
import Highlight from "../Components/Detail/Highlight";

const Detail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null); // Tambahkan state untuk menyimpan data film
	const [video, setVideo] = useState(null);

	const getMovies = async (id) => {
		try {
			const movieData = await getDetail(id);
			const videoData = await getVideo(id);
			setMovie(movieData); // Simpan data film ke state
			setVideo(videoData);
		} catch (error) {
			console.error("Error fetching movie data:", error);
		}
	};

	useEffect(() => {
		getMovies(id); // Panggil fungsi getMovies ketika komponen dipasang
		getVideo(id);
	}, [id]); // Jangan lupa tambahkan [id] sebagai dependensi untuk useEffect

	if (!movie) {
		return <p className="text-white">Loading...</p>; // Tampilkan pesan loading jika data masih diambil
	}

	return (
		<>
			<MovieApp movie={movie} />
			<Highlight video={video} />
		</>
	);
};

export default Detail;

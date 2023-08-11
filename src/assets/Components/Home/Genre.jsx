import { useEffect, useState } from "react";
import { getGenre } from "../JSFunction/api";

const GenreApp = (prop) => {
	const [genre, setGenre] = useState([]);

	useEffect(() => {
		getGenre().then((result) => {
			setGenre(result);
		});
	}, []);

	const findGenre = (id) => {
		const genreFound = genre.find((genre) => genre.id === id);
		return genreFound ? genreFound.name : "Genre not found"; // Jika genre dengan ID yang cocok ditemukan, kembalikan namanya. Jika tidak, kembalikan pesan "Genre not found".
	};

	return (
		<div className="flex gap-2">
			{prop.genres.map((genre, i) => {
				return (
					<div
						key={i}
						className="text-white text-sm font-poppins italic rounded-sm bg-gray-600/40 bg-blend-darken shadow-lg w-auto h-auto px-2 "
					>
						{findGenre(genre)}
					</div>
				);
			})}
		</div>
	);
};

export default GenreApp;

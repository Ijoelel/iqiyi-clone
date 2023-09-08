import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getList } from "../JSFunction/api";

const posterUrl = import.meta.env.VITE_POSTER_URL;

const WrapperApp = (prop) => {
	const [mostMovies, setMostMovies] = useState([]);

	useEffect(() => {
		getList(prop.type).then((result) => {
			setMostMovies(result);
		});
	}, [prop.type]);

	const MostMovie = () => {
		return mostMovies.map((movie, i) => {
			return (
				<Link
					key={i}
					className="w-32 lg:w-44 h-full mr-4 mb-2 last-of-type:mr-3 cursor-pointer object-cover"
					to={`/movie/${movie.id}`}
				>
					<img
						src={`${posterUrl}${movie.poster_path}`}
						alt="poster"
						className="rounded-md"
					/>
					<h1 className="font-poppins text-white whitespace-nowrap overflow-ellipsis overflow-hidden">
						{movie.title}
					</h1>
				</Link>
			);
		});
	};
	return (
		<div className="py-3">
			<h1 className="font-sf italic text-lg text-white opacity-65 ml-3 md:text-2xl">
				{prop.title}
			</h1>
			<div className="w-full h-56 md:h-64 lg:h-80 flex justify-center items-center relative overflow-x-auto mt-1">
				<div className="h-full absolute top-0 left-3 flex justify-center items-center px-3 py-2">
					<MostMovie />
				</div>
			</div>
		</div>
	);
};

export default WrapperApp;

/* eslint-disable react/prop-types */
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import VideoPlayer from "./VidPlayer";

const backdropUrl = import.meta.env.VITE_BACKDROP_URL;
const posterUrl = import.meta.env.VITE_POSTER_URL;

function MovieApp({ movie }) {
	return (
		<div className="w-screen text-white text-center font-poppins">
			<div className="h-auto w-full">
				<div
					style={{
						backgroundImage: `url(${backdropUrl}${movie.backdrop_path})`,
					}}
					className="aspect-video bg-cover relative mix-blend-color-luminosity after:bg-gradient-to-t after:from-iqbg after:absolute after:top-0 after:w-full after:h-full after:left-0 after:z-[1]"
				>
					<Link
						to={"/"}
						className="w-7 h-7 absolute top-3 left-3 z-[2]"
					>
						<ArrowLongLeftIcon />
					</Link>
					<div className="w-full h-full bg-white opacity-50 mix-blend-color-luminosity"></div>
					<img
						src={`${posterUrl}${movie.poster_path}`}
						alt="poster"
						className="absolute w-1/3 z-[2] -bottom-[45%] left-1/3 rounded-lg border-slate-200 border-2 md:hidden"
					/>
				</div>
			</div>

			<div className="mt-32 flex flex-col gap-2 items-center justify-center px-10 text-gray-200">
				<h1 className="text-3xl font-medium">{movie.title}</h1>
				<div className="flex justify-center items-center mt-1 gap-1">
					<StarIcon className="fill-iqiyi w-5 h-5" />
					<small className="border-r-[1px] pr-3">
						{movie.vote_average.toFixed(1)}
					</small>
					<small className="px-2 pr-3 border-r-[1px]">
						Released in {movie.release_date.split("-")[0]}
					</small>
					<div className="flex gap-2 ml-2">
						{movie.production_countries.map((result, i) => {
							return (
								<small
									key={i}
									className="bg-gray-800 px-2 rounded-sm"
								>
									{result.iso_3166_1}
								</small>
							);
						})}
					</div>
				</div>
				<h1 className="mt-8 ">Overview</h1>
				<small className="text-gray-400">{movie.overview}</small>
			</div>
		</div>
	);
}

export default MovieApp;

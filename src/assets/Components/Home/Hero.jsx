import { useEffect, useState } from "react";
import { getTrending, getDetail } from "../JSFunction/api.js";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenreApp from "./Genre";

const backdropUrl = import.meta.env.VITE_BACKDROP_URL;

export default function HeroApp() {
	const [mostMovies, setMostMovies] = useState([]);

	useEffect(() => {
		getTrending().then((result) => {
			setMostMovies(result);
		});
	}, []);

	const CarouselItem = (prop) => {
		return (
			<Link to={`/movie/${prop.id}`}>
				<div
					style={{
						backgroundImage: `url(${backdropUrl}${prop.imgUrl})`,
					}}
					className="w-full h-full bg-cover relative shadow-innerXL"
				>
					<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-iqbg from-20% via-gray-500/30 via-80%"></div>
					<div className="absolute bottom-0 w-full h-1/3 left-1/5">
						<h1 className=" font-poppins text-lg md:text-xl text-white whitespace-nowrap overflow-ellipsis overflow-hidden ml-2">
							{prop.title}
						</h1>
						<div className="text-white italic flex gap-4 ml-2">
							<h1>{prop.rating}</h1>
							<h1>{prop.releaseYear}</h1>
						</div>
						<GenreApp genres={prop.genres} />
					</div>
				</div>
			</Link>
		);
	};

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 6000,
		nextArrow: null,
	};
	return (
		<>
			<Slider {...settings} className="overflow-hidden">
				{mostMovies.map((data, i) => {
					return (
						<div key={i} className="aspect-video">
							<CarouselItem
								id={data.id}
								imgUrl={data.backdrop_path}
								title={data.title}
								releaseYear={data.release_date.split("-")[0]}
								rating={data.vote_average.toFixed(1)}
								genres={data.genre_ids}
							/>
						</div>
					);
				})}
			</Slider>
		</>
	);
}

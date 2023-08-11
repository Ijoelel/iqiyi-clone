/* eslint-disable react/prop-types */
import Slider from "react-slick";
import VideoPlayer from "./VidPlayer";

// eslint-disable-next-line react/prop-types
const Highlight = ({ video }) => {
	const CarouselItem = ({ id, name }) => {
		return (
			<div className="mr-4">
				<div className="relative after:w-full after:top-0 after:left-0 after:h-full after:absolute after:bg-white after:opacity-20">
					<img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} />
				</div>
				<h1 className="whitespace-nowrap overflow-ellipsis overflow-hidden">
					{name}
				</h1>
			</div>
		);
	};
	const settings = {
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		slickNext: false,
	};
	return (
		<div className="mt-10 relative text-white border-t-[1px] border-b-[1px] mx-4">
			<h1 className="bg-iqbg absolute -top-[13.5px] w-1/3 text-center font-sf font-light tracking-wider text-md left-1/3">
				Highlight
			</h1>
			<div className="my-5">
				<Slider {...settings}>
					{video.map((vid, i) => {
						return (
							<CarouselItem
								key={i}
								id={vid.key}
								name={vid.name}
							/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Highlight;

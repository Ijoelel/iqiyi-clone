import { useEffect } from "react";
import Plyr from "plyr"; // Impor library Plyr
import "plyr/dist/plyr.css"; // Impor CSS Plyr

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ id }) => {
	useEffect(() => {
		const player = new Plyr("#player"); // Inisialisasi Plyr
		player.autoplay;
		player.autoplay = true;
	}, []);

	return (
		<div
			id="player"
			data-plyr-provider="youtube"
			data-plyr-embed-id={id}
		></div>
	);
};

export default VideoPlayer;

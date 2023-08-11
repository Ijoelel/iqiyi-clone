import { ArrowDownTrayIcon, Bars3Icon } from "@heroicons/react/24/outline";
import SearchApp from "./Search";
import { Link } from "react-router-dom";

const NavbarApp = () => {
	const listNav = [
		"For you",
		"Destined",
		"Drama",
		"K-Drama",
		"Movie",
		"Anime",
		"Variety Show",
	];
	const btnClicked = () => {
		const element = document.querySelector(".btn-event")
		if (!(element.classList.contains('h-7'))) {
			element.classList.add('h-7')
		}else {
			element.classList.remove('h-7')
		}
	}
	return (
		<div id="container" className="h-auto w-auto relative">
			<div className="bg-white navbar"></div>
			<div
				id="navbar"
				className="w-full h-10 flex items-center justify-between bg-transparent px-4"
			>
				<Bars3Icon
					onClick={() => {
						btnClicked();
					}}
					className="stroke-gray-200 h-6 cursor-pointer"
				/>
				<h1 className="font-nasa text-lg text-iqiyi text-bold">
					Watch.U
				</h1>
				<div className="mr-1 w-auto">
					<SearchApp />
				</div>
				<li
					className="flex bg-iqiyi h-7 w-auto items-center justify-center gap-1 rounded-md p-2 cursor-pointer"
					title="Download App"
				>
					<ArrowDownTrayIcon className="stroke-white h-5 w-5" />
					<p className="font-poppins text-white text-sm">App</p>
				</li>
			</div>
			<div className="bg-transparent h-12 flex items-center overflow-x-auto relative">
				<div className=" text-white italic font-poppins text-opacity-60 flex items-center gap-6 absolute whitespace-nowrap px-3">
					{listNav.map((path, index) => {
						return (
							<Link to="/un" key={index}>
								{path}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NavbarApp;

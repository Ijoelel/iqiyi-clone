import {
	ArrowDownTrayIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import SearchApp from "./Search";
import { Link } from "react-router-dom";

const NavbarApp = () => {
	const NavItem = () => {
		const listNav = [
			"For you",
			"Drama",
			"K-Drama",
			"Movie",
			"Anime",
			"Variety Show",
		];
		return listNav.map((path, index) => {
			return (
				<Link to="/un" key={index}>
					{path}
				</Link>
			);
		});
	};

	const PopupNav = () => {
		return (
			<div className="popnav w-full h-auto bg-[rgba(0,0,0,0.7)] backdrop-blur-sm flex flex-col items-center p-2 rounded-md hidden">
				<NavItem />
			</div>
		);
	};

	const showNav = () => {
		const popnav = document.querySelector(".popnav");
		if (popnav.classList.contains("hidden")){
			popnav.classList.remove("hidden")
		} else{
			popnav.classList.add("hidden")
		}
	};

	const btnClicked = () => {
		const element = document.querySelector(".btn-event");
		if (!element.classList.contains("left-[-100vw]")) {
			element.classList.add("left-[-100vw]");
		} else {
			element.classList.remove("left-[-100vw]");
			element.classList.add("left-0");
		}
	};

	const PopupBox = () => {
		return (
			<div className="btn-event fixed top-0 left-[-100vw] z-10 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm flex flex-col w-screen h-screen overflow-auto">
				<div className=" stroke-white text-white italic font-medium font-poppins text-opacity-60 flex flex-col items-center gap-6 whitespace-nowrap px-3 mt-10">
					<NavItem />
					<XMarkIcon
						className="w-7 h-7 absolute top-2 right-2 cursor-pointer"
						onClick={() => {
							btnClicked();
						}}
					/>
				</div>
			</div>
		);
	};

	return (
		<div
			id="container"
			className="h-auto w-auto relative md:relative text-white px-2"
		>
			<PopupBox />
			<div
				id="navbar"
				className="w-full h-10 flex items-center justify-between bg-transparent md:absolute md:top-0 md:left-0 md:z-[1] md:bg-gradient-to-b md:h-32 md:from-gray-800 md:pt-2 md:items-start md:px-24"
			>
				<Bars3Icon
					onClick={() => {
						btnClicked();
					}}
					className="stroke-gray-200 h-7 cursor-pointer md:hidden"
				/>
				<h1 className="font-nasa text-lg md:text-2xl text-iqiyi text-bold md:order-first">
					Watch.U
				</h1>
				<div className="hidden md:w-32 md:flex md:justify-center md:flex-col">
					<button
						className="navitem md:block hidden font-poppins text-lg text-[rgba(255,255,255,0.5)] hover:text-white cursor-pointer"
						onClick={() => {
							showNav();
						}}
					>
						Jelajahi
					</button>
					<PopupNav />
				</div>
					<SearchApp />
				<li
					className="flex bg-iqiyi h-7 w-auto items-center justify-center gap-1 rounded-md p-2 cursor-pointer"
					title="Download App"
				>
					<ArrowDownTrayIcon className="stroke-white h-5 w-5" />
					<p className="font-poppins text-white text-sm">App</p>
				</li>
			</div>
			<div className="bg-transparent h-12 flex items-center overflow-x-auto relative md:hidden">
				<div className=" text-white italic font-poppins text-opacity-60 flex items-center gap-6 absolute whitespace-nowrap px-3">
					<NavItem />
				</div>
			</div>
		</div>
	);
};

export default NavbarApp;

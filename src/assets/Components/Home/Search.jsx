import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { searchMovie } from "../JSFunction/api";

const SearchApp = () => {
	const search = async (q) => {
		const query = await searchMovie(q);
		return query.results;
	};
	return (
		<div className="mx-1">
			<div className="pointer-events-auto bg-opacity-25 bg-white rounded-md px-3 h-7 flex items-center justify-between">
				<input
					placeholder="search"
					id="input"
					className="font-normal text-sm text-slate-200 font-poppins outline-none bg-transparent w-32 sm:w-auto"
				/>
				<MagnifyingGlassIcon
					className="stroke-slate-200 hover:stroke-iqiyi stroke-[3px] h-5 w-7 border-slate-200 border-l-[1px] pl-2 cursor-pointer"
					onClick={() => {
						console.log(search(document.getElementById("input").value));
					}}
				/>
			</div>
		</div>
	);
};

export default SearchApp;

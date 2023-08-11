import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchApp = () => {
	const search = (q) => {
		console.log({ q });
	};
	return (
		<div className="pointer-events-auto bg-opacity-25 bg-white rounded-md px-3 h-7 flex items-center justify-between">
			<input
				placeholder="search"
				className="font-normal text-sm text-slate-200 font-poppins outline-none bg-transparent w-32"
				onChange={({ target }) => search(target.value)}
			/>
			<MagnifyingGlassIcon className="stroke-slate-200 hover:stroke-iqiyi stroke-[3px] h-5 w-7 border-slate-200 border-l-[1px] pl-2 cursor-pointer" />
		</div>
	);
};

export default SearchApp;

import {
	DevicePhoneMobileIcon,
	TvIcon,
	ComputerDesktopIcon,
	GlobeAltIcon,
	XMarkIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";

function langChooser() {
	const popup = document.getElementById("popup");
	popup.style.display === "block"
		? (popup.style.display = "none")
		: (popup.style.display = "block");
}

const FooterApp = () => {
	return (
		<div className="text-white stroke-white">
			<div className="bg-black border-t-2 border-gray-700 flex justify-center items-center py-5 flex-col gap-5 ">
				<h1 className="font-poppins font-semibold">
					Pengalaman terbaik hanya di APP Watch.U
				</h1>
				<small>Cari di toko aplikasi ponsel</small>
				<div className=" border-b-[1px] flex flex-col gap-2 justify-center items-center pb-5 w-2/3">
					<div className="flex text-sm items-center gap-[0.25rem] bg-slate-800 p-1 rounded-md w-full justify-center">
						<DevicePhoneMobileIcon className="w-4 h-4" />
						Ponsel
					</div>
					<div className="flex gap-4 w-full">
						<div className="flex text-sm items-center gap-[0.25rem] bg-slate-800 p-1 rounded-md w-full justify-center">
							<TvIcon className="w-4 h-4" />
							TV
						</div>
						<div className="flex text-sm p-1 items-center gap-[0.25rem] bg-slate-800 rounded-md w-full justify-center">
							<ComputerDesktopIcon className="w-4 h-4" />
							Website
						</div>
					</div>
				</div>
				<div
					onClick={langChooser}
					className="w-auto flex gap-1 items-center mt-5 rounded-lg border-[1px] p-1"
				>
					<GlobeAltIcon className="w-4 h-4" />
					<small>Bahasa Indonesia</small>
					<ChevronDownIcon className="w-3 h-3" />
				</div>
				<div className="w-full h-auto flex gap-4 justify-center">
					<i className="fi fi-brands-facebook"></i>
					<i className="fi fi-brands-instagram"></i>
					<i className="fi fi-brands-twitter"></i>
				</div>
				<div className="text-center text-xs flex flex-col gap-5 w-4/5 font-thin antialiased">
					<small>
						Copyright &copy; 2023 Watch.U All Rights Reserved
					</small>
					<small>
						Kami menggunakan Cookies untuk meningkatkan pengalaman
						penggunaan anda. Dengan menggunakan situs web kami, anda
						setuju dengan penggunaan Cookies kami. Baca selengkanya {' '}
						<a href="#" className="border-b-[0.2px]">Kebijakan Privasi Watch.U</a>
					</small>
				</div>
				<div
					id="popup"
					className="fixed w-full h-full bg-iqbg overflow-hidden top-0 left-0 hidden"
					dir="rtl"
				>
					<XMarkIcon
						className="w-7 h-7 mt-2 mr-2"
						onClick={langChooser}
					/>
					<div className="mt-10 mx-4 " dir="ltr">
						<h1 className="text-4xl font-semibold font-poppins">
							Pilih Bahasa
						</h1>
						<p className="mt-4 py-5 text-gray-300 border-b-[0.5px]">
							Bahasa Indonesia
						</p>
						<p className="py-5 text-gray-300 border-b-[0.5px]">
							English
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterApp;

import React from "react";
import '../styles/Tailwind.css'

const Loader = () => {
	return (
		<div className=" absolute w-full h-full top-0 left-0 right-0 bottom-0  z-50 bg-slate-900/[0.9]  flex justify-center items-center ">
			<h2 className=" text-center font-bold font-serif text-[40px] text-white">
				Loading... <br />
				Please wait
			</h2>
		</div>
	)
};

export default Loader;
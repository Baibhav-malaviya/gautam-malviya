import React, { ReactNode } from "react";

function AnimatedButton({ children }: { children: ReactNode }) {
	return (
		<button className=" backdrop-blur-sm border bg-emerald-300/25 border-emerald-500/20 text-white mx-auto text-center rounded relative mt-4">
			<span>{children}</span>
			<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-yellow-500 to-transparent" />
		</button>
	);
}

export default AnimatedButton;

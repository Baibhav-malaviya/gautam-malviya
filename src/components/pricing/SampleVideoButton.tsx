"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Button } from "@/components/ui/button";

interface SampleVideoButtonProps {
	videoUrl: string;
	buttonText?: string;
}

export const SampleVideoButton: React.FC<SampleVideoButtonProps> = ({
	videoUrl,
	buttonText = "View Sample",
}) => {
	const [active, setActive] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setActive(false);
		};

		document.body.style.overflow = active ? "hidden" : "auto";
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(false));

	return (
		<>
			<Button
				onClick={() => setActive(true)}
				variant="outline"
				className="w-full mt-2 py-3 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-700"
			>
				{buttonText}
			</Button>

			<AnimatePresence>
				{active && (
					<motion.div
						ref={ref}
						className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<iframe
							src={videoUrl}
							className="w-full h-full absolute inset-0"
							frameBorder="0"
							allow="autoplay; fullscreen; picture-in-picture"
							allowFullScreen
						></iframe>
						<button
							onClick={() => setActive(false)}
							className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10"
							aria-label="Close"
						>
							<CloseIcon />
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

const CloseIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="h-6 w-6"
	>
		<path d="M18 6L6 18" />
		<path d="M6 6l12 12" />
	</svg>
);

export default SampleVideoButton;

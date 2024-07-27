import { SparklesCore } from "./ui/sparkles";
import { Mail, PhoneIcon } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import publicAssets from "../../public/publicAssets.json";

const Component: React.FC = () => {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<main className="flex-1">
				<section className="w-full h-[60vh] relative">
					<video
						className="w-full h-full object-cover"
						autoPlay
						loop
						muted
						playsInline
					>
						<source src={publicAssets.landing} type="video/mp4" />
					</video>
					<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 md:px-6">
						<h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-center">
							Gautam Malaviya - Video Editor
						</h1>
						<p className="max-w-[700px] text-lg md:text-xl mt-4 text-center">
							Crafting compelling visual stories through the art of video
							editing. From commercials to feature films, I bring your vision to
							life.
						</p>

						<div className="mt-8 flex flex-row gap-4">
							<AnimatedButton>
								<a
									href="mailto:gutm1811@gmail.com"
									className="inline-flex px-3 py-2"
								>
									<Mail className="w-5 h-5 mr-2" />
									Email Me
								</a>
							</AnimatedButton>
							<AnimatedButton>
								<a href="tel:+919852902299" className="inline-flex px-3 py-2">
									<PhoneIcon className="w-5 h-5 mr-2" />
									Call Me
								</a>
							</AnimatedButton>
						</div>
					</div>
				</section>

				<div className=" relative w-full bg-yellow-50  flex flex-col items-center justify-center overflow-hidden">
					<div className="w-full absolute inset-0 h-screen">
						<SparklesCore
							id="tsparticlesfullpage"
							background="transparent"
							minSize={0.6}
							maxSize={2.2}
							particleDensity={100}
							className="w-full h-full"
							particleColor="#fbe435"
						/>
					</div>

					<section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-yellow-50">
						<div className="container px-4 sm:px-6 md:px-8 mx-auto">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
								<div className="flex flex-col items-center text-center p-4">
									<ScissorsIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
									<h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4">
										Precise Editing
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground mt-2">
										Seamless cuts and transitions that enhance the narrative
										flow of your project.
									</p>
								</div>

								<div className="flex flex-col items-center text-center p-4">
									<PaletteIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
									<h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4">
										Color Grading
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground mt-2">
										Expert color correction and grading to set the perfect mood
										for your video.
									</p>
								</div>

								<div className="flex flex-col items-center text-center p-4">
									<HeadphonesIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
									<h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4">
										Sound Design
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground mt-2">
										Crafting immersive audio experiences to complement the
										visual narrative.
									</p>
								</div>

								<div className="flex flex-col items-center text-center p-4">
									<WandIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
									<h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4">
										Visual Effects
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground mt-2">
										Seamlessly integrated VFX that elevate your story without
										overpowering it.
									</p>
								</div>

								<div className="flex flex-col items-center text-center p-4">
									<LayersIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
									<h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4">
										Motion Graphics
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground mt-2">
										Eye-catching animations and graphics that bring your message
										to life.
									</p>
								</div>

								<div className="flex flex-col items-center text-center p-4">
									<VideoIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
									<h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4">
										Diverse Portfolio
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground mt-2">
										Experience across various genres including commercials,
										documentaries, and feature films.
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

const HeadphonesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
		</svg>
	);
};

const LayersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83Z" />
			<path d="m2.6 13.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91" />
			<path d="m2.6 18.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91" />
		</svg>
	);
};

const PaletteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="13.5" cy="6.5" r=".5" />
			<circle cx="17.5" cy="10.5" r=".5" />
			<circle cx="8.5" cy="7.5" r=".5" />
			<circle cx="6.5" cy="12.5" r=".5" />
			<path d="M12 22a5 5 0 0 1-5-5 5 5 0 0 0-5-5 5 5 0 0 1 4.21-4.92 5 5 0 0 1 5.71 3.41h.08A5 5 0 0 0 17 4.75 5 5 0 0 1 22 9a5 5 0 0 1-5 5h-1a5 5 0 0 0-5 5v.12A5 5 0 0 1 12 22Z" />
		</svg>
	);
};

const ScissorsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="6" cy="6" r="3" />
			<circle cx="6" cy="18" r="3" />
			<line x1="20" x2="8.12" y1="4" y2="15.88" />
			<line x1="14.47" x2="20" y1="14.48" y2="20" />
			<line x1="8.12" x2="12" y1="8.12" y2="12" />
		</svg>
	);
};

const SlidersVerticalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
	props
) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="21" x2="14" y1="4" y2="4" />
			<line x1="10" x2="3" y1="4" y2="4" />
			<line x1="21" x2="12" y1="12" y2="12" />
			<line x1="8" x2="3" y1="12" y2="12" />
			<line x1="21" x2="16" y1="20" y2="20" />
			<line x1="12" x2="3" y1="20" y2="20" />
			<line x1="14" x2="14" y1="2" y2="6" />
			<line x1="8" x2="8" y1="10" y2="14" />
			<line x1="16" x2="16" y1="18" y2="22" />
		</svg>
	);
};

const VideoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m22 8-6 4 6 4V8Z" />
			<rect width="15" height="12" x="2" y="6" rx="2" ry="2" />
		</svg>
	);
};

const WandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m9 14-6 6" />
			<path d="m21 3-9.2 9.2c-.4.4-.6.9-.6 1.4V18c0 .6-.4 1-1 1H9.4c-.5 0-1-.2-1.4-.6L6 16" />
			<path d="M7 7h.01" />
			<path d="M3 3h.01" />
			<path d="M7 3h.01" />
			<path d="M3 7h.01" />
			<path d="M17 14h.01" />
			<path d="M21 14h.01" />
			<path d="M17 18h.01" />
			<path d="M21 18h.01" />
		</svg>
	);
};

export default Component;

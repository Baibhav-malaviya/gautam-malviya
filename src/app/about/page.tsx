import { CardBody, CardContainer } from "@/components/ui/3d-card";
import { Boxes } from "@/components/ui/background-boxes";
import { Card } from "@/components/ui/card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
const brands = [
	{ name: "Company 1", logo: "/brands/service-logo1.jpg" },
	{ name: "Company 2", logo: "/brands/service-logo2.jpg" },
	{ name: "Company 3", logo: "/brands/service-logo3.jpg" },
	// Add more brands here as needed
];

export default function Component() {
	return (
		<>
			<section className="w-full relative overflow-hidden bg-slate-900">
				<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				<Boxes />
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 relative z-30">
					<div className="overflow-hidden rounded-xl">
						<CardContainer className="inter-var">
							<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl overflow-hidden border">
								<Image
									src="/Gautam-Malviya.jpg"
									width={550}
									height={550}
									alt="Video Editor"
									className="aspect-square w-full object-cover"
								/>
							</CardBody>
						</CardContainer>
					</div>

					<div className="space-y-4 text-white">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Meet Gautam Malviya
							</h2>

							<p className="text-neutral-300 md:text-xl">
								Experienced video editor with a passion for storytelling.
							</p>
						</div>
						<div className="grid gap-4">
							<div className="grid gap-1">
								<h3 className="text-lg font-semibold">About Me</h3>
								<p className="text-neutral-300">
									I&apos;m a video editor with over 2 yrs of experience in the
									industry. I specialize in creating engaging and visually
									stunning videos for a variety of clients, from corporate
									videos to short films. My attention to detail and creative
									flair allow me to bring even the most complex projects to
									life.
								</p>
							</div>
							<div className="grid gap-1">
								<h3 className="text-lg font-semibold">Areas of Expertise</h3>
								<ul className="space-y-1 text-neutral-300">
									<li>
										<CheckIcon className="mr-2 inline-block h-4 w-4" />
										Precise Editing
									</li>
									<li>
										<CheckIcon className="mr-2 inline-block h-4 w-4" />
										Motion Graphics
									</li>
									<li>
										<CheckIcon className="mr-2 inline-block h-4 w-4" />
										Color Grading
									</li>
									<li>
										<CheckIcon className="mr-2 inline-block h-4 w-4" />
										Audio Mixing
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4">
							Trusted by Industry Leaders
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							I&apos;ve had the privilege of collaborating with these renowned
							brands, bringing their visions to life through compelling video
							content.
						</p>
					</div>
					<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
						{brands.map((brand, index) => (
							<Card
								key={index}
								className="w-40 h-40 flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
							>
								<div className="relative w-full h-full">
									<Image
										src={brand.logo}
										alt={`${brand.name} Logo`}
										fill
										style={{ objectFit: "contain" }}
									/>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

function CheckIcon(props: any) {
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
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}

function XIcon(props: any) {
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
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}

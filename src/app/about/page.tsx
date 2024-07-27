import { CardBody, CardContainer } from "@/components/ui/3d-card";
import { Boxes } from "@/components/ui/background-boxes";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import publicAssets from "@/data/publicAssets.json";
const brands = [
	{ name: "Mind set", logo: `${publicAssets.serviceBrands.brand1}` },
	{ name: "Raj kamal", logo: `${publicAssets.serviceBrands.brand2}` },
	{ name: "Hey pitch", logo: `${publicAssets.serviceBrands.brand3}` },
	// Add more brands here as needed
];

export const metadata = {
	title: "About Us | Experienced Video Editor",
	description:
		"Video editor with 2+ years of experience, BJMC degree, and over 20 satisfied clients. Specializing in corporate videos, short films, and engaging visual content.",
	keywords: [
		"video editor",
		"BJMC graduate",
		"corporate videos",
		"short films",
		"visual storytelling",
		"mass communication",
		"video production",
		"client experience",
		"creative content",
	],
	openGraph: {
		title: "Experienced Video Editor | 2+ Years & 20+ Clients",
		description:
			"BJMC-educated video editor with a track record of creating stunning visuals for diverse clients. Expertise in corporate videos and short films.",
		type: "profile",
		locale: "en_US",
		site_name: "Gautam Malaviya",
		images: [
			{
				//todo we have to add the path of the client image
				url: "https://yourdomain.com/path-to-your-image.jpg",
				width: 1200,
				height: 630,
				alt: "Video Editing Portfolio Showcase",
			},
		],
	},
	linkedin: {
		title: "Professional Video Editor | BJMC Graduate",
		description:
			"Over 2 years of experience crafting engaging videos for 20+ clients. Specializing in corporate and creative content.",
		image:
			"https://media.licdn.com/dms/image/D5603AQHZI16v8paq3g/profile-displayphoto-shrink_400_400/0/1720760807592?e=1727308800&v=beta&t=Bb2U2Fs0fpjCnKsAVP6TXDfzGvPyiCScEbZ8YJdW58c",
	},
	instagram: {
		title: "Video Editor Extraordinaire 🎥✨",
		description:
			"2+ years exp | 20+ happy clients | BJMC grad | Turning ideas into stunning visuals",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function Component() {
	return (
		<>
			<section className="w-full relative pb-5 overflow-hidden bg-slate-900">
				<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				<Boxes />
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 relative z-30">
					<div className="overflow-hidden rounded-xl">
						<CardContainer className="inter-var">
							<CardBody className="bg-slate-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl overflow-hidden border">
								<div className="relative">
									<Image
										src={publicAssets.profile}
										width={550}
										height={550}
										alt="Video Editor"
										className="aspect-square w-full object-cover"
									/>
									<div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent dark:from-black dark:via-black/70"></div>
								</div>
							</CardBody>
						</CardContainer>
					</div>

					<div className="space-y-4 text-white">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Meet Gautam Malaviya
							</h2>

							<p className="text-neutral-300 md:text-xl">
								Experienced video editor with a passion for storytelling.
							</p>
						</div>
						<div className="grid gap-4">
							<div className="grid gap-1">
								<h3 className="text-lg font-semibold">About Me</h3>
								<p className="text-neutral-300">
									I&apos;m a video editor with over 3 years of experience in the
									industry, backed by a degree in Bachelor of Journalism and
									Mass Communication (BJMC). Throughout my career, I&apos;ve had
									the privilege of working with more than 20 clients, each
									project adding to my diverse portfolio. I specialize in
									creating engaging and visually stunning videos for a variety
									of needs, from corporate videos to short films. My academic
									background in mass communication, combined with my extensive
									client experience, allows me to bring a unique perspective to
									each project. Whether it&apos;s a complex narrative or a
									straightforward promotional video, my attention to detail and
									creative flair ensure that I can bring any vision to life,
									effectively conveying messages through the power of visual
									storytelling.
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
						<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-4 uppercase">
							Some of my work has been featured on
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
								className="w-60 aspect-square flex items-center justify-center p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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

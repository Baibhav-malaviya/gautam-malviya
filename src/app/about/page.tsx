/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LyJ5I6Aj8Zf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardBody, CardContainer } from "@/components/ui/3d-card";
import Image from "next/image";
export default function Component() {
	return (
		<section className="w-full ">
			<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
				<div className="overflow-hidden rounded-xl">
					<CardContainer className="inter-var">
						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl overflow-hidden border  ">
							<Image
								src="/Gautam-Malviya.jpg"
								width={550}
								height={550}
								alt="Video Editor"
								className="aspect-square w-full object-cover"
							/>
						</CardBody>
					</CardContainer>
					;
				</div>

				<div className="space-y-4">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Meet Gautam Malviya
						</h2>
						<p className="text-muted-foreground md:text-xl">
							Experienced video editor with a passion for storytelling.
						</p>
					</div>
					<div className="grid gap-4">
						<div className="grid gap-1">
							<h3 className="text-lg font-semibold">About Me</h3>
							<p className="text-muted-foreground">
								I&apos;m a video editor with over 2 yrs of experience in the
								industry. I specialize in creating engaging and visually
								stunning videos for a variety of clients, from corporate videos
								to short films. My attention to detail and creative flair allow
								me to bring even the most complex projects to life.
							</p>
						</div>
						<div className="grid gap-1">
							<h3 className="text-lg font-semibold">Areas of Expertise</h3>
							<ul className="space-y-1 text-muted-foreground">
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

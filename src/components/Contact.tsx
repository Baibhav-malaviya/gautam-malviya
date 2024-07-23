/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3rMqw4XDJ7Q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Vortex } from "./ui/vortex";
{
	/* <a
						href="mailto:picklifeonline@gmail.com"
						className="flex items-center text-foreground hover:text-green-500 transition-colors"
					>
						<FaEnvelope className="mr-2" />
						<span className="text-sm md:text-base">
							picklifeonline@gmail.com
						</span>
					</a>
					<a
						href="tel:+918280905909"
						className="flex items-center text-foreground hover:text-green-500 transition-colors"
					>
						<FaPhoneAlt className="mr-2" />
						<span className="text-sm md:text-base">8280905909</span>
					</a> */
}

export default function Contact() {
	return (
		<Vortex
			backgroundColor="#fff"
			rangeY={800}
			particleCount={5000}
			baseHue={120}
			className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
		>
			<section className="bg-transparent py-12 md:py-20">
				<div className="container px-4 md:px-6">
					<div className="max-w-3xl mx-auto space-y-6 text-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Get in Touch
							</h2>
							<p className="mt-2 text-muted-foreground md:text-xl">
								Have a project in mind? Let&apos;s collaborate.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="space-y-4">
								<div>
									<h3 className="text-xl font-semibold">Contact Information</h3>
									<div className="mt-2 space-y-2 text-left">
										<div className="flex items-center gap-2">
											<a
												href="mailto:picklifeonline@gmail.com"
												className="flex items-center gap-3 text-foreground hover:text-green-500 transition-colors"
											>
												<MailIcon className="h-5 w-5 text-muted-foreground" />

												<span className="text-sm md:text-base">
													picklifeonline@gmail.com
												</span>
											</a>
										</div>

										<div className="flex items-center gap-2">
											<a
												href="tel:+919852902299"
												className="flex items-center gap-2 text-foreground hover:text-green-500 transition-colors"
											>
												<PhoneIcon className="h-5 w-5 text-muted-foreground" />
												<span className="text-sm md:text-base">9852902299</span>
											</a>
										</div>
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold">About Me</h3>
									<p className="mt-2 text-muted-foreground">
										I&apos;m a video editor with over 2 years of experience,
										specializing in creating engaging and visually stunning
										videos for a variety of clients.
									</p>
								</div>
							</div>
							<form className="space-y-4">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="name">Name</Label>
										<Input id="name" placeholder="Enter your name" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
										<Input
											id="email"
											type="email"
											placeholder="Enter your email"
										/>
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										rows={4}
										placeholder="Enter your message"
									/>
								</div>
								<Button type="submit" className="w-full">
									Submit
								</Button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Vortex>
	);
}

function MailIcon(props: any) {
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
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

function PhoneIcon(props: any) {
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
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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

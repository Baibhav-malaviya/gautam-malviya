import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { VideoIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Gautam Malaviya | Professional Video Editor",
	description:
		"Expert video editing services based in India. 2+ years experience, 20+ satisfied clients. BJMC graduate specializing in corporate videos, short films, and engaging visual content.",
	icons: {
		icon: "/Gautam-Malviya.ico", // This will be used for the icon
		apple: "/Gautam-Malviya.ico", // This will be used for the apple icon
	},
	keywords: [
		"video editing India",
		"professional editor India",
		"corporate videos",
		"short films",
		"visual storytelling",
		"video production India",
		"BJMC graduate",
		"creative content",
		"video post-production",
	],
	openGraph: {
		title:
			"Transform Your Vision into Stunning Videos | Professional Editor in India",
		description:
			"Elevate your content with expert video editing from India. 2+ years experience, 20+ happy clients, and a BJMC degree. Specializing in corporate and creative videos.",
		type: "website",
		locale: "en_IN",
		url: "https://gautam-malviya.vercel.app/",
		site_name: "Your Name Video Editing",
		images: [
			{
				//todo we have to add the path of the client image
				url: "https://www.yourwebsite.com/path-to-homepage-image.jpg",
				width: 1200,
				height: 630,
				alt: "Video Editing Services Showcase from India",
			},
		],
	},
	linkedin: {
		title:
			"Professional Video Editing Services in India | Bringing Stories to Life",
		description:
			"Transform your footage into captivating narratives. India-based editor with 2+ years exp, 20+ clients, BJMC graduate. Corporate videos, short films, and more.",
	},
	instagram: {
		title: "🎬 Pro Video Editing Services in India",
		description:
			"Turn your raw footage into magic ✨ | India-based | 2+ years exp | 20+ happy clients | Corporate & creative projects welcome!",
	},
	robots: {
		index: true,
		follow: true,
	},
	geo: {
		region: "IN",
		placename: "India",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="px-4 lg:px-6 h-14 flex items-center justify-between">
					<Link
						href="/"
						className="flex items-center justify-center"
						prefetch={false}
					>
						<VideoIcon className="h-6 w-6" />
					</Link>
					<nav className="flex gap-4 sm:gap-6">
						<Link
							href="/"
							className="text-sm font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Home
						</Link>

						<Link
							href="/about"
							className="text-sm font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							About
						</Link>
					</nav>
				</header>
				<Separator className="mb-2" />
				{children}
				<Footer />
			</body>
		</html>
	);
}

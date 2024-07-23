import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { VideoIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
				<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-center">
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} . All rights reserved.
					</p>
					<nav className="flex gap-4 sm:gap-6">
						<Link
							href="#"
							className="text-xs hover:underline underline-offset-4"
							prefetch={false}
						>
							Terms of Service
						</Link>
						<Link
							href="#"
							className="text-xs hover:underline underline-offset-4"
							prefetch={false}
						>
							Privacy
						</Link>
					</nav>
				</footer>
			</body>
		</html>
	);
}

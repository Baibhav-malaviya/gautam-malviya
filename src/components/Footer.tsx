import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
	return (
		<footer className="border-t bg-background">
			<div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
						&copy; {new Date().getFullYear()} . All rights reserved.
					</p>
					<Separator orientation="vertical" className="hidden h-4 md:block" />
					<nav className="flex gap-4 sm:gap-6">
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:underline underline-offset-4"
						>
							Terms of Service
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:underline underline-offset-4"
						>
							Privacy
						</Link>
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link
							href="http://www.linkedin.com/in/gautam-malaviya1811"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="h-5 w-5" />
							<span className="sr-only">LinkedIn</span>
						</Link>
					</Button>
					<Button variant="ghost" size="icon" asChild>
						<Link
							href="https://www.instagram.com/photoartist_malaviya?igsh=MTF3bXV3b2VjbTBmeQ=="
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram className="h-5 w-5" />
							<span className="sr-only">Instagram</span>
						</Link>
					</Button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

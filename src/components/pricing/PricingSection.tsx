import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import SampleVideoButton from "./SampleVideoButton";
import { Meteors } from "../ui/meteors";

interface ServiceTierProps {
	title: string;
	features: string[];
	videoUrl: string;
}

const ServiceTier: React.FC<ServiceTierProps> = ({
	title,
	features,
	videoUrl,
}) => (
	<div className="w-full relative max-w-md">
		<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
		<div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between">
			<div>
				<h3 className="text-2xl font-bold text-white mb-6">{title}</h3>

				<ul className="space-y-3">
					{features.map((feature, index) => (
						<li
							key={index}
							className="flex items-center space-x-3 text-gray-300"
						>
							<CheckCircle2 className="w-5 h-5 text-green-500" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="mt-6">
				<SampleVideoButton videoUrl={videoUrl} buttonText="View Sample Video" />
			</div>

			<Meteors number={30} />
		</div>
	</div>
);

interface ServiceData {
	title: string;
	features: string[];
	videoUrl: string;
}

const ServicesSection: React.FC = () => {
	const serviceData: ServiceData[] = [
		{
			title: "Short Video Production",
			features: [
				"Up to 1 minute of edited content",
				"2 rounds of revisions",
				"Basic color grading",
				"Stock music included",
			],
			videoUrl: "/landing.mp4",
		},
		{
			title: "Social Media Reel Creation",
			features: [
				"Up to 3 minutes of edited content",
				"3 rounds of revisions",
				"Advanced color grading",
				"Custom motion graphics",
				"Licensed music included",
			],
			videoUrl: "/landing.mp4",
		},
		{
			title: "Long-Form Video Production",
			features: [
				"Up to 10 minutes of edited content",
				"Unlimited revisions",
				"Professional color grading",
				"Advanced motion graphics",
				"Licensed music and SFX",
				"Subtitles and captions",
			],
			videoUrl: "/landing.mp4",
		},
	];

	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-12">What I Offer</h2>

				<motion.div
					className="grid md:grid-cols-3 gap-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{serviceData.map((service, index) => (
						<ServiceTier key={index} {...service} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesSection;

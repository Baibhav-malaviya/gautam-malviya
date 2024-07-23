"use client";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-standard";
import Contact from "@/components/Contact";
import Component from "@/components/Navbar";
import PricingSection from "@/components/pricing/PricingSection";
import SampleVideoButton from "@/components/pricing/SampleVideoButton";

import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<TracingBeam>
				<Component />
				<PricingSection />
				{/* <ExpandableCardDemo /> */}
			</TracingBeam>
		</>
	);
}

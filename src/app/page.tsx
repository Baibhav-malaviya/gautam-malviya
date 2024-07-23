"use client";
import Component from "@/components/Navbar";
import PricingSection from "@/components/pricing/PricingSection";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
	return (
		<>
			<TracingBeam>
				<Component />
				<PricingSection />
			</TracingBeam>
		</>
	);
}

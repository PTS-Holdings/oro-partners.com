import ApproachSection from "@/components/approchPage/ApproachSection";
import HeroSection from "@/components/approchPage/HeroSection";
import Head from "next/head";

export default function Approach() {
	return (
		<div className="container divide-y-2 divide-dashed divide-custom-black">
			<Head>
				<title>Approach - ORO Partners </title>
				<meta
					name="description"
					content="Our strategy is centered on early-stage startups in the technology and consumer sectors."
				/>
			</Head>

			<HeroSection />
			<ApproachSection />
		</div>
	);
}

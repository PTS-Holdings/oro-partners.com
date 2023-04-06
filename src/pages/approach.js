import ApproachSection from "@/components/approchPage/ApproachSection";
import HeroSection from "@/components/approchPage/HeroSection";
import Head from "next/head";

export default function Approach() {
	return (
		<div className="container divide-y-2 divide-dashed divide-custom-black">
			<Head>
				<title>Approach - ORO Partners </title>
			</Head>

			<HeroSection />
			<ApproachSection />
		</div>
	);
}

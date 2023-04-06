import AboutSection from "@/components/aboutPage/AboutSection";
import TeamSection from "@/components/aboutPage/TeamSection";
import VisionSection from "@/components/aboutPage/VisionSection";
import Head from "next/head";

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>About - ORO Partners</title>
			</Head>

			<AboutSection />
			<TeamSection />
			<VisionSection />
		</>
	);
}

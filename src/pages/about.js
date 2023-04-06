import AboutSection from "@/components/aboutPage/AboutSection";
import TeamSection from "@/components/aboutPage/TeamSection";
import Head from "next/head";

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>About - ORO Partners</title>
			</Head>

			<AboutSection />
			<TeamSection />
		</>
	);
}

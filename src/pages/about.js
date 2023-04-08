import AboutSection from "@/components/aboutPage/AboutSection";
import TeamSection from "@/components/aboutPage/TeamSection";
import VisionSection from "@/components/aboutPage/VisionSection";
import Head from "next/head";

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>About - ORO Partners</title>
				<meta
					name="description"
					content="ORO Partners: angel investment network for tech-disruptive innovations in MEA. Managed by PTS Investments Holdings and COREangels."
				/>
			</Head>

			<AboutSection />
			<TeamSection />
			<VisionSection />
		</>
	);
}

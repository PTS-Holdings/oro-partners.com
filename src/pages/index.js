import CTABottomSection from "@/components/homepage/CTABottomSection";
import HeroSection from "@/components/homepage/HeroSection";
import InsightsSection from "@/components/homepage/InsightsSection";
import OfferingSection from "@/components/homepage/OfferingSection";
import SubHeroSection from "@/components/homepage/SubHeroSection";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>ORO Partners</title>
				<meta
					name="description"
					content="ORO Partners is an investment boutique that partners with startups and mandates to support their sustainable growth. We offer personalized investment solutions that match our clients' financial goals and market opportunities."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HeroSection />
			<SubHeroSection />
			<InsightsSection />
			<OfferingSection />
			<CTABottomSection />
		</>
	);
}

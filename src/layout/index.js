import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Fragment } from "react";

export default function Layout({ children }) {
	return (
		<Fragment>
			<Navbar className="sticky" />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
}

import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

function HeroSection() {
    return (
        <div className="container flex flex-col justify-between lg:flex-row">
            <div className="mb-10 w-full text-center lg:w-2/3  lg:text-left lg:pb-8 flex flex-col items-center lg:items-start">
                <h1 className="header3 md:header1 mb-4 font-extrabold lg:w-3/4">
                    BUILDING UP FOR SUSTAINABLE{" "}
                    <span className="text-custom-orange-basic">GROWTH</span>
                </h1>
                <p className="md:body-large-regular body-medium-regular mb-6 text-custom-gray">
                    At ORO Partners we are not reinventing the wheel we partner
                    with our startups and mandates to support their sustainable
                    growth hand in hand supporting their core: financials -
                    operations - growth plans
                </p>

                <div>
                    <Link href={"/contact"}>
                        <Button>Get in Touch</Button>
                    </Link>
                </div>
            </div>

            <div className="self-end">
                <Image
                    src={"/assets/hero-img.svg"}
                    width={433}
                    height={338}
                    alt="hero-image"
                    priority
                />
            </div>
        </div >
    );
}

export default HeroSection;

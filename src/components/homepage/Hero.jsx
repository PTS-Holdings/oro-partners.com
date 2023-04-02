import Image from "next/image";
import Button from "../Button";

function HeroSection() {
    return (
        <div className="container flex flex-col justify-between lg:flex-row ">
            <div className="mb-4 w-full text-center lg:w-2/3  lg:text-left">
                <h1 className="header3 md:header1 mb-4 font-extrabold">
                    BUILDING UP FOR SUSTAINABLE{" "}
                    <span className="text-custom-orange-basic">GROWTH</span>
                </h1>
                <p className="md:body-large-regular body-medium-regular mb-6 text-custom-gray">
                    At ORO Partners we are not reinventing the wheel we partner
                    with our startups and mandates to support their sustainable
                    growth hand in hand supporting their core: financials -
                    operations - growth plans
                </p>

                <Button>Get in Touch</Button>
            </div>

            <div className="self-end">
                <Image
                    src={"/assets/hero-img.svg"}
                    width={478}
                    height={373}
                    alt="hero-image"
                    unoptimized={true}
                    fixed
                />
            </div>
        </div>
    );
}

export default HeroSection;

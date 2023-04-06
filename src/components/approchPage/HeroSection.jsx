import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-8 pb-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <h1 className="header4 lg:header1 lg:w-1/2 ">
                <span className="text-custom-orange-basic"> Our strategy </span>
                is centered on early-stage startups in the technology and
                consumer sectors.
            </h1>
            <div>
                <Image
                    src={"/assets/approach-hero.svg"}
                    width={400}
                    height={383}
                    alt={"hero Image"}
                />
            </div>
        </div>
    );
}

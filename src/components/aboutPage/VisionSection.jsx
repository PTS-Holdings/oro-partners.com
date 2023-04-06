import Image from "next/image";

export default function VisionSection() {
    return (
        <div className="container flex flex-col items-center  justify-between gap-6 pb-6 text-center md:gap-11 lg:flex-row lg:text-left mt-24">
            <div className="lg:w-1/2">
                <h2 className=" md:header2 body-large-bold mb-4">
                    Our <span className="text-custom-orange-basic">Vision</span>
                </h2>
                <p className="md:body-medium-regular body-small-regular">
                    As an Investment boutique is to be the leading source of
                    funding and support for groundbreaking startups and
                    entrepreneurs. We aim to foster a culture of innovation and
                    creativity that enables the development of groundbreaking
                    products and services that have the potential to transform
                    industries and improve people&apos;s lives. We envision a world
                    where entrepreneurship is accessible to all.
                </p>
            </div>

            <Image
                src={"/assets/team-pic-2.png"}
                width={400}
                height={383}
                alt={"ORO Partners Team"}
            />
        </div>
    );
}

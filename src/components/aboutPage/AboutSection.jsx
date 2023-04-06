import Image from "next/image";

export default function AboutSection() {
    return (
        <div className="flex flex-col items-center justify-between  gap-6 pb-24 text-center md:gap-11 lg:flex-row lg:text-left container">
            <div className="lg:w-1/2">
                <h2 className=" md:header2 body-large-bold mb-4">
                    About <span className="text-custom-orange-basic">us</span>
                </h2>
                <p className="md:body-medium-regular body-small-regular">
                    ORO Partners is an angel investment network connect and
                    support business angels, early stage investors,
                    entrepreneurs and corporates seeking investing opportunities
                    mainly in tech-disruptive innovations throughout Middle-East
                    and Africa, the group is managed by ORO Partners, subsidiary
                    of PTS Investments Holdings in cooperation with COREangels
                </p>
            </div>

            <Image
                src={"/assets/about.png"}
                width={400}
                height={383}
                alt={"ORO Partners Team"}
            />
        </div>
    );
}

import Image from "next/image";

export default function ApproachSection() {
    return (
        <div className="flex flex-col items-center justify-between gap-6 pb-6 pt-7 text-center md:gap-11 lg:pt-12 lg:flex-row lg:text-left">
            <div className="lg:w-2/3">
                <h2 className=" md:header2 body-large-bold mb-4">
                    Our{" "}
                    <span className="text-custom-orange-basic">Approach</span>
                </h2>
                <p>
                    We focus on companies with strong growth potential and a
                    clear path to capturing significant market share. Our goal
                    is to provide capital and support to help our portfolio
                    companies achieve their full potential.
                </p>
            </div>

            <Image
                src={"/assets/team-pic-1.png"}
                width={400}
                height={383}
                alt={"ORO Partners Team"}
            />
        </div>
    );
}

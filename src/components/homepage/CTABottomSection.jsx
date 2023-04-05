import Button from "../Button";

export default function CTABottomSection() {
    return <section className="container text-center space-y-5 py-28 flex flex-col items-center">
        <h2 className="md:header2 body-large-bold">Start Your Path to <span className="text-custom-orange-basic">Success</span></h2>
        <p className="md:body-medium-regular body-small-regular md:w-1/2">
            ORO partner team aligns closely with entrepreneurs as a funding partner, a reliable mentor, and a valuable resource to build successful businesses.
        </p>
        <Button>
            Get in Touch
        </Button>
    </section>
}
import { Card } from "./Card"

export function OfferingSection() {
    return (
        <section className="bg-[url('/assets/rpa-concept-with-blurry-hand-touching-screen.png')]  bg-cover text-white text-center py-14">
            <div className="container">
                <h2 className="md:header2 header4 font-bold mb-6">What We <span className="text-custom-orange-basic">Offer</span></h2>
                <div className="flex justify-center items-center flex-col md:flex-row gap-x-8 gap-y-6">
                    <Card icon={"/assets/cash-icon.svg"} title={"Financial advisory"} description={"Help clients make informed decisions about their money and achieve their financial goals"} />
                    <Card icon={"/assets/community-icon.svg"} title={"Investor/Start up road show"} description={"The road show can help the venture capital company attract more funding, increase its visibility and reputation"} />
                    <Card icon={"/assets/cash-pile-icon.svg"} title={"Financial Growth"} description={"In ORO partners we develop  products, expand  markets, and increase their revenues"} />
                </div>
            </div>
        </section>
    )
}
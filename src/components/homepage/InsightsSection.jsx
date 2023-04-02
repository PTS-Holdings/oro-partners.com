function InsightsSection() {
    return (
        <div className="bg-custom-black">
            <div className="container flex flex-col justify-between lg:flex-row py-6 gap-12">
                <div className="text-center max-w-[250px]">

                    <span className="text-custom-orange-basic header3 mb-4">+50</span>
                    <p className="body-medium-regular text-white ">
                        Accumulative years of experience
                    </p>
                </div>

                <div className="text-center max-w-[250px]">
                    <span className="text-custom-orange-basic header3 mb-4">+250</span>
                    <p className="body-medium-regular text-white ">
                        Deals & Mandates worked on since 2007
                    </p>
                </div>

                <div className="text-center max-w-[250px]">
                    <span className="text-custom-orange-basic header3 mb-4">$125</span>
                    <p className="body-medium-regular text-white ">
                        Million USD was raised in transactions
                        closed
                    </p>
                </div>

                <div className="text-center max-w-[250px]">
                    <span className="text-custom-orange-basic header3 mb-4">10</span>
                    <p className="body-medium-regular text-white ">
                        Countries where our mandates
                        & portfolio are located
                    </p>
                </div>


            </div>
        </div>
    )
}

export default InsightsSection
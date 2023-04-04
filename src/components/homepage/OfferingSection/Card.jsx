import Image from "next/image";

export function Card({ icon, title, description }) {
    return (
        <div className="flex flex-col items-center justify-center bg-custom-black border-2 border-custom-orange-basic rounded-xl py-6 px-4 max-w-[320px]">
            <Image src={icon} width={32} height={32} alt={icon.split('/')[2].split(".")[0]} className="mb-2" />
            <h3 className="mb-4 md:body-large-bold body-small-bold">{title}</h3>
            <p className="md:body-medium-regular caption-regular">{description}</p>
        </div>
    )
}

import Image from "next/image";

function Button({ children }) {
	return <button
		className="py-3 px-5 bg-custom-orange-basic body-medium-bold text-white rounded-full hover:bg-custom-orange-light flex items-center gap-5 hover:gap-8 transition-all">{children}
		<span className="inline-block">
			<Image src={"/assets/arrow-right.svg"} width={20} height={20} alt="arrow-right" />
		</span>
	</button>;
}
export default Button;
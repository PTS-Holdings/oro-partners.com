import { useState } from "react";

export default function Contact() {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [message, setMessage] = useState("");
	let [company, setCompany] = useState("");

	return (
		<div className="container flex flex-col items-center justify-between  gap-16 md:flex-row ">
			<div className="w-2/3 text-center md:text-left">
				<h1 className="md:header2 header3 mb-4 ">
					Let&apos;s{" "}
					<span className="text-custom-orange-basic">Talk</span>
				</h1>
				<p className="md:body-medium-regular body-small-regular">
					we’d be pleased to answer your questions
				</p>
			</div>

			<form className="w-full space-y-14">
				<div className="flex flex-col justify-between gap-5 lg:flex-row ">
					<div className="w-full">
						<label htmlFor="name" className="">
							Name
						</label>
						<input
							className=""
							name="name"
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="John Doe"
							required
						/>
					</div>

					<div className="w-full">
						<label htmlFor="email" className="">
							Email
						</label>
						<input
							className=""
							name="email"
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="johndoo@gmail.com"
							required
						/>
					</div>
				</div>

				<div className="md:w-1/2">
					<label htmlFor="company" className="">
						company&apos;s Name
					</label>
					<input
						className=""
						name="company"
						id="company"
						type="text"
						value={company}
						onChange={(e) => setCompany(e.target.value)}
						placeholder="John's Company"
						required
					/>
				</div>

				<div>
					<label htmlFor="message" className="">
						Message
					</label>
					<textarea
						className="h-fit"
						name="message"
						id="message"
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="What you want to discuss"
						required
					/>
				</div>
			</form>
		</div>
	);
}

import Button from "@/components/Button";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [message, setMessage] = useState("");
	let [company, setCompany] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(name, email, message, company);

		const payload = {
			from: `${name} <${email}>`,
			replyTo: `${email}`,
			sender: `${email}`,
			subject: `website contact form submission from ${name}`,
			html: `<h1>New Inquiry from ${name}</h1>
	        <h4>new contact form submission(oro-partners.com)</h4><br>
	          <p><strong>name: </strong> ${name}</p>
	          <p><strong>Email: </strong> ${email}</p><br>
	          <p><strong>Company: </strong> ${company}</p><br>
	          <p><strong>Message: </strong> ${message}</p><br>
	        `,
		};

		const sendMail = new Promise(async function (resolve, reject) {
			let res = await fetch("/api/emailHandler", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});
			if (res.status === 200) {
				setName("");
				setEmail("");
				setMessage("");
				setCompany("");
				resolve();
			} else {
				reject();
			}
		});

		await toast.promise(sendMail, {
			pending: "Sending mail...",
			success: "Email Sent, Wait for a reply soon.",
			error: "Something went wong, try contacting us at: info@oro-partner.com",
		});
	};

	return (
		<div className="container flex flex-col items-center justify-between  gap-16 md:flex-row ">
			<Head>
				<title>Contact Us - ORO Partners</title>
			</Head>

			<div className="w-2/3 text-center md:text-left">
				<h1 className="md:header2 header3 mb-4 ">
					Let&apos;s{" "}
					<span className="text-custom-orange-basic">Talk</span>
				</h1>
				<p className="md:body-medium-regular body-small-regular">
					we’d be pleased to answer your questions
				</p>
			</div>

			<form className="w-full space-y-14" onSubmit={submitHandler}>
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

				<div>
					<Button>Send</Button>
				</div>
			</form>
		</div>
	);
}

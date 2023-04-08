import nodemailer from "nodemailer";

export default async function emailHandler(req, res) {
	const { CONFIG_MAIL_USER, CONFIG_MAIL_Password, CONFIG_MAIL_HOST } =
		process.env;
	// Check request payload has the necessary object
	const emailPayload = req.body;
	if (!emailPayload["subject"]) res.status(400).send();
	if (!emailPayload["html"] || emailPayload.text) res.status(400).send();
	if (!emailPayload["to"]) emailPayload["to"] = "info@oro-partners.com";
	// Open nodemailer transporter
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: CONFIG_MAIL_USER,
			pass: CONFIG_MAIL_Password,
		},
	});

	// Send Email
	transporter.sendMail(emailPayload, function (err, info) {
		if (err) {
			console.log(err);
			res.status(500).end(err);
		} else {
			console.log(info);
			res.status(200).send();
		}
	});
}

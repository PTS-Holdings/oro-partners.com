/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://oro-partners.com",
	generateRobotsTxt: true,
	changefreq: "monthly",
};

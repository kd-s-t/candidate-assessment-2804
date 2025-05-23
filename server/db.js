const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
	const connection = mongoose
		.connect(process.env.dbURI)
		.then((result) => console.log("Connected to database"))
		.catch((err) => console.log("could not connect to database"));
};

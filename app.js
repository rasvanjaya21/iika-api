const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
	res.send({ message: "Welcome to IIKA API Service" });
});

app.get("/api/services", (req, res) => {
	res.send({
		id: 1,
		product_code: 2023,
		product_name: "Consultant",
		product_description: "Consultant is an experienced professional with a broad and in-depth knowledge of a particular subject matter who advises clients.",
		product_image: "https://en.wikipedia.org/static/images/icons/wikipedia.png",
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

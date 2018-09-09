const path = require("path");
const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");
module.exports = {
	entry: {
		main: path.join(src, "js/fatzpreloader")	
	},
	output: {
		filename: "fatzpreloader.js",
		path: path.join(dist, "js")
	}
}
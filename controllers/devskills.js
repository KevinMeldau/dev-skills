// require the devskill model
const devskill = require("../models/devskill");

function index(req, res) {
	res.render("devskills/index", {
		devskills: devskill.getAll(),
	});
}

function show(req, res) {
	res.render("devskills/show", {
		devskill: devskill.getOne(req.params.id),
		devskillNum: parseInt(req.params.id) + 1,
	});
}

module.exports = {
	index,
	show,
};

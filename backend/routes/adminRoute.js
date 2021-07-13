const router = require("express").Router();

const adminController = require("../controllers/adminController");

router.route("/").post(adminController.createAdmin);
router.route("/login").post(adminController.getAdmin);

module.exports = router;
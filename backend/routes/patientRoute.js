const router = require("express").Router();

const patientController = require("../controllers/patientController");

router.route("/").post(patientController.createAdmin).get(patientController.getAll);
router.route("/:id").get(patientController.getParticular).put(patientController.updatePatient).delete(patientController.deletePatient)

module.exports = router;
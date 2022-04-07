const express = require("express");
const router = express.Router();
const {
  getEmployers,
  getEmployerById,
  addEmployer,
  updateEmployer,
  deleteEmployer,
} = require("../controllers/employerController");

router.route("/").get(getEmployers).post(addEmployer);
router
  .route("/:id")
  .get(getEmployerById)
  .put(updateEmployer)
  .delete(deleteEmployer);

module.exports = router;

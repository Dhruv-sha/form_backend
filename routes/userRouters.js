const express = require('express');
const { createForm, updateForm, getFormData, getAllFormTitles, checkTitleExists } = require('./routes');





const router = express.Router();

router.patch("/create-form",createForm);
router.get("/check-title", checkTitleExists);
router.patch("/update-form/:id",updateForm);
router.get("/get-form/:id",getFormData);
router.get("/form-titles",getAllFormTitles);

module.exports = router;
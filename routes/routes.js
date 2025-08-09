const Form = require("../models/formModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const mongoose = require('mongoose');


//form api's


// Create form with partial data
exports.createForm = catchAsync(async (req, res) => {
    const form = await Form.create(req.body);
    res.status(201).json({ status: "success", data: form });
});

exports.checkTitleExists = catchAsync(async (req, res) => {
    const { title } = req.query;
    const existing = await Form.findOne({ Title: title });
    res.status(200).json({ exists: !!existing });
});


exports.updateForm = catchAsync(async (req, res, next) => {
    const formId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(formId)) {
        return res.status(400).json({ status: 'fail', message: 'Invalid form id' });
    }
    const updatedForm = await Form.findByIdAndUpdate(formId, req.body, {
        new: true,
        runValidators: true
    });

    if (!updatedForm) {
        return res.status(404).json({ status: 'fail', message: 'Form not found' });
    }
    res.status(200).json({ status: 'success', data: updatedForm });
});


exports.getAllFormTitles = async (req, res) => {
    try {
        const titles = await Form.find({}, 'Title');
        res.status(200).json({ status: 'success', data: titles });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.getFormData = catchAsync(async (req, res, next) => {
    const formId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(formId)) {
        return res.status(400).json({ status: 'fail', message: 'Invalid form id' });
    }

    const form = await Form.findById(formId);
    if (!form) {
        return res.status(400).json({ status: 'fail', message: 'No form found' });
    }

    res.status(200).json({
        message: "Success",
        data: form
    })
});
const mongoose = require('mongoose');
const validator = require('validator');


const formSchema = new mongoose.Schema({

    Title: {
        type: String,
        default: "Form",
        required: [true, "Please provide a form name"]
    },

    categorySection: [
        {
            categoryQuestion: {
                type: String
            },

            categories: {
                type: [String]
            },

            categoryOptions: [
                {
                    option: { type: String },
                    belongsTo: { type: String }
                }
            ],

            categoryImage: {
                type: String,
                default: ""
            },


            categoryPoints: {
                type: String,
                default: "10"
            },
            categoryUserOptions: [
                {
                    option: { type: String },
                    belongsTo: { type: String }
                }
            ],
        }
    ],



    clozeLineSection: [
        {
            clozeLine: {
                type: String,
            },

            clozeLineOptions: {
                type: [String]
            },
            clozeLineDragged: {
                type: [String]
            },
            clozeLineImage: {
                type: String,
                default: ""
            },

            clozeLinePoints: {
                type: String,
                default: "10"
            },
            clozeLineUserOptions: {
                type: [String]
            },
        }
    ],


    comprehensiveSection: [
        {
            comprehension: {
                type: String
            },

            comprehensionQuestion: {
                type: String,
                default: ""
            },

            comprehensionOptions: [
                {
                    option: { type: String },
                    isCorrect: { type: Boolean, default: false },
                }
            ],

            comprehensionImage: {
                type: String,
                default: ""
            },

            comprehensionPoints: {
                type: String,
                default: "10"
            },
            userSelected: {
                type: String
            }
        }
    ],

    totalUserScore: {
        type: String,
        default: "0"
    },

    isSubmitted: {
        type: Boolean,
        default: false
    }


}, { timestamps: true })

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
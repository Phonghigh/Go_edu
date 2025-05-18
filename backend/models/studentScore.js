import mongoose from "mongoose";
const StudentScoreSchema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        required: true,
        unique:true,
        trim: true,
        index: true
    },
    scores: {
        math: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },
        physics: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },
        biology: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },
        literature: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },
        chemistry: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },
        history: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },
        geography: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },
        english: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },
    },
    code_english: {
        type: String,
        // enum: ["N1", null],
        default: null
    }

});

mongoose.Schema.in

const StudentScore = mongoose.model("StudentScore", StudentScoreSchema);

export default StudentScore;
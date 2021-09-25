const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"]
        }, 
        age : {
            type: Number,
            required: [true, "Age is required"]
        }, 
        over21: {
            type: Boolean,
        }
    }, 
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model('practice', practiceSchema);
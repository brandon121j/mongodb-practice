const Practice = require('../model/Practice');

module.exports = {

    getAllPractice: (body, callback) => {
        Practice.find(body, function(err, foundPractice) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, foundPractice)
            }
        });
    },

    getSinglePractice: (id, callback) => {
        Practice.findById(id, function(err, foundPractice) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, foundPractice)
            }
        });
    },

    createPractice: (body, callback) => {
        const createdPractice = new Practice({
            firstName: body.firstName,
            lastName: body.lastName,
            age: body.age,
            over21: body.over21
        })

        createdPractice.save(function(err, savedPractice) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, savedPractice)
            }
        })
    },
}
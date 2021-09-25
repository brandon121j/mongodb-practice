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
}
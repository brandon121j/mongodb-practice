var express = require('express');
var router = express.Router();
var practiceController = require('./controller/practiceController');

router.get('/', function(req, res, next) {
    practiceController.getAllPractice({}, function(err, foundPractice) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err })
        } else {
            res.json({ message: "Success", foundPractice })
        }
    });
});

router.get('/get-practice-by-id/:id', function(req, res) {
    practiceController.getSinglePractice(req.params.id, function(err, foundPractice) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err })
        } else {
            res.json({ message: "Practice found!", foundPractice})
        }
    });
});

router.post('/', function(req,res) {
    practiceController.createPractice(req.body, function(err, createdPractice) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong", error: err})
        } else {
            res.json({ message: "Item successfully created!", createdPractice })
        }
    })
})

router.put('/update-practice-by-id/:id', function(req, res) {
    practiceController.updatePractice(req.params.id, req.body, function(err, updatedPractice) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err })
        } else {
            res.json({ message: "Successfully updated", updatedPractice })
        }
    });
});

router.delete('/delete-practice-by-id/:id', function(req, res) {
    practiceController.deletePractice(req.params.id, function(err, deletedItem) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err })
        } else {
            res.json({ message: "Item successfully deleted!", deletedItem })
        }
    });
});
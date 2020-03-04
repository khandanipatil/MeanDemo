
const express = require('express');
const app = express();
const employeeRoutes = express.Router();

let Employee = require('../models/employee');

employeeRoutes.route('/add').post(function (req, res) {
    let employee = new Employee(req.body);
    employee.save()
        .then(employee => {
            res.status(200).json({ 'employee': 'Employee Details has been added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

employeeRoutes.route('/').get(function (req, res) {
    Employee.find(function (err, employees) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(employees);
        }
    });
});

employeeRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Employee.findById(id, function (err, employee) {
        res.json(employee);
    });
});

employeeRoutes.route('/update/:id').post(function (req, res) {
    Employee.findById(req.params.id, function (err, employee) {
        if (!employee)
            res.status(404).send("Record not found");
        else {
            employee.EmployeeName = req.body.EmployeeName;
            employee.EmployeeID = req.body.EmployeeID;
            employee.Desgnation = req.body.Desgnation;
            employee.EmailID = req.body.EmailID;
            employee.MobileNumber = req.body.MobileNumber;
            employee.Address = req.body.Address;

            employee.save().then(employee => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

employeeRoutes.route('/delete/:id').get(function (req, res) {
    Employee.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = employeeRoutes;
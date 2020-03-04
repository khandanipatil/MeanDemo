const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    EmployeeName: {
    type: String
  },
  EmployeeID: {
    type: Number
  },
  Desgnation: {
    type: String
  },
  EmailID: {
    type: String
  },
  MobileNumber: {
    type: Number
  },
  Address: {
    type: String
  }
},{
    collection: 'Employee'
});

module.exports = mongoose.model('Employee', Employee);
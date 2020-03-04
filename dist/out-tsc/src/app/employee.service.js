import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.uri = 'http://localhost:4000/employee';
    }
    addEmployee(EmployeeName, EmployeeID, Desgnation, EmailID, MobileNumber, Address) {
        const obj = {
            EmployeeName,
            EmployeeID,
            Desgnation,
            EmailID,
            MobileNumber,
            Address
        };
        console.log(obj);
        this.http.post(`${this.uri}/add`, obj)
            .subscribe(res => console.log('Done'));
    }
    getEmployee() {
        return this
            .http
            .get(`${this.uri}`);
    }
    editEmployee(id) {
        return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    updateEmployee(EmployeeName, EmployeeID, Desgnation, EmailID, MobileNumber, Address, id) {
        const obj = {
            EmployeeName,
            EmployeeID,
            Desgnation,
            EmailID,
            MobileNumber,
            Address
        };
        this
            .http
            .post(`${this.uri}/update/${id}`, obj)
            .subscribe(res => console.log('Update Complete'));
    }
    deleteEmployee(id) {
        return this
            .http
            .get(`${this.uri}/delete/${id}`);
    }
};
EmployeeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], EmployeeService);
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map
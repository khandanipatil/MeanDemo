import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let EmployeeAddComponent = class EmployeeAddComponent {
    constructor(fb, es) {
        this.fb = fb;
        this.es = es;
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            EmployeeName: ['', Validators.required],
            EmployeeID: ['', Validators.required],
            Desgnation: ['', Validators.required],
            EmailID: ['', Validators.required],
            MobileNumber: ['', Validators.required],
            Address: ['', Validators.required]
        });
    }
    addProduct(EmployeeName, EmployeeID, Desgnation, EmailID, MobileNumber, Address) {
        this.es.addEmployee(EmployeeName, EmployeeID, Desgnation, EmailID, MobileNumber, Address);
    }
    ngOnInit() {
    }
};
EmployeeAddComponent = tslib_1.__decorate([
    Component({
        selector: 'app-employee-add',
        templateUrl: './employee-add.component.html',
        styleUrls: ['./employee-add.component.css']
    })
], EmployeeAddComponent);
export { EmployeeAddComponent };
//# sourceMappingURL=employee-add.component.js.map
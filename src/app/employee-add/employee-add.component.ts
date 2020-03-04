import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

 // constructor() { }

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmployeeService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      EmployeeName: ['', Validators.required ],
      EmployeeID: ['', Validators.required ],
      Desgnation: ['', Validators.required ],
      EmailID: ['', Validators.required ],
      MobileNumber: ['', Validators.required ],
      Address: ['', Validators.required ]
    });
  }

  addEmployee(EmployeeName, EmployeeID, Desgnation , EmailID, MobileNumber, Address ) {
    this.es.addEmployee(EmployeeName, EmployeeID, Desgnation, EmailID, MobileNumber, Address );
   // this.router.navigate(['/']);
  }

  ngOnInit() {
  
  }

}

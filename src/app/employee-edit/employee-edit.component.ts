import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  angForm: FormGroup;
  employee: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private es: EmployeeService, private fb: FormBuilder) {
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
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.es.editEmployee(params.id).subscribe(res => {
        this.employee = res;
    });
  });
  }

  updateEmployee(EmployeeName, EmployeeID, Desgnation,EmailID,MobileNumber,Address, id) {
    this.route.params.subscribe(params => {
      this.es.updateEmployee(EmployeeName, EmployeeID, Desgnation,EmailID,MobileNumber,Address, params.id);
      this.router.navigate(['employees']);
    });
  }

}

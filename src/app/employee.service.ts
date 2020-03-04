import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  uri = 'http://localhost:4000/employees';
  constructor(private http: HttpClient) { }

  addEmployee(EmployeeName, EmployeeID, Desgnation,EmailID,MobileNumber,Address) {
    const obj = {
      EmployeeName,
      EmployeeID,
      Desgnation,
      EmailID,
      MobileNumber,
      Address
    };
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

  updateEmployee(EmployeeName, EmployeeID, Desgnation,EmailID,MobileNumber,Address, id) {
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
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  readonly URL_API_SERVER =  'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  postEmployee(employee: Employee) {
    /*console.log(`employee: /${employee.name} /${employee.office}`);*/
    return this.http.post(this.URL_API_SERVER, employee);
  }
  getEmployees() {
    return this.http.get(this.URL_API_SERVER);
  }
  putEmployee(employee: Employee) {
    return this.http.put(this.URL_API_SERVER + `/${employee._id}` , employee );
    /*return this.http.put(this.URL_API + `/${employee._id}`, employee);*/
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API_SERVER + `/${_id}`);
    /*return this.http.delete(this.URL_API + `/${_id}`);*/
  }
}

import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../../services/employee.service';
import {NgForm} from '@angular/forms';
import {Employee} from '../../models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form?: NgForm) {
      /*console.log("Emp: "+form.value.position);*/
      if (form.value._id) {
        this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployees();
          M.toast({html: 'Updated Sucessfully'});
        });
      } else {
        this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          this.resetForm();
          this.getEmployees();
          M.toast({html: 'Saved Sucessfully'});
        });
       }
  }

  getEmployees() {
    this.employeeService.getEmployees()
    .subscribe(res => {
      this.employeeService.employees = res as Employee[];
    });
  }

  editEmployee (employee: Employee) {
      this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm('Are you sure of delete this Employee?')) {
        this.employeeService.deleteEmployee(_id).subscribe(
          res => {
            this.getEmployees();
            this.resetForm(form);
            M.toast({html: 'Deleted Sucessfully'});
          });
    }
  }

  resetForm (form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee ();
    }
  }


}

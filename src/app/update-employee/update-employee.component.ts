import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../service/employee.service';
import { Employee } from './../model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import{Location} from '@angular/common'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:Employee;
  id:number;

  constructor(private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private location:Location) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      },
      error => console.log(error)
      );
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoEmployeeList();
  }
  onSubmit() {
    this.updateEmployee();
  }
  gotoEmployeeList(){
    this.router.navigate(['employees']);
  }
  onCancel(){
    this.location.back();
  }


}

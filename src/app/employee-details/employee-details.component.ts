import { Component, OnInit } from '@angular/core';
import { Employee } from './../model/employee';
import { EmployeeService } from './../service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee;
  id:number;

  constructor(
    private employeeService:EmployeeService,
    private router:Router,
    private routerActivated:ActivatedRoute
  ) { }


  ngOnInit() {
    this.id = this.routerActivated.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      data =>{
        this.employee = data;
      },
      error =>{
        console.log(error);
      }
    )
  }

  list(){
    this.router.navigate(['employees']);
  }
  gotoUpdate(id:number){
    this.router.navigate(['update-employee',id]);
  }

}

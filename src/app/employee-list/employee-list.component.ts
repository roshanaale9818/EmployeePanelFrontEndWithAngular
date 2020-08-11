import { Component, OnInit } from '@angular/core';
import { Employee } from './../model/employee';
import { EmployeeService } from './../service/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[];

  constructor(
    private employeeService:EmployeeService,
    private router:Router
  ) { }

  ngOnInit() {
    this.reloadList();

  }
  reloadList(){
    this.employeeService.getAllEmployees().subscribe( (data:Employee[]) =>{
      this.employees = data;
      console.log(data);
    })
  }
  deleteEmployee(id:number){
    if(confirm("Are you sure you want to delete?")){
      this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.reloadList();
    })
      console.log('deleted');
    }
    else{
      console.log('delete canceled');
    }


  }
  employeeDetails(id:number){
    this.router.navigate(['details',id]);
  }

}

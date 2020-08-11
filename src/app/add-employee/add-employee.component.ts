import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './../service/employee.service';
import { Employee } from './../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
createForm:FormGroup;
submitted:boolean = false;
  constructor(
    private formBuilder:FormBuilder,
    private employeeService:EmployeeService,
    private router:Router) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]]
    });

  }
  get f(){
    return this.createForm.controls;
  }
  onSubmit(value:Employee){
    console.log(value);
    this.submitted = true;
    if(this.createForm.invalid){
      alert("please fillup the form")
      return;
    }
    else{
      console.log(value);
      this.employeeService.createEmployee(value).subscribe(data =>{
          alert("successfully added new employee");
          this.createForm.reset();
      },error =>{
        console.log(error);
      })
    }
  }
  backToEmployeeList(){
    this.router.navigate(['employees']);
  }
  }




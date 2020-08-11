import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



const routes: Routes = [
  {
    path:"employees",
    component:EmployeeListComponent
  },
  {
    path:'details/:id',
    component:EmployeeDetailsComponent
  },
  {
    path:'add-employee',
    component:AddEmployeeComponent
  },
  {
    path:'update-employee/:id',
    component:UpdateEmployeeComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'employees'
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'employees'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

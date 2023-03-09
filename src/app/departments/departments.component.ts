// import { Component, OnInit,ViewChild } from '@angular/core';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { DialogComponent } from '../dialog/dialog.component';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';

// @Component({
//   selector: 'app-departments',
//   templateUrl: './departments.component.html',
//   styleUrls: ['./departments.component.css']
// })
// export class DepartmentsComponent  {
//   displayedColumns: string[] = ['id', 'departmentsname', 'Action'];
//   // dataSource = ELEMENT_DATA;
 


//   constructor(private dialog : MatDialog) {

//   }
//   openDialog() {
//     this.dialog.open(DialogComponent,{
//     width:'30%'
//     });

//   }



// }

import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departments } from '../departments';
import { Router } from '@angular/router';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent  {

checkoutForm: FormGroup;
departments: Departments = new Departments();
department: Departments[] | any;
  constructor(private departmentsService: DepartmentsService, private dialog : MatDialog, private formBuilder:FormBuilder, private router:Router) {

    this.checkoutForm = formBuilder.group({
      departmentname:['', Validators.required]
    })
}

ngOnInit(): void {
  this.getDepartment();
}

private getDepartment(){
  this.departmentsService.getDepartmentsList().subscribe(data => {
    // this.departments = data;
  })
}

goToDepartmentsList(){
  this.router.navigate(['/deartments']);
}

Editedit(){

}

onSubmit(){
  console.log(this.departments);
  // this.saveDepartments();
  console.log(this.checkoutForm);
}

}
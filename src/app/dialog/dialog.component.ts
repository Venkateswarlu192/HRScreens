import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  checkoutForm: FormGroup ;
 
  
  departmentFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  // productForm !: FormGroup
  constructor(formBuilder : FormBuilder ) {

    this.checkoutForm = new FormGroup({
      departmentName: new FormControl('', [Validators.required, Validators.maxLength(20)]),

  });
    }

  ngOnInit(): void {   
}




// public myError = (controlName: string, errorName: string) =>{
//   return this.checkoutForm.controls[controlName].hasError(errorName);
//   }
onSubmit(){
  // console.log(this.departments);
  // this.save();
  // console.log(this.checkoutForm);
}




}

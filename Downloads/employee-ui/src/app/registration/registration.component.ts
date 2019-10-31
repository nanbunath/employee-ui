import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public RegistartionForm: FormGroup;

  constructor(private fb: FormBuilder,private employeeService:EmployeeService,private router: Router) { }

  ngOnInit() {
    this.RegistartionForm = this.fb.group({
      firstName: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      lastName: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      gender: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      department: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      dateOfBirth: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ]
    });

  }
AddEmployee(form){
  this.employeeService.AddEmployee(form).subscribe(employee =>{
    console.log("Employee Added");
  });
}

newChange(): void {
  this.router.navigateByUrl('viewEmployee');
}
}

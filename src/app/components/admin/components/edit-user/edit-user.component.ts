import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() email?: string = 'admin@mail.me';
  firstName?: string;
  lastName?: string;
  role?: string;

  form: FormGroup;


  constructor(private http: HttpService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      email: [null, { validators: [Validators.required], updateOnChange: 'change' }],
      firstName: [null, { validators: [Validators.required], updateOnChange: 'change' }],
      lastName: [null, { validators: [Validators.required], updateOnChange: 'change' }],
      role: [null, { validators: [Validators.required], updateOnChange: 'change' }]
    });
  }

  ngOnInit(): void {
    if (this.email) this.http.getUser(this.email).subscribe(user => {
      this.form.controls['email'].setValue(user.email);
      this.form.controls['firstName'].setValue(user.firstName);
      this.form.controls['lastName'].setValue(user.lastName);
      this.form.controls['role'].setValue(user.role);
    });
  }

  onSubmit() {
    console.log(this.email);
  }

}

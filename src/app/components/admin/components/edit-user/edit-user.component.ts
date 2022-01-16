import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;

  form: FormGroup;

  constructor(private http: HttpService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.form = this.formBuilder.group({
      email: [null, { validators: [Validators.required], updateOnChange: 'change' }],
      firstName: [null, { validators: [Validators.required], updateOnChange: 'change' }],
      lastName: [null, { validators: [Validators.required], updateOnChange: 'change' }],
      role: [null, { validators: [Validators.required], updateOnChange: 'change' }]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(e => {
      if (e['email']) this.http.getUser(e['email']).subscribe(user => {
        this.email = user['email'];
        this.form.controls['email'].setValue(user.email);
        this.form.controls['firstName'].setValue(user.firstName);
        this.form.controls['lastName'].setValue(user.lastName);
        this.form.controls['role'].setValue(user.role);
      });
    })
  }

  onSubmit() {
    const user = new User();
    user.email = this.form.controls['email'].value;
    user.firstName = this.form.controls['firstName'].value;
    user.lastName = this.form.controls['lastName'].value;
    user.role = this.form.controls['role'].value;
    
    this.http.updateUser(user).subscribe();
    this.router.navigate(['admin/dashboard']);
  }

}

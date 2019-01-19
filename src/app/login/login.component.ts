import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TEST_ADMIN_EMAIL, TEST_ADMIN_PASSWORD } from '../../shared/constants';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private toast: ToastrService,
    private changeDetectorRef: ChangeDetectorRef) {
    this.initForm();
  }

  ngOnInit() {

  }

  initForm() {
    this.form = this.formBuilder.group({
      email: new FormControl(TEST_ADMIN_EMAIL, Validators.required),
      password: new FormControl(TEST_ADMIN_PASSWORD, Validators.required)
    });
  }

  login() {
    this.auth.userLogin({email: this.form.value.email, password: this.form.value.password})
      .subscribe(response => {
        console.log(response);
        location.href = '/';
        this.router.navigate(['']);
      }, err => {
        console.log(err);
        this.toast.error(err.error, 'Error');
      });
  }

}

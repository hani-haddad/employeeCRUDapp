import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../services/account.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  filePath: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private http: HttpClient
  ) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      age: ['', Validators.nullValidator],
      image: ['', Validators.nullValidator],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onFileChanged(fileInput: any) {
    this.filePath = fileInput.target.value;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    //  // upload img
    // this.http.post('url/to/your/api', this.filePath)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('SUCCESS !!');
    //   })
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        (error: any) => {
          this.loading = false;
          console.log("loading error")
        });
  }
}

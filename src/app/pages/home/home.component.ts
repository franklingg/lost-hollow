import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@src/app/core/services/user/user.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { registerIcons } from '@src/app/util/icon-registry.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  showPassword = false;
  submittedForm = false;
  errorMessage = '';
  isLoading = false;

  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    this.submittedForm = true;
    this.errorMessage = '';
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.userService
        .autenticate(
          this.loginForm.value.email!,
          this.loginForm.value.password!
        )
        .subscribe({
          next: () => {
            this.userService.hasAcceptedTerms(
              window.history.state['acceptedTerms']
            );
          },
          error: (_) => {
            Object.keys(this.loginForm.controls).forEach((key) => {
              this.loginForm.get(key)?.setErrors({ request: true });
            });
            this.errorMessage = this.translate.instant('login.errors.request');
            this.isLoading = false;
          },
        });
    }
  }

  togglePasswordView() {
    this.showPassword = !this.showPassword;
  }
}

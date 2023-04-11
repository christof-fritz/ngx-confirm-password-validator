# NgxConfirmPasswordValidator

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/christof-fritz/ngx-confirm-password-validator?filename=%2Fprojects%2Fngx-confirm-password-validator%2Fpackage.json) 
![npm](https://img.shields.io/npm/v/@christof-fritz/ngx-confirm-password-validator)
![GitHub](https://img.shields.io/github/license/christof-fritz/ngx-confirm-password-validator) 

A validator to check if two input fields in a template driven form are equal.

Adds the validation errors to the two inputs instead of the form.

## Demo

```angular2html
<form otherPasswordControlName="password_repeat"
      passwordControlName="password"
      confirmPasswordValidator>
  <input [maxlength]="80"
         [minlength]="6"
         [name]="'username'"
         [ngModel]="username"
         disabled>

  <input [(ngModel)]="password"
         name="password"
         required
         type="password">

  <input [(ngModel)]="password_repeat"
         name="password_repeat"
         required
         type="password">
</form>
```

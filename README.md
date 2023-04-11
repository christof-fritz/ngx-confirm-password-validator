# NgxConfirmPasswordValidator

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

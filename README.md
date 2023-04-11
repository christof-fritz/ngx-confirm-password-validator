# NgxConfirmPasswordValidator

A validator to check if two input fields in a template driven form are equal.

Adds the validation errors to the two inputs instead of the form.

## Example

```html
<form otherPasswordControlName="password_repeat"
      passwordControlName="password"
      confirmPasswordValidator>
  <input [name]="'username'"
         [ngModel]="username">

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

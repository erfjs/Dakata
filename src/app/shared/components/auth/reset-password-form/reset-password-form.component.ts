import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LabelComponent } from '../../form/label/label.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-reset-password-form',
  imports: [
    LabelComponent,
    InputFieldComponent,
    ButtonComponent,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './reset-password-form.component.html',
  styles: ``,
})
export class ResetPasswordFormComponent {
  email = '';
  isSubmitted = false;

  onEmailChange(value: string | number) {
    this.email = String(value);
  }

  // UI only: connect this to your backend to actually send the reset link.
  onSubmit() {
    if (!this.email.trim()) {
      return;
    }
    console.log('Reset password for:', this.email);
    this.isSubmitted = true;
  }
}

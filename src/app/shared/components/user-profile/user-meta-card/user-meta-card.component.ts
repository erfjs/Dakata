import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { InputFieldComponent } from '../../form/input/input-field.component';

import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-meta-card',
  imports: [
    ModalComponent,
    InputFieldComponent,
    ButtonComponent,
    FormsModule,
  ],
  templateUrl: './user-meta-card.component.html',
  styles: ``
})
export class UserMetaCardComponent {

  constructor(public modal: ModalService) {}

  isInfoModalOpen = false;
  openInfoModal() { this.isInfoModalOpen = true; }
  closeInfoModal() { this.isInfoModalOpen = false; }

  // Example user data (could be made dynamic)
  user = {
    firstName: 'Nima',
    lastName: 'Rahimi',
    role: 'Operations Manager',
    location: 'Tehran, Iran',
    avatar: '/images/user/avatar.svg',
    social: {
      facebook: '#',
      x: '#',
      linkedin: '#',
      instagram: '#',
    },
    email: 'nima.rahimi@example.com',
    phone: '+98 21 5555 0142',
    bio: 'Operations Manager',
  };

  handleInfoSave() {
    console.log('Saving profile changes:', this.user);
    this.closeInfoModal();
  }
}

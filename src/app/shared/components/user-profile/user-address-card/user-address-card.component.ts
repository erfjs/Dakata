import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

import { InputFieldComponent } from '../../form/input/input-field.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { LabelComponent } from '../../form/label/label.component';
import { ModalComponent } from '../../ui/modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-address-card',
  imports: [
    InputFieldComponent,
    ButtonComponent,
    LabelComponent,
    ModalComponent,
    FormsModule,
  ],
  templateUrl: './user-address-card.component.html',
  styles: ``
})
export class UserAddressCardComponent {

  constructor(public modal: ModalService) {}

  isAddressModalOpen = false;
  openAddressModal() { this.isAddressModalOpen = true; }
  closeAddressModal() { this.isAddressModalOpen = false; }

  address = {
    country: 'Iran',
    cityState: 'Tehran, Iran',
    postalCode: '1234567890',
    taxId: 'DK-204518',
  };

  handleAddressSave() {
    console.log('Saving address changes:', this.address);
    this.closeAddressModal();
  }
}

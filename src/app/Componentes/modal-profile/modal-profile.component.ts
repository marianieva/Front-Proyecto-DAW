import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent {

  @Input() showModal: boolean = false;
  @Input() modalType: 'profile' | 'password' = 'profile';
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

}

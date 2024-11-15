import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() datoHijo: string = 'Vacío';
  @Output() meHanHechoClick = new EventEmitter<string>();

  disparaElEvento() {
    this.meHanHechoClick.emit('Hola Papá!');
  }
}

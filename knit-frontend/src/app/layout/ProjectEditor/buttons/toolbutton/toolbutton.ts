import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbutton',
  imports: [CommonModule],
  templateUrl: './toolbutton.html',
  styleUrl: './toolbutton.css',
})
export class Toolbutton {
  @Input() icon?: string;
  @Input() alt?: string;
  @Input() selected = false;
  @Output() clicked = new EventEmitter<void>();
}

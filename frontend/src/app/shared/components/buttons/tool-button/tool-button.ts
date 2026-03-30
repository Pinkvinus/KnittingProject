import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool-button',
  imports: [CommonModule],
  templateUrl: './tool-button.html',
  styleUrl: './tool-button.css',
})
export class ToolButton {
  @Input() icon?: string;
  @Input() alt?: string;
  @Input() selected = false;
  @Output() clicked = new EventEmitter<void>();
}

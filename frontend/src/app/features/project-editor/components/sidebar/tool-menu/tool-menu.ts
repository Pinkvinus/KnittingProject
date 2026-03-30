import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YarnMenu } from './yarn-menu/yarn-menu'; 
import { ShapeMenu } from './shape-menu/shape-menu';

@Component({
  selector: 'app-tool-menu',
  imports: [CommonModule, YarnMenu, ShapeMenu],
  templateUrl: './tool-menu.html', 
  styleUrl: './tool-menu.css',
})
export class ToolMenu {
  @Input() selectedTool: string | null = null;
  @Output() optionSelected = new EventEmitter<string>();

  onOptionClick(option: string) {
    this.optionSelected.emit(option);
  }
}

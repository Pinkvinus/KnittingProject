import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Yarnmenu } from './yarn-menu/yarn-menu'; 
import { ShapeMenu } from './shape-menu/shape-menu';

@Component({
  selector: 'app-toolmenu',
  imports: [CommonModule, Yarnmenu, ShapeMenu],
  templateUrl: './toolmenu.html', 
  styleUrl: './toolmenu.css',
})
export class Toolmenu {
  @Input() selectedTool: string | null = null;
  @Output() optionSelected = new EventEmitter<string>();

  onOptionClick(option: string) {
    this.optionSelected.emit(option);
  }
}

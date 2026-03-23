import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Toolmenu } from './toolmenu/toolmenu';

@Component({
  selector: 'app-sidebar',
  imports: [Toolbar, Toolmenu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  selectedTool: string | null = null;
  selectedOption: string | null = null;

  onToolSelected(tool: string | null) {
    this.selectedTool = tool;
    this.selectedOption = null; // Reset option when tool changes
  }

  onOptionSelected(option: string) {
    this.selectedOption = option;
    // Here you can add logic to apply the selected option
  }
}

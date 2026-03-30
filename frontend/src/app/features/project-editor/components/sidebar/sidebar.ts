import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { ToolMenu } from './tool-menu/tool-menu';

@Component({
  selector: 'app-sidebar',
  imports: [Toolbar, ToolMenu],
  styles: `
    .pe-sidebar {
      display: flex;
      height: 100%;
      box-shadow: 4px 0 10px #00000033;
      position: relative;
    }`,

  template: `
    <aside class="pe-sidebar">
      <app-toolbar (toolSelected)="onToolSelected($event)"></app-toolbar>
      <app-tool-menu [selectedTool]="selectedTool" (optionSelected)="onOptionSelected($event)"></app-tool-menu>
    </aside>`,
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

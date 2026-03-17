import { Component } from '@angular/core';
import { Toolbutton } from '../../buttons/toolbutton/toolbutton';

@Component({
  selector: 'app-toolbar',
  imports: [Toolbutton],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  selectedTool: string | null = null;

  onToolClick(tool: string) {
    this.selectedTool = tool;
  }
}

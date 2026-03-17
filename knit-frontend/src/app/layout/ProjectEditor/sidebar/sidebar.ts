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

  onToolSelected(tool: string | null) {
    this.selectedTool = tool;
  }
}

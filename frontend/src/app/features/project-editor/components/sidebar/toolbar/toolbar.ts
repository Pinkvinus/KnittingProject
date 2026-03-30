import { Component, Output, EventEmitter } from '@angular/core';
import { ToolButton } from '../../../../../shared/components/buttons/tool-button/tool-button';

@Component({
  selector: 'app-toolbar',
  imports: [ToolButton],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  selectedTool: string | null = null;
  @Output() toolSelected = new EventEmitter<string | null>();

  onToolClick(tool: string) {
    if (this.selectedTool === tool) {
      this.selectedTool = null; // Deselect if the same tool is clicked again
      this.toolSelected.emit(null);
    } else {
      this.selectedTool = tool; // Select the new tool
      this.toolSelected.emit(tool);
    }
  }
}

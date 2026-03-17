import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolmenu',
  imports: [CommonModule],
  templateUrl: './toolmenu.html',
  styleUrl: './toolmenu.css',
})
export class Toolmenu {
  @Input() selectedTool: string | null = null;
}

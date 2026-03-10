import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import {Dropdown, DropdownValue} from '../buttons/dropdown/dropdown';

@Component({
  selector: 'app-topbar',
  imports: [FormsModule, NgOptimizedImage, Dropdown],
  inputs: ['projectName'],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {

  // Project name
  defaultProjectName: string = "Unnamed Project"
  projectName: string | null = this.defaultProjectName;
  isEditable: boolean = false;

  startEditing(): void {
    this.isEditable = true;
  }

  doneEditing(newName: String): void {
    this.projectName = newName.trim();
    this.isEditable = false;
  }

  onKeyPress(event: KeyboardEvent, newName: String): void {
    if (event.key === 'Enter') this.doneEditing(newName);
    if (event.key === 'Escape') this.isEditable = false;
  }
}

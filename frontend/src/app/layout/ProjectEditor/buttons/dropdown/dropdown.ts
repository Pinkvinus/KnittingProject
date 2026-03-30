import {Component, EventEmitter, Input, Output} from '@angular/core';

// Adapted from: https://stackoverflow.com/a/34736563

export class DropdownValue {
  value:string;
  label:string;

  constructor(value:string,label:string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'dropdown',
  templateUrl: 'dropdown.html',
  styleUrl: 'dropdown.css',
  imports: []
})
export class Dropdown {
  @Input() values: DropdownValue[] = [];
  @Output() select = new EventEmitter<any>();

  isOpen: string | null = null;
  selected: DropdownValue | null = null;

  toggle(key:string) {
    this.isOpen = this.isOpen === key ? null : key;
  }

  toggleBlur() {
    this.isOpen = null;
  }

  selectItem(value: DropdownValue) {
    this.selected = value;
    this.isOpen = null;
    this.select.emit(value);
  }

  // Dropdown menu options adapted from Photoshop

  // Dropdown: File
  protected dropdownValuesFile: DropdownValue[] = [
    new DropdownValue("new", "New..."),
    new DropdownValue("open", "Open..."),
    new DropdownValue("divider", "divider"),
    new DropdownValue("close", "Close"),
    new DropdownValue("save", "Save"),
    new DropdownValue("saveAs", "Save as..."),
    new DropdownValue("divider", "divider"),
    new DropdownValue("import", "Import"),
    new DropdownValue("export", "Export"),
    new DropdownValue("generate", "Generate"),
    new DropdownValue("share", "Share"),
    new DropdownValue("print", "Print..."),
    new DropdownValue("divider", "divider"),
    new DropdownValue("fileInfo", "File info")
  ]

  // Dropdown: Edit
  protected dropdownValuesEdit: DropdownValue[] = [
    new DropdownValue("undo", "Undo"),
    new DropdownValue("redo", "Redo"),
    new DropdownValue("divider", "divider"),
    new DropdownValue("cut", "Cut"),
    new DropdownValue("copy", "Copy"),
    new DropdownValue("paste", "Paste"),
    new DropdownValue("divider", "divider"),
    new DropdownValue("fill", "Fill"),
    new DropdownValue("divider", "divider"),
    new DropdownValue("keymaps", "Keymaps"),
  ]

  /** TODO: Ask team about "etc." **/
  // Dropdown: Config
  protected dropdownValuesConfig: DropdownValue[] = [
    new DropdownValue("ease", "Ease"),
    new DropdownValue("swatch", "Swatch"),
  ]

  protected dropdownMenus =
    new Map<string, DropdownValue[]>([
      ["File", this.dropdownValuesFile],
      ["Edit", this.dropdownValuesEdit],
      ["Configuration", this.dropdownValuesConfig],
    ]);
}

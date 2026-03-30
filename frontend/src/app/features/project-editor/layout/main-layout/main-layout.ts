import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Topbar } from '../../components/topbar/topbar';
import { Maincontent } from '../main-content/main-content'; 

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, Topbar, Maincontent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}

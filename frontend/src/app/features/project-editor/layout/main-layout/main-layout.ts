import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Topbar } from '../../components/topbar/topbar';
import { Maincontent } from '../main-content/main-content'; 

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, Topbar, Maincontent],
  
  styles: `
    .layout {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .workspace {
      flex: 1 ;
      display: flex;
      overflow: hidden;
      width: 100%;
    }
    .workspace app-main-content {
      flex: 1;
    }`,

  template: `
    <div class="layout">
      <app-topbar></app-topbar>
      <div class="workspace">
        <app-sidebar></app-sidebar>
        <app-main-content></app-main-content>
      </div>
    </div>`,
})

export class MainLayout {}

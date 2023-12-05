import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ProyectsListComponent } from './proyects-list/proyects-list.component';
import { MaterialModule } from '../modules/material/material.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';


const paginas = [
  DashboardComponent,
  SidebarComponent,
  ProyectsListComponent,
]

@NgModule({
  declarations: [
    paginas,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    paginas
  ]
})
export class PagesModule { }

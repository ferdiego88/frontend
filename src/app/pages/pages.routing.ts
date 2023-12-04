import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectsListComponent } from './proyects-list/proyects-list.component';

const routes: Routes = [

  { path: '', component: DashboardComponent,
  children: [
      { path: 'proyectos', component: ProyectsListComponent },
      {path: '', redirectTo: '/proyectos', pathMatch: 'full'},
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


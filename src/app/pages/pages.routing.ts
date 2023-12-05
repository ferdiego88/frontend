import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectsListComponent } from './proyects-list/proyects-list.component';
import { AuthGuard } from '../guard/auth.guard';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard]
  ,
  children: [
      { path: '', component: TasksListComponent },
  ]
},

 {path: 'proyectos', component: ProyectsListComponent,
  canActivate: [AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


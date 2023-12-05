import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectsListComponent } from './proyects-list/proyects-list.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard]
  ,
  children: [
      { path: '', component: ProyectsListComponent },
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Project } from 'src/app/models/project.model';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  public project!: Project;

  constructor(private observer: BreakpointObserver,
              public usuarioService: UsuarioService,
              public store: Store<AppState>) {

  }
  ngOnInit(): void {
    this.store.select('items').subscribe(({project}) => {

      this.project = new Project(project.id, project.nombre);
    })
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {

      if (res.matches) {

        this.sidenav.mode = 'over';
        this.sidenav.close();

      } else {

        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  logout() {
     this.usuarioService.logout();
  }

}

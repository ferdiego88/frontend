
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-proyects-list',
  templateUrl: './proyects-list.component.html',
  styleUrls: ['./proyects-list.component.scss']
})
export class ProyectsListComponent implements OnInit {

  projects: Project[] = [];
  project!: Project;
  valorSeleccionado: string = '';


  constructor(private projectService: ProjectService) {

  }


  // Función que se ejecutará cuando cambie la selección
  onSeleccionChange(event: any) {
    // Acceder al valor seleccionado
    this.valorSeleccionado = event.target.value;
    console.log('Valor seleccionado:', this.valorSeleccionado);
  }


  ngOnInit(): void {
    this.getProyectos();
  }


  getProyectos() {
      this.projectService.getProjects()
        .subscribe(proyectos => {
          console.log(proyectos);
          this.projects = proyectos;
        })
  }

  irDashBoard() {
    this.projects = this.projects.filter(resp => {
       if (resp.id === this.valorSeleccionado) {

        this.project = new Project(resp.id, resp.nombre);
       }
    });
  }

}

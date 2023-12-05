import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskService } from 'src/app/services/task.service';
import { Tareas } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  public tareas: Tareas[] = [];
  public todo: Tareas[] = [];
  public doing: Tareas[] = [];
  public done: Tareas[] = [];



  constructor(private taskService: TaskService) {

  }
  ngOnInit(): void {
    this.getTareas();
  }


  drop(event: CdkDragDrop<Tareas[]>) {
    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    // event.container.data.forEach(data => {
    //   console.log(data);
    // })
    console.log(event.container.data[0]);

   // this.updateTarea('','');
  }

  getTareas() {
    this.taskService.getTareas().subscribe((tareas) => {
      this.tareas = tareas;
      console.log(this.tareas);
      this.tareas.forEach(tarea => {
         this.loadTareasCard(tarea);
      })
    })


  }

  loadTareasCard(tarea:Tareas) {
    switch (tarea.estado) {
      case 'TODO':
        this.todo.push(tarea)
        break;
      case 'DOING':
        this.doing.push(tarea)
        break;
      case 'DONE':
        this.done.push(tarea)
        break;
      default:
        break;
    }
  }


  updateTarea(idTarea: string, estado: string) {
    this.taskService.updateTarea('656d07b15d53b88b6c0c7e7c', 'DOING')
      .subscribe(resp => {
        console.log(resp);
      })
  }

}

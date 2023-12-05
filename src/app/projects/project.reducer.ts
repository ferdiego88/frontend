import { createReducer, on } from '@ngrx/store';
import { setProject } from './project.actions';
import { Project } from '../models/project.model';
import { AppState } from '../app.reducer';

export interface State {
    project: Project;
}

export const initialState: State = {

   project: {
    id: '',
    nombre: ''
   }
}

export const _projectReducer = createReducer(
    initialState,
    on(setProject, (state, {project} ) => ({...state, project})),

);

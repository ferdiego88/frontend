import { ActionReducerMap } from '@ngrx/store';
import * as proyecto from './projects/project.reducer';

export interface AppState {
   items: proyecto.State
}


export const appReducers: ActionReducerMap<AppState> = {

  items: proyecto._projectReducer,
}

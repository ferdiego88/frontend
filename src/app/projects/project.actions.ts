import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project.model';

export const setProject = createAction(
  '[SET] proyecto',
  props< { project: Project }>()
  );

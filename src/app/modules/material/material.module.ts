import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules,
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }

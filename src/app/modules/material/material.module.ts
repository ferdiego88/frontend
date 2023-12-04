import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';


const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
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

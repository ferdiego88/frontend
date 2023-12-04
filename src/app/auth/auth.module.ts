import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const sesionComponents = [
  LoginComponent,
  RegisterComponent,
]

@NgModule({
  declarations: [
    sesionComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    sesionComponents,
  ]
})
export class AuthModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  public formSubmitted = false;

  public loginForm = this.fb.group({

    email: ['',[Validators.required, Validators.email]],
    password: ['123456',[Validators.required]],
    remember: [false]
  },{
    validators: this.valoresNulos('password','password2')
  })

  constructor(private router: Router,
              private fb: FormBuilder,
              private usuarioService: UsuarioService
              ) {

  }



  ngOnInit(): void {

    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 0) {
      this.loginForm.patchValue({
        remember: true
      })
    }

  }

  login() {

    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
        return;
    }

    this.usuarioService.login(this.loginForm.value)
      .subscribe(resp => {

        this.router.navigateByUrl('/proyectos');
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error')
      })

  }



  valoresNulos(email: string, pass:string) {

    return (formGroup: FormGroup) => {

      const emailControl = formGroup.get(email);
      const passControl = formGroup.get(pass);

      if (passControl && emailControl) {
         passControl?.setErrors(null);
      } else {
        passControl?.setErrors({vacio: true})
      }

    }
  }


}

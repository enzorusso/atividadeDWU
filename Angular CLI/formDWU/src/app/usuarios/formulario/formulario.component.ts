import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formUser!: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm(new Usuario());
  }

  createForm(user: Usuario) {
    this.formUser = new FormGroup({
      email: new FormControl(user.email),
      senha: new FormControl(user.senha)
    })
  }

  onSubmit(){
    console.log(this.formUser.value);
    this.authService.fazerLogin(this.formUser.value);
    this.formUser.reset(new Usuario());
  }
}

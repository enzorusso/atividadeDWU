import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ DatePipe ]
})
export class CadastroComponent implements OnInit {
  formUser!: FormGroup;
  data: any = new Date();

  constructor(private datePipe: DatePipe) {
    this.data = this.datePipe.transform(this.data, 'dd-MM-yyyy');
  }
  

  ngOnInit(): void {
    this.createForm(new Usuario());
  }

  createForm(user: Usuario) {
    this.formUser = new FormGroup({
      data: new FormControl(user.data),
      hora: new FormControl(user.hora),
      textoAlfanumerico: new FormControl(user.textoAlfanumerico),
      numero: new FormControl(user.numero),
      textoLivreAlfanumerico: new FormControl(user.textoLivreAlfanumerico)
    })
  }
  
  onSubmit(){
    console.log(this.formUser.value);
    this.formUser.reset(new Usuario());
  }
}

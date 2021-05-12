import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./usuarios/cadastro/cadastro.component";
import { FormularioComponent } from "./usuarios/formulario/formulario.component";

const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'login', component: FormularioComponent },
  { path : 'cadastro', component: CadastroComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

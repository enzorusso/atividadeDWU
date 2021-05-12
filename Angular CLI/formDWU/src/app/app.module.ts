import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './usuarios/formulario/formulario.component';
import { CadastroComponent } from './usuarios/cadastro/cadastro.component';
import { AuthService } from './usuarios/formulario/auth.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [ 
    AppComponent,
    FormularioComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

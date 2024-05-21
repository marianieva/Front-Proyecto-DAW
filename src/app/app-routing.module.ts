import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Bodies/home/home.component';
import { UsuarioComponent } from './Bodies/usuario/usuario.component';
import { PedidosComponent } from './Bodies/pedidos/pedidos.component';
import { IncidenciasComponent } from './Bodies/incidencias/incidencias.component';
import { LoginComponent } from './Bodies/login/login.component';
import { ErrorComponent } from './Bodies/error/error.component';
import { ModalComponent } from './Componentes/modal/modal.component';

const routes: Routes = [
  
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'usuario',
    component : UsuarioComponent
  },
  {
    path:'pedidos', 
    component: PedidosComponent
  },
  {
    path:'incidencias',
    component : IncidenciasComponent
  },
  {
    path:'error',
    component : ErrorComponent
  },
  { path: '**', 
    redirectTo: '/error' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

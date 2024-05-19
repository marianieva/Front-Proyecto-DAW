import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliHomeComponent } from './Bodies/cli-home/cli-home.component';
import { CliUsuarioComponent } from './Bodies/cli-usuario/cli-usuario.component';
import { CliPedidosComponent } from './Bodies/cli-pedidos/cli-pedidos.component';
import { CliIncidenciasComponent } from './Bodies/cli-incidencias/cli-incidencias.component';
import { LoginComponent } from './Bodies/login/login.component';
import { ErrorComponent } from './Bodies/error/error.component';
import { ModalProfileComponent } from './Componentes/modal-profile/modal-profile.component';

const routes: Routes = [
  
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'',
    component : CliHomeComponent
  },
  {
    path:'usuario',
    component : CliUsuarioComponent
  },
  {
    path:'pedidos', 
    component: CliPedidosComponent
  },
  {
    path:'incidencias',
    component : CliIncidenciasComponent
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

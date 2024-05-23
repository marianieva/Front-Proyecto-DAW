import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Bodies/home/home.component';
import { UsuarioComponent } from './Bodies/usuario/usuario.component';
import { PedidosComponent } from './Bodies/pedidos/pedidos.component';
import { IncidenciasComponent } from './Bodies/incidencias/incidencias.component';
import { LoginComponent } from './Bodies/login/login.component';
import { ErrorComponent } from './Bodies/error/error.component';
<<<<<<< Updated upstream
import { ModalComponent } from './Componentes/modal/modal.component';
=======
import { ModalProfileComponent } from './Componentes/modal-profile/modal-profile.component';
import { AuthGuard } from 'src/guard/auth.guard';
>>>>>>> Stashed changes

const routes: Routes = [
  
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'',
<<<<<<< Updated upstream
    component : HomeComponent
=======
    component : CliHomeComponent,
    canActivate: [AuthGuard]
>>>>>>> Stashed changes
  },
  {
    path:'usuario',
    component : UsuarioComponent
  },
  {
    path:'pedidos', 
<<<<<<< Updated upstream
    component: PedidosComponent
  },
  {
    path:'incidencias',
    component : IncidenciasComponent
=======
    component: CliPedidosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'incidencias',
    component : CliIncidenciasComponent,
    canActivate: [AuthGuard]
>>>>>>> Stashed changes
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

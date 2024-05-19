import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { SliderComponent } from './Componentes/slider/slider.component';
import { CardComponent } from './Componentes/card/card.component';
import { ProfileCardComponent } from './Componentes/profile-card/profile-card.component';
import { FormCliAltaPedidoComponent } from './Componentes/form-cli-alta-pedido/form-cli-alta-pedido.component';
import { FormCliIncidenciaComponent } from './Componentes/form-cli-incidencia/form-cli-incidencia.component';
import { FormModificarUsuarioComponent } from './Componentes/form-modificar-usuario/form-modificar-usuario.component';
import { FormModificarPasswordComponent } from './Componentes/form-modificar-password/form-modificar-password.component';
import { FormTecIncidenciaComponent } from './Componentes/form-tec-incidencia/form-tec-incidencia.component';
import { FormAdminIncidenciaComponent } from './Componentes/form-admin-incidencia/form-admin-incidencia.component';
import { FormAdminAltaUsuarioComponent } from './Componentes/form-admin-alta-usuario/form-admin-alta-usuario.component';
import { FormAdminImpresoraComponent } from './Componentes/form-admin-impresora/form-admin-impresora.component';
import { FormAdminModificarUsuarioComponent } from './Componentes/form-admin-modificar-usuario/form-admin-modificar-usuario.component';

import { HttpClientModule } from "@angular/common/http";
import { CliHomeComponent } from './Bodies/cli-home/cli-home.component';
import { CliUsuarioComponent } from './Bodies/cli-usuario/cli-usuario.component';
import { TableCliEquiposComponent } from './Componentes/table-cli-equipos/table-cli-equipos.component';
import { CliPedidosComponent } from './Bodies/cli-pedidos/cli-pedidos.component';
import { TableCliPedidosComponent } from './Componentes/table-cli-pedidos/table-cli-pedidos.component';
import { CliIncidenciasComponent } from './Bodies/cli-incidencias/cli-incidencias.component';
import { TableCliIncidenciasComponent } from './Componentes/table-cli-incidencias/table-cli-incidencias.component';
import { TableTecIncidenciasFinComponent } from './Componentes/table-tec-incidencias-fin/table-tec-incidencias-fin.component';
import { TableTecAlmacenComponent } from './Componentes/table-tec-almacen/table-tec-almacen.component';
import { TableTecIncidenciasPendComponent } from './Componentes/table-tec-incidencias-pend/table-tec-incidencias-pend.component';
import { LoginComponent } from './Bodies/login/login.component';
import { FormLoginComponent } from './Componentes/form-login/form-login.component';
import { ErrorComponent } from './Bodies/error/error.component';
import { ModalProfileComponent } from './Componentes/modal-profile/modal-profile.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      FooterComponent,
      SliderComponent,
      CardComponent,
      ProfileCardComponent,
      FormCliAltaPedidoComponent,
      FormCliIncidenciaComponent,
      FormModificarUsuarioComponent,
      FormModificarPasswordComponent,
      FormTecIncidenciaComponent,
      FormAdminIncidenciaComponent,
      FormAdminAltaUsuarioComponent,
      FormAdminImpresoraComponent,
      FormAdminModificarUsuarioComponent,
      CliHomeComponent,
      CliUsuarioComponent,
      TableCliEquiposComponent,
      CliPedidosComponent,
      TableCliPedidosComponent,
      CliIncidenciasComponent,
      TableCliIncidenciasComponent,
      TableTecIncidenciasFinComponent,
      TableTecAlmacenComponent,
      TableTecIncidenciasPendComponent,
      LoginComponent,
      FormLoginComponent,
      ErrorComponent,
      ModalProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

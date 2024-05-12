import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FormCliAltaPedidoComponent } from './form-cli-alta-pedido/form-cli-alta-pedido.component';
import { FormCliIncidenciaComponent } from './form-cli-incidencia/form-cli-incidencia.component';
import { FormModificarUsuarioComponent } from './form-modificar-usuario/form-modificar-usuario.component';
import { FormModificarPasswordComponent } from './form-modificar-password/form-modificar-password.component';
import { FormTecIncidenciaComponent } from './form-tec-incidencia/form-tec-incidencia.component';
import { FormAdminIncidenciaComponent } from './form-admin-incidencia/form-admin-incidencia.component';
import { FormAdminAltaUsuarioComponent } from './form-admin-alta-usuario/form-admin-alta-usuario.component';
import { FormAdminImpresoraComponent } from './form-admin-impresora/form-admin-impresora.component';
import { FormAdminModificarUsuarioComponent } from './form-admin-modificar-usuario/form-admin-modificar-usuario.component';

@NgModule({
  declarations: [	
    AppComponent,
      ComponenteUnoComponent,
      HeaderComponent,
      BodyComponent,
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
      FormAdminModificarUsuarioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

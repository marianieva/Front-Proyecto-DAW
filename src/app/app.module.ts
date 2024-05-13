import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteUnoComponent } from './Componentes/componente-uno/componente-uno.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { BodyComponent } from './Componentes/body/body.component';
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
import { AaPruebaBackComponent } from './aa-prueba-back/aa-prueba-back.component';

import { HttpClientModule } from "@angular/common/http";
import { PruebaService } from 'src/app/Services/prueba.service';

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
      FormAdminModificarUsuarioComponent,
      AaPruebaBackComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PruebaService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

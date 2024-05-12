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
      FormCliIncidenciaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

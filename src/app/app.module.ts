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

@NgModule({
  declarations: [	
    AppComponent,
      ComponenteUnoComponent,
      HeaderComponent,
      BodyComponent,
      FooterComponent,
      SliderComponent,
      CardComponent,
      ProfileCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

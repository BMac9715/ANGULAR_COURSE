import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Módulo Personalizado
//import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import LocalEsGT from '@angular/common/locales/es-GT';
import LocalFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocalEsGT);
registerLocaleData(LocalFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //PrimeNgModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-GT'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

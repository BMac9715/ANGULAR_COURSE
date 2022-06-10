import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCapitalsComponent } from './country-capitals/country-capitals.component';



@NgModule({
  declarations: [CountryCapitalsComponent],
  exports: [CountryCapitalsComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

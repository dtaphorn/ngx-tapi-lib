import { NgModule } from '@angular/core';
import { NgxTapiPipesComponent } from './ngx-tapi-pipes.component';
import { TapiCurrencyPipe } from './pipes/tapi-currency.pipe';



@NgModule({
  declarations: [
    NgxTapiPipesComponent,
    TapiCurrencyPipe
  ],
  imports: [
  ],
  exports: [
    NgxTapiPipesComponent,
    TapiCurrencyPipe
  ]
})
export class NgxTapiPipesModule { }

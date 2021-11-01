import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe }        from '@angular/common';

@Pipe({
  name: 'tapiCurrency'
})
export class TapiCurrencyPipe implements PipeTransform {
  currencyPipe = new CurrencyPipe('de');

  transform(value: any, code?: any, display?: string, digits?: string, local?: string): any {
    code = 'EUR';
    display = 'symbol';
    digits = '0.2-2';
    local = 'de';

    return this.currencyPipe.transform(value, code, display, digits, local);
  }
}

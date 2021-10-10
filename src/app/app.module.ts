import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { KarolineCurrencyComponent } from './karoline-currency/karoline-currency.component';
import { KarolineWalletComponent } from './karoline-wallet/karoline-wallet.component';
import { RouterModule } from '@angular/router';
import { KarolineWalletService } from './karoline-wallet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'currency', component: KarolineCurrencyComponent},
        {path: 'wallet', component: KarolineWalletComponent}
      ]
    ) 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    KarolineCurrencyComponent,
    KarolineWalletComponent
   ],
  bootstrap:    [ AppComponent ],
  providers: [ KarolineWalletService ]
})
export class AppModule { }

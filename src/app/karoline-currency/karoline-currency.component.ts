import { Component, OnInit } from '@angular/core';
import { KarolineWalletService } from '../karoline-wallet.service';

@Component({
  selector: 'app-karoline-currency',
  templateUrl: './karoline-currency.component.html',
  styleUrls: ['./karoline-currency.component.css']
})
export class KarolineCurrencyComponent implements OnInit {

  constructor(public wallet: KarolineWalletService) {
    
   }

  ngOnInit() {
  }

}
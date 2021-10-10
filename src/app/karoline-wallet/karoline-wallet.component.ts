import { Component, OnInit } from '@angular/core';
import { KarolineWalletService } from '../karoline-wallet.service';

@Component({
  selector: 'app-karoline-wallet',
  templateUrl: './karoline-wallet.component.html',
  styleUrls: ['./karoline-wallet.component.css']
})
export class KarolineWalletComponent implements OnInit {

  constructor(public wallet: KarolineWalletService) { }

  ngOnInit() {
  }

}
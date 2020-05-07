import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',

  template: `<p class="voiture">
               Je vends des {{ voiture }}
            </p>`,

  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor() { 
  }

  voiture = "Mercedes Benz"

  ngOnInit() {
  }

}

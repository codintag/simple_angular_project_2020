import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProduitService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute) { }

  title = "Liste de produits";
  filterText = ""
  produits: Product[];
  // = [
  //   { id: 1, name: "JavaScript", prix: 299, categoryId: 1, description: "Tout savoir sur JavaScript créé par Brendan eich", imageUrl: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
  //   { id: 2, name: "Angular8", prix: 199, categoryId: 2, description: "Tout savoir sur Angular powered by Google", imageUrl: "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  //   { id: 3, name: "Reactjs", prix: 199, categoryId: 3, description: "Tout savoir sur Angular powered by Google", imageUrl: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
  //   { id: 4, name: "PHP", prix: 199, categoryId: 4, description: "Tout savoir sur Angular powered by Google", imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
  //   { id: 5, name: "MySQL", prix: 199, categoryId: 5, description: "Tout savoir sur Angular powered by Google", imageUrl: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
  //   { id: 6, name: "Python", prix: 199, categoryId: 6, description: "Tout savoir sur Angular powered by Google", imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" }
  // ]

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.produitService.getProducts(params["categoryId"]).subscribe(data => {
            this.produits = data;
          });
    });

    
  }

  addToCart(product) {
    // alertify.success('Vous avez ajouté ' +'<strong>' + product.name + '</strong>' + ' au panier ');
    this.alertifyService.success('Vous avez ajouté ' + '<strong>' + product.name + '</strong>' + ' au panier ')
  }

}

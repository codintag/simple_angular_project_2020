import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';
import { ProduitService } from 'src/app/services/produit.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProduitService, AlertifyService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService: CategoryService, private produitService: ProduitService, private alertifyService: AlertifyService) { }

  model: Product = new Product();
  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  add(form: NgForm) {
    this.produitService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(data.name + " a été ajouté avec succés!")
    })
  }

}

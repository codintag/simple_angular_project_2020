import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProduitService } from 'src/app/services/produit.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProduitService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private productService: ProduitService, private alertifyService: AlertifyService) { }

  productAddForm: FormGroup;
  categories: Category[];
  product: Product = new Product();

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      prix: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.success(data.name + " a été ajouté avec succés!")
    })
  }

}

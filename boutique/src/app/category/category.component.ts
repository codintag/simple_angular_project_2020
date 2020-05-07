import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  title = "Les catégories"
  categories: Category[];
  path = "http://localhost:3000/categories"
  // = [
  //   { id: 1, name: "JavaScript" },
  //   { id: 2, name: "Angular 8" },
  //   { id: 3, name: "Reactjs" },
  //   { id: 4, name: "PHP" },
  //   { id: 5, name: "MySQL" },
  //   { id: 6, name: "Python" },
  // ]

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})

export class CategorylistComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;
  imageSelected: Boolean = false;
  nameSelected: Boolean = false;
  categoryMenu: Boolean = true;

  constructor(private categoryService: CategoryService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);  
  }

  hasCategories(): Boolean {
    if(this.categories)
      return true;
    else
      return false;
  }

  readyImg(): void {
    this.imageSelected = true;
  }

  readyName(event: KeyboardEvent): void {
    this.nameSelected = true;
  }

  isValid(): Boolean{
    if(!this.imageSelected || !this.nameSelected)
      return false;
    else
      return true;
  }

  iscategoryMenu(): void{
    this.categoryMenu = false
  }

  createCategoryMenu(): Boolean{
    return this.categoryMenu
  }

  isEven(category: Category): Boolean{
    return category.id%2 == 0;
  }

  isOdd(category: Category): Boolean{
    return category.id%2 == 1;
  }

  isPurple(category: Category): Boolean{
    return category.color == 'purple';
  }

  isGreen(category: Category): Boolean{
    return category.color == 'green';
  }

  isRed(category: Category): Boolean{
    return category.color == 'red';
  }

  isYellow(category: Category): Boolean{
    return category.color == 'yellow';
  }

  saveCategory(category: Category): void {
    this.selectedCategory = category;
  }
}

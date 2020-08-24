import { Injectable } from '@angular/core';
import { Category } from './category';
import { Categories } from './mock-category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of (Categories);
  }
}

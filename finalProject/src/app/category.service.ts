import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "https://localhost:44316/API/category/"

  constructor(public httpClient: HttpClient) { }

  GetCategories() {
    return this.httpClient.get<Category[]>(this.url + "GetCategories");
  }
  AddCategory(category: Category) {
    return this.httpClient.post<Category>(this.url + "AddCategory?", category);
  }
}

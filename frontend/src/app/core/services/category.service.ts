import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Category } from '../models/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(
    private apiService: ApiService
  ) { }

  query(): Observable<Category[]> {
    const params = {};

    return this.apiService.get(
      '/category',
      new HttpParams({ fromObject: params })
    );
  }

  get(slug: string): Observable<Category> {
    return this.apiService.get('/category/' + slug).pipe(map(data => data.category));
  }

  destroy(slug: string) {
    return this.apiService.delete('/category/' + slug);
  }

  save(category: Category): Observable<Category> {
    if (category.slug) {
      return this.apiService.put('/category/' + category.slug, { category: category }).pipe(map(data => data.category));

    } else {
      return this.apiService.post('/category/', { category: category }).pipe(map(data => data.category));
    }
  }
}

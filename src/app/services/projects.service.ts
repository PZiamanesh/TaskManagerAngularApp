import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getProjects(filterBy: string, filterValue: string): Observable<Project[]> {
    if (filterBy === '' && filterValue === '') {
      return this.httpClient.get<Project[]>("https://localhost:5001/api/projects");
    }
    return this.httpClient.get<Project[]>(`https://localhost:5001/api/projects?${filterBy}=${filterValue}`);
  }

  add(model: Project): Observable<Project> {
    return this.httpClient.post<Project>("https://localhost:5001/api/projects", model);
  }

  update(model: Project): Observable<Project> {
    return this.httpClient.put<Project>("https://localhost:5001/api/projects", model);
  }

  delete(id: number): Observable<number> {
    return this.httpClient.delete<number>(`https://localhost:5001/api/projects/${id}`);
  }
}

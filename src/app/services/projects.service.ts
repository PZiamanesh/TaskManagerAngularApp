import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getProjects(filterBy: string, filterValue: string): Observable<Project[]> {

    let token: string = sessionStorage['UserToken'];
    let bearer: string = `Bearer ${token}`

    let httpHeader = new HttpHeaders({
      Authorization: bearer
    });
    
    if (filterBy === '' && filterValue === '') {
      return this.httpClient.get<Project[]>("https://localhost:5001/api/projects", { headers: httpHeader });
    }
    return this.httpClient.get<Project[]>(`https://localhost:5001/api/projects?${filterBy}=${filterValue}`, { headers: httpHeader });
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

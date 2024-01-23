import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienLocationModel } from '../models/clien-location-model';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  constructor(private httpClient: HttpClient) { }

  getClientLocations() : Observable<ClienLocationModel[]> {
    return this.httpClient.get<ClienLocationModel[]>("https://localhost:5001/api/ClientLocations");
  }
}

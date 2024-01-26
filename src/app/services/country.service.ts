import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Country[] {

    let countries = [
      new Country(1, "Iran"),
      new Country(2, "USA"),
      new Country(3, "Russia"),
    ]
    return countries;
  }

}

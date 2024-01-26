import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpFrom: FormGroup | any = null;
  genders: string[] = ['male', 'female']
  countries!: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

    this.countries = this.countryService.getCountries();

    this.signUpFrom = new FormGroup({
      userCredential: new FormGroup({
        userName: new FormControl(null, [Validators.required]),
        email: new FormControl(null),
      }),
      gender: new FormControl(null),
      countryId: new FormControl(''),
      receiveNewsLetters: new FormControl(true),
    });
  }

}

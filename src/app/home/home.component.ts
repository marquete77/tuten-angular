import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {TEST_USER_EMAIL} from '../../shared/constants';
import {HomeService} from './home.service';
import {element} from 'protractor';
import {Router} from '@angular/router';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  public firstSearch: boolean = true;
  public bookings: Array<any> = [];
  public searchTerm: string = '';
  public currentDetail: any;

  constructor(
    private formBuilder: FormBuilder,
    private home: HomeService,
    private router: Router) {
    this.initForm();
  }

  ngOnInit() {

  }

  initForm() {
    this.form = this.formBuilder.group({
      email: new FormControl(TEST_USER_EMAIL, Validators.required),
      current: new FormControl(true)
    });
  }

  searchBookings() {
    this.home.getBookings(this.form.value.email, this.form.value.current)
      .subscribe((response: Array<any>) => {
        console.log(response);
        this.firstSearch = false;
        this.bookings = response;
      }, err => {
        console.log(err);
      });
  }

  setFilteredItems() {
    this.bookings = this.home.filterBookings(this.searchTerm);
    console.log(this.bookings);
  }


  priceFilter(minPrice:number, maxPrice:number) {
    this.bookings = this.bookings.filter(elementFil => {
      return elementFil.bookingPrice >= minPrice && elementFil.bookingPrice <= maxPrice
    })
    console.log(this.bookings);
  }


  logout() {
    localStorage.removeItem("KEY_CREDENTIALS");
    this.router.navigate(['/login'])
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_APP_NAME, KEY_USER_EMAIL, KEY_TOKEN, API_MAIN_URL, API_USER_URL, API_BOOKING_URL } from '../../shared/constants';

@Injectable()
export class HomeService {
  private apiToken: string;
  private adminEmail: string;
  private bookings: Array<any> = [];

  constructor(private http: HttpClient) {
    this.apiToken = localStorage.getItem(KEY_TOKEN);
    this.adminEmail = localStorage.getItem(KEY_USER_EMAIL);
  }

  public getBookings(email: string, isCurrent?: boolean) {
    let params = new HttpParams();
    params = params.append('current', `${isCurrent}`);

    let options = {
      headers: new HttpHeaders({
        'adminemail': this.adminEmail,
        'token': this.apiToken,
        'app': API_APP_NAME
      }),
      params: params
    };

    let cleanEmail = email.replace('@', '%40');

    return this.http.get(`${API_MAIN_URL}${API_USER_URL}/${cleanEmail}${API_BOOKING_URL}`, options)
      .pipe(
        map((response: Array<any>) => {
          this.bookings = response;
          return response;
        })
      );
  }

  public filterBookings(searchTerm) {
    console.log(this.bookings);
    return this.bookings.filter((booking) => {
      return booking.bookingId.toString().indexOf(searchTerm) > -1;
    });
  }
}
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { Answer } from './answers/Answer';
import { Util } from './util';
import { environment as ENV } from '../../environments/environment';


const httpOptions = {
    headers: new HttpHeaders(),
    params: new HttpParams(),
};
const apiUrl = ENV.BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
      private http: HttpClient,
      public util: Util,
  ) { }


    get(endpoint, parameter?:any): Observable<Answer> {


        let token = this.util.getPreference(this.util.constants.token);
        if (token) {
            httpOptions.headers.append('Authorization', 'Bearer ' + token);
        }
        const url = `${apiUrl}${endpoint}`;
        return this.http.get<Answer>(url, httpOptions).pipe(
            // tap(_ => console.log(`fetched product id=`)),
            catchError(this.handleError<Answer>(`getProduct id=`))
        );
    }

    post (endpoint, body): Observable<Answer> {
        // let token = this.util.getPreference(this.util.constants.token);
        // if (token) {
        //     httpOptions.headers.append('Authorization', 'Bearer ' + token);
        // }
        const url = `${apiUrl}${endpoint}`;
        return this.http.post<Answer>(url, body, httpOptions).pipe(
            // tap((product: Answer) => console.log(`added product w/ `)),
            catchError(this.handleError<Answer>('addProduct')),
        );
    }


    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

// src/app/services/quickbase.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuickbaseService {
  private baseUrl = environment.baseUrl;
  private realm = environment.realm; //bobfaulk.quickbase.com
  private appId = environment.appId;//TRM app
  private tableId = environment.queryTableId; //Employee table
  private apiKey = environment.apiKey;
  private QUICKBASE_URL = environment.QUICKBASE_URL;

  private errorMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');
  errorMessage$: Observable<string> = this.errorMessage.asObservable();

  
  constructor(private http: HttpClient) {}
  
  // authenticate(username: string, password: string) {
  //   const body = `<qdbapi><username>${username}</username><password>${password}</password></qdbapi>`;
  //   const headers = { 'Content-Type': 'application/json' };

  //   return this.http.post(this.QUICKBASE_URL, body, { headers, responseType: 'text' });
  // }
  

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'QB-Realm-Hostname': this.realm,
      'Authorization': `QB-USER-TOKEN ${this.apiKey}`,
      'Content-Type': 'application/json', 
    });
  }

  // getRecord(recordId: string): Observable<any> {
  //   const url = `${this.baseUrl}/${this.tableId}/${recordId}`;
  //   console.log('Request URL:', url);
  
  //   return this.http.get(url, { headers: this.getHeaders() });
  // }
  
  insertRecord(data: any) {
//      console.log('QuickbaseService.updateRecord recordId:', recordId);
      console.log('QuickbaseService.insertRecord data:', JSON.stringify(data, null, 2));
      
    const url = `${this.baseUrl}`;
    console.log('Request URL:', url);
    console.log('Request Payload:', data);

    return this.http.post(url, data, { headers: this.getHeaders() });
 }
 query(username: string): Observable<any> {
  console.log('Querying for username:', username); // Log the username
  console.log(username);
  const body = {
    from: this.tableId,
    select: [3],
    where: `{281.EX.'${username}'}`,
    options: {
      skip: 0,
      top: 0,
      compareWithAppLocalTime: false
    }
  };

  return this.http.post(this.QUICKBASE_URL, body, { headers: this.getHeaders() }).pipe(
    tap((response: any) => {
      const recordNumber = response.data[0]?.['3']; // Assuming the record number is in the '3' field of the first record in the data array
      if (recordNumber !== undefined) {
      console.log('Received record number:', recordNumber);
      this.errorMessage.next('');
    } else {
      console.error('Record number not found in the response:', response);
      this.errorMessage.next('Invalid email! Please re-enter and try again.');
    }
  }),
  catchError(error => {
    console.error('Error during Quickbase query:', error);
    this.errorMessage.next('Error querying Quickbase');
    return throwError(error); // Rethrow the error after logging
    })
  );
}
}

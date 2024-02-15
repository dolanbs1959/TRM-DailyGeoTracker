import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuickbaseService } from '../services/quickbase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   username: string = '';
   password: string = '';
   errorMessage: string = '';

  constructor(
    private router: Router,
    private quickbaseService: QuickbaseService,
    ) { }

  ngOnInit() {
    this.quickbaseService.errorMessage$.subscribe((errorMessage) => {
      this.errorMessage = errorMessage;
    });  
  }
  
  login() {
    console.log('Username:', this.username); // Log the username
    this.quickbaseService.query(this.username).subscribe(
      response => {
        console.log('API Response:', response); // Log the entire API response
        const recordNumber = response.data[0]?.['3']; // Extract the record number from the response
        console.log('Record Number:', recordNumber); // Log the record number
        console.log('Type of Record Number:', typeof recordNumber);
        if (recordNumber) {
          this.router.navigate(['/home', { recordNumber: JSON.stringify(recordNumber) }]);
        }
      },
      error => {
        console.error('API Error:', error); // Log any API errors
      }
    );  // this.quickbaseService.authenticate(this.username, this.password).subscribe((response: string) => {
    //   console.log(response);
    //     // Parse the XML response to check if the authentication was successful
    //     const parser = new DOMParser();
    //     const xmlDoc = parser.parseFromString(response, "text/xml");
    //     const errcode = xmlDoc.getElementsByTagName("errcode")[0].childNodes[0].nodeValue;
    //     if (errcode === "0") {
    //       // If the authentication was successful, navigate to the home page
    //    this.router.navigate(['/home']);
    //     } else {
    //       // Handle authentication failure
    //       console.error('Authentication failed');
    //     }
    //   },
    //   (error: any) => {
    //     // Handle request error
    //     console.error(error);
    //   }
    // );
    }
  }


// home.page.ts
import { Component, OnInit } from '@angular/core';
import { QuickbaseService } from '../services/quickbase.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  showError: boolean = false;
  selectedStop: string = '';
  fieldEmployee: string = '';
  fieldDate: string = '';
  fieldTime: string = '';
  fieldLatitude: string = '';
  fieldLongitude: string = '';
  recordNumber: number | null = null; 
  status: string = '';
  
  resetForm() {
 //  Resets the time & coordinates after each update.
    this.fieldLatitude = '';
    this.fieldLongitude = '';
  }

  toggleStatus() {
    if (this.status === '' || this.status === 'Onsite') {
      this.status = 'Enroute';
    } else {
      this.status = 'Onsite';
    }
  }
  constructor(private quickbaseService: QuickbaseService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Initialization code if needed
    const recordNumberString = this.route.snapshot.paramMap.get('recordNumber');
    if (recordNumberString) {
      const recordNumberObject = JSON.parse(recordNumberString);
      this.recordNumber = recordNumberObject.value;
      this.fieldEmployee = recordNumberObject.value.toString();}
  }
   // Function to get the user's current location
   getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Latitude:', position.coords.latitude);
          console.log('Longitude:', position.coords.longitude);
          
           // Get the current date and time
           const now = new Date();

           // Format the date as "YYYY-MM-DD"
           const formattedDate = `${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}-${now.getFullYear()}`;
 
            // Format the time in 12-hour format with AM/PM
            const hours = now.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = (hours % 12) || 12; // Convert 0 to 12 for 12-hour format
            const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${ampm}`;
            this.toggleStatus();
          // Update the fields with the obtained coordinates
          this.fieldLatitude = position.coords.latitude.toString();
          this.fieldLongitude = position.coords.longitude.toString();
          this.fieldDate = formattedDate;
          this.fieldTime = formattedTime;
        },
        (error) => {
          console.error('Geolocation Error:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  
  insertRecord() {
    console.log('fieldEmployee:', this.fieldEmployee);
    console.log('fieldStop:', this.selectedStop);
    console.log('fieldDate:', this.fieldDate);
    console.log('fieldTime:', this.fieldTime);
    console.log('FieldLatitude:', this.fieldLatitude);
    console.log('FieldLongitude:', this.fieldLongitude);

    // Assuming you want to pass recordId and updateData from the template
//    const recordId = this.fieldEmployee; // You can replace this with the actual recordId
if (this.fieldLatitude !== '' || this.fieldLongitude !== '' || this.status !== '') {
    const insertData = {
      to: environment.insertTableId,
      data: [
        {
        '72': { 'value': this.fieldEmployee }, //Exclude field 3 for record insert.
        '74': { 'value': this.fieldDate },
        '77': { 'value': this.fieldTime },
        '76': { 'value': this.fieldLatitude},
        '75': { 'value': this.fieldLongitude},
        '78': { 'value': this.selectedStop},
        '79': { 'value': this.status}
        }
          ],

        }

      this.quickbaseService.insertRecord(insertData)
      .subscribe(
    (response: any) => {
        console.log('API Response', response);
        this.resetForm(); // Reset the form here
      },
    (error: any) => {
        console.error('API Error', error);
      
      if (error instanceof HttpErrorResponse) {
        console.error('Status:', error.status);
        console.error('Error Message:', error.error);
      }
    }
  );
} else {
  console.error('Coordinates are blank. Please Get Current Location first and try again.');
  this.showError = true;
}

  }
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-list',
  templateUrl: './registered-list.component.html',
  styleUrls: ['./registered-list.component.scss'],
  providers: [ApiService]
})
export class RegisteredListComponent implements OnInit {
  name;
  bookingList: any[] = [];
  vResponse: any;
  constructor(private apiService: ApiService,private router: Router) { 
    this.GetBookingList();
  }

  ngOnInit(): void {
  }
  GetBookingList() {
    var _url = "Booking/BookingList";
    this.apiService.getall(_url).subscribe(
      (response) => {
        console.log("book list", response);

        this.vResponse = response;

        if(this.vResponse.status == "OK"){
          this.bookingList = this.vResponse.result;
          for(var i = 0; i < this.bookingList.length; i++){
            if(this.bookingList[i].amount >= 1000){
              this.bookingList[i].paymentStatus = "Paid";
            }
            else{
              this.bookingList[i].paymentStatus = "Pending";
            }
            this.bookingList[i].imgbase = this.GetImages(this.bookingList[i].imageUrl);
          }
        }
        else{
          alert('Please check your internet connection!!')
        }
      }
    );
  }
  SearchBookingList(event){
    var searchvalue = event.target.value;
    var _url = "Booking/BookingList?name="+searchvalue;
    this.apiService.getall(_url).subscribe(
      (response) => {
        console.log("book list", response);

        this.vResponse = response;

        if(this.vResponse.status == "OK"){
          this.bookingList = this.vResponse.result;
          for(var i = 0; i < this.bookingList.length; i++){
            if(this.bookingList[i].amount >= 1000){
              this.bookingList[i].paymentStatus = "Paid";
            }
            else{
              this.bookingList[i].paymentStatus = "Pending";
            }
            this.bookingList[i].imgbase = this.GetImages(this.bookingList[i].imageUrl);
          }
        }
        else{
          this.bookingList = [];
          alert(this.vResponse.message)
        }
      }
    );
  }
  SearchBookingListById(event){
    var searchvalue = event.target.value;
    var _url = "Booking/BookingList?idno="+searchvalue;
    this.apiService.getall(_url).subscribe(
      (response) => {
        console.log("book list", response);

        this.vResponse = response;

        if(this.vResponse.status == "OK"){
          this.bookingList = this.vResponse.result;
          for(var i = 0; i < this.bookingList.length; i++){
            if(this.bookingList[i].amount >= 1000){
              this.bookingList[i].paymentStatus = "Paid";
            }
            else{
              this.bookingList[i].paymentStatus = "Pending";
            }
            this.bookingList[i].imgbase = this.GetImages(this.bookingList[i].imageUrl);
          }
        }
        else{
          this.bookingList = [];
          alert(this.vResponse.message)
        }
      }
    );
  }
  SearchBookingListByMobNo(event){
    var searchvalue = event.target.value;
    var _url = "Booking/BookingList?mobileNo="+searchvalue;
    this.apiService.getall(_url).subscribe(
      (response) => {
        console.log("book list", response);

        this.vResponse = response;

        if(this.vResponse.status == "OK"){
          this.bookingList = this.vResponse.result;
          for(var i = 0; i < this.bookingList.length; i++){
            if(this.bookingList[i].amount >= 1000){
              this.bookingList[i].paymentStatus = "Paid";
            }
            else{
              this.bookingList[i].paymentStatus = "Pending";
            }
            this.bookingList[i].imgbase = this.GetImages(this.bookingList[i].imageUrl);
          }
        }
        else{
          this.bookingList = [];
          alert(this.vResponse.message)
        }
      }
    );
  }
  GetImages(imageUrl) {
    this.apiService.downloadFile(imageUrl).subscribe(response2 => {
      return response2.result;
    });
  }
  Update(event){
    // alert(event.fullName)
    if( event.paymentReference == null ||  event.paymentReference == "null"){
      event.paymentReference = "NA";
    }
    this.router.navigate(['/update-payment', event.fullName, event.amount, event.paymentReference, event.bookingCode]);
  }

}

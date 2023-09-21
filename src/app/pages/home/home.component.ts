import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {
images = [

    `./assets/img/baneer-1.jpg`,
    `./assets/img/baneer-2.jpg`,
    `./assets/img/baneer-3.jpg`,
    `./assets/img/baneer-4.jpg`
  ]
  bookingList: any[] = [];
  vResponse: any;
  constructor(private router: Router,private apiService: ApiService) { 
    this.GetBookingList();
  }

  ngOnInit(): void {
    setTimeout(() => {
      if(this.CheckList()){
        for(var i = 0; i < this.bookingList.length; i++){
          this.GetImages2(this.bookingList[i].banner); // Call your method here
        }
        
      }
      
    }, 60000); // 60000 milliseconds = 1 minute
  }
  CheckList(){
    if(this.bookingList.length > 0){
      return true;
    }
    else{
      false;
    }
  }
  GoToBooking(){
    this.router.navigate(["/booking"])
  }
  GetBookingList() {
    var _url = "Trending/TrendingList";
    this.apiService.getall(_url).subscribe(
      (response) => {
        console.log("book list", response);

        this.vResponse = response;

        if(this.vResponse.status == "OK"){
          this.bookingList = this.vResponse.result;
          for(var i = 0; i < this.bookingList.length; i++){
            // this.bookingList[i].paymentStatus = "Pending";
            this.bookingList[i].imgbase = this.GetImages(this.bookingList[i].banner);
          }
        }
        else{
          alert('Please check your internet connection!!')
        }
      }
    );
  }
  GetImages(imageUrl) {
    this.apiService.downloadFile(imageUrl).subscribe(response2 => {
      return response2.result;
    });
  }
  GetImages2(imageUrl) {
    this.apiService.downloadFile(imageUrl).subscribe(response2 => {
      // return response2.result;
      for(var i = 0; i < this.bookingList.length; i++){
        if(this.bookingList[i].banner == imageUrl){
          this.bookingList[i].imgbase = response2.result;
        }
      }
    });
  }

}

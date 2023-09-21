import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.scss'],
  providers: [ApiService]
})
export class TrendingListComponent implements OnInit {
  data : Date = new Date();
  title;
  vResponse: any;
  trendingList: any[] = [];
  constructor( private element : ElementRef,private apiService: ApiService, private router: Router) {
    this.GetTrendingList();
  }


  ngOnInit(): void {
  }
  GetTrendingList() {
    var _url = "Trending/TrendingList";
    this.apiService.getall(_url).subscribe(
      (response) => {
        this.vResponse = response;

        if(this.vResponse.status == "OK"){
          this.trendingList = this.vResponse.result;
          
        }
        else{
          alert(this.vResponse.message)
        }
      }
    );
  }
  SearchTrendingList(event){
    var searchvalue = event.target.value;
    var _url = "Trending/TrendingList?title="+searchvalue;
    this.apiService.getall(_url).subscribe(
      (response) => {
        this.vResponse = response;

        if(this.vResponse.status == "OK"){
          this.trendingList = this.vResponse.result;
          
        }
        else{
          this.trendingList = [];
          alert(this.vResponse.message)
        }
      }
    );
  }
  AddCreateNews(){
    this.router.navigate(['/create-trending']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
images = [

    `./assets/img/baneer-1.jpg`,
    `./assets/img/baneer-2.jpg`,
    `./assets/img/baneer-3.jpg`,
    `./assets/img/baneer-4.jpg`
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  GoToBooking(){
    this.router.navigate(["/booking"])
  }

}

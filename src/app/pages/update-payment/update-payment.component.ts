import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.scss'],
  providers:[ApiService]
})
export class UpdatePaymentComponent implements OnInit {
  public updateForm: FormGroup;
  usercode = "";
  bookingCode = "";
  constructor(private formBuilder: FormBuilder, private apiService: ApiService,private route: ActivatedRoute,private router: Router) {
    this.updateForm = this.formBuilder.group({
      updateForm_name: [, [Validators.required]],
      updateForm_amount:  [0, [Validators.required]],
      updateForm_referenceNo:  [, [Validators.required]],
    });

    var t_name = "";
    var t_amount = "";
    var t_referenceNo = "";

    this.route.params.subscribe((params) => {
      t_name = params.fullName; // Access the user's ID from the route parameter
      t_amount = params.amount; // Access the user's name from the route parameter
      t_referenceNo = params.paymentReference;
      this.bookingCode = params.bookingCode;
      
      // Now you have access to both id and name for further processing
    });
    this.updateForm.patchValue({
      updateForm_name: t_name,
      updateForm_amount: t_amount,
      updateForm_referenceNo: t_referenceNo,
    });

    this.usercode = localStorage.getItem('APPID')

    
   }

  ngOnInit(): void {
  }
  Update(){
    var bookingCode = this.bookingCode;
    var amount = this.updateForm.controls['updateForm_amount'].value;
    var referenceNo = this.updateForm.controls['updateForm_referenceNo'].value;

    var url = "Booking/UpdateBooking";
    
    var model = {
      BookingCode:bookingCode,
      Amount:amount,
      PaymentReference:  referenceNo
    }

    this.apiService.save(model, url).subscribe(
      (response)=>{
        if(response.status == "OK"){
          alert(response.message)
          // this.createdId = response.result.tokenNo;
          this.updateForm.reset();
          this.router.navigate(['/registered-list']);
          // this.showSuccessDiv = true;
        }
        else{
          alert(response.message);
          // this.showSuccessDiv = false;
        } 
      }
    );
  }

}

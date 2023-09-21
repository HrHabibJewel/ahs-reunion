import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers:[ApiService]
})
export class BookingComponent implements OnInit {
  focus;
  focus1; 
  focus2;
  email;
  villageName;
  presentAddress;
  photo;
  guest;
  amount;
  imageUrl: string | ArrayBuffer | null = "assets/img/default-avatar.png";
  ssc_batches:any[] = []; // Initialize an empty array
  minimumFee: number = 1000;
  totalFee: number = 0; 
  showSuccessDiv = false;
  createdId = "IdNo";

  // Form Group Declaration
  public bookingForm: FormGroup;
  fileList: any[] = [];
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    for (let i = 1989; i <= 2023; i++) {
      var batch = {
        id:i,
        name:i
      }
      this.ssc_batches.push(batch);
    }
    this.bookingForm = this.formBuilder.group({
      bookingForm_fullName: [, [Validators.required]],
      bookingForm_fathersName: [],
      bookingForm_mobileNo: [, [Validators.required]],
      bookingForm_email: [],
      bookingForm_sscBatch: [, [Validators.required]],
      bookingForm_villageName: [],
      bookingForm_presentAddress: [, [Validators.required]],
      bookingForm_guestNo: [, [Validators.required]],
      bookingForm_amount: [, [Validators.required]],
      bookingForm_file: [, [Validators.required]],
      fileSource: new FormControl(),
      imageSrc: new FormControl(),
      fileName: new FormControl
    });
   }
   onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      this.bookingForm.patchValue({
        fileSource: file,
        imageSrc: reader.result as string,
      });

      //this.fileList.push(this.applicationDoc.value);
    }
  }
  ngOnInit(): void {
  }
  OnChangeGuestNo(event: any){
    var guestNo = event.target.value;
    if(guestNo > 1){
      this.totalFee = this.minimumFee+(event.target.value-1)*300;
    }
    else if(guestNo == 1){
      this.totalFee = event.target.value*this.minimumFee;
    }
    else{
      alert('Guest No can not be negative or zero');
    }
    this.bookingForm.patchValue({
      bookingForm_amount: this.totalFee
    });
    
  }
  SavePayLater(){
    var fullName = this.bookingForm.controls['bookingForm_fullName'].value;
    var fathersName = this.bookingForm.controls['bookingForm_fathersName'].value;
    var mobileNo = this.bookingForm.controls['bookingForm_mobileNo'].value;
    var email = this.bookingForm.controls['bookingForm_email'].value;
    var sscBatch = this.bookingForm.controls['bookingForm_sscBatch'].value;
    var villageName = this.bookingForm.controls['bookingForm_villageName'].value;
    var presentAddress = this.bookingForm.controls['bookingForm_presentAddress'].value;
    var guestNo = this.bookingForm.controls['bookingForm_guestNo'].value;
    var amount = this.bookingForm.controls['bookingForm_amount'].value;

    const form = new FormData();
    
    form.append(
      'file',
      this.bookingForm.controls['fileSource'].value,
    );
    var url = "Booking/SaveBooking?fullName="+fullName+"&fathersName="+fathersName
    +"&mobileNo="+mobileNo+"&email="+email+"&sscBatch="+sscBatch+"&villageName="+villageName+"&presentAddress="+presentAddress+"&guestNo="+guestNo+"&amount="+amount;
    
    

    this.apiService.saveFile(form, url).subscribe(
      (response)=>{
        if(response.status == "OK"){
          this.SaveImages();
          this.createdId = response.result.tokenNo;
          this.bookingForm.reset();
          this.showSuccessDiv = true;
        }
        else{
          alert(response.message);
          this.showSuccessDiv = false;
        } 
      }
    );
  }
  SaveImages() {
    const form = new FormData();
    
    form.append(
      'file',
      this.bookingForm.controls['fileSource'].value,
    );

    this.apiService.saveFile(form, 'Booking/UploadFileToServer').subscribe();
  }

}

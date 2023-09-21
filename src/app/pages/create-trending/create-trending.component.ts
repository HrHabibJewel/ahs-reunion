import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-trending',
  templateUrl: './create-trending.component.html',
  styleUrls: ['./create-trending.component.scss'],
  providers:[ApiService]
})
export class CreateTrendingComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  focus2;
  email;
  villageName;
  presentAddress;
  photo;
  guest;
  amount;
  imageUrl: string | ArrayBuffer | null = "assets/img/35105620_8283688.jpg";
  ssc_batches:any[] = []; // Initialize an empty array
  public newsForm: FormGroup;
  usercode = "";

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    for (let i = 1989; i <= 2023; i++) {
      var batch = {
        id:i,
        name:i
      }
      this.ssc_batches.push(batch);
    }
    this.usercode = localStorage.getItem('APPID')

    this.newsForm = this.formBuilder.group({
      newsForm_title: [, [Validators.required]],
      newsForm_shortDescription:  [, [Validators.required]],
      newsForm_description:  [, [Validators.required]],
      newsForm_newsLink:  [, [Validators.required]],
      
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

      this.newsForm.patchValue({
        fileSource: file,
        imageSrc: reader.result as string,
      });

      //this.fileList.push(this.applicationDoc.value);
    }
  }
  SaveNews(){
    var title = this.newsForm.controls['newsForm_title'].value;
    var shortDescription = this.newsForm.controls['newsForm_shortDescription'].value;
    var description = this.newsForm.controls['newsForm_description'].value;
    var newsLink = this.newsForm.controls['newsForm_newsLink'].value;

    const form = new FormData();
    
    form.append(
      'file',
      this.newsForm.controls['fileSource'].value,
    );
    var url = "Trending/SaveNews?title="+title+"&shortDescription="+shortDescription
    +"&description="+description+"&newsLink="+newsLink+"&userCode="+this.usercode;
    
    

    this.apiService.saveFile(form, url).subscribe(
      (response)=>{
        if(response.status == "OK"){
          this.SaveImages();
          alert(response.message)
          // this.createdId = response.result.tokenNo;
          // this.bookingForm.reset();
          // this.showSuccessDiv = true;
        }
        else{
          alert(response.message);
          // this.showSuccessDiv = false;
        } 
      }
    );
  }
  SaveImages() {
    const form = new FormData();
    
    form.append(
      'file',
      this.newsForm.controls['fileSource'].value,
    );

    this.apiService.UploadBanner(form, 'Trending/UploadBanner').subscribe();
  }
  ngOnInit(): void {
  }

}

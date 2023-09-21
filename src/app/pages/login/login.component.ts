import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[ApiService]
})
export class LoginComponent implements OnInit, OnDestroy {
  data : Date = new Date();
  focus;
  focus1;

  // Form Group Declaration
  public loginForm: FormGroup;
  userCode = "";
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 

    this.userCode = localStorage.getItem('APPID');
    if(this.userCode != ""){
      this.router.navigate(['/trending-list']);
    }

      this.loginForm = this.formBuilder.group({
          loginForm_UserName: [, [Validators.required]],
          loginForm_Password: [, [Validators.required]]
        });

      
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  
  Login(){
    var userName = this.loginForm.controls['loginForm_UserName'].value;
    var password = this.loginForm.controls['loginForm_Password'].value;
   
    var url = "User/Login?userName="+userName+"&password="+password;
    
    this.apiService.login(url).subscribe(
      (response)=>{
        if(response.status == "OK"){
          alert(response.message);
          localStorage.setItem("APPID", response.result.userCode);
          this.router.navigate(['/trending-list']);
        }
        else{
            alert(response.message)
        }
      }
    );
  }

}

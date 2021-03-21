import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{HttpClient, HttpHeaders} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  readonly BaseURI="https://localhost:44316/api";

  formModel=this.fb.group({
    UserName:['',Validators.required],
    Email:['',Validators.email],
    Password:['',Validators.required],
    ConfirmPassword:['',Validators.required]
    
  });
  register(){
    var body={
      UserName:this.formModel.value.UserName,
      Email:this.formModel.value.Email,
      Password:this.formModel.value.Password,
      ConfirmPassword:this.formModel.value.ConfirmPassword,
    };
    return this.http.post(this.BaseURI+ '/auth/register',body);
  }
  login(formData){
    return this.http.post(this.BaseURI+'/auth/token',formData);
  }
  getUserProfile(){
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')});
    return this.http.get(this.BaseURI+'/userDetails',{headers:tokenHeader});

  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   userProfile;
  constructor(private router:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res=>{},
      err=>{console.log(err);},
    );
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

}

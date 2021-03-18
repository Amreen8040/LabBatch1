import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms';
import { AuthCComponent } from './auth-c/auth-c.component';
import { RegisterComponent } from './auth-c/register/register.component';
import { UserService } from '../shared/user.service';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [AuthCComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers:[UserService]

})
export class AuthModule { }

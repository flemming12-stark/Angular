import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userNamevalid = false;
  EmailValid = false;
  mailValid = "";
  profileForm = this.fb.group({
    Name: ['',Validators.required],
    Address: [''],
    Email: ['',Validators.required],
    userName: ['',Validators.required],
    Password: ['',Validators.required],
    Gender: ['']
  });
  constructor(private fb: FormBuilder,private httpcall:HttpService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.profileForm.value.Email.includes('@') && !this.profileForm.value.Email.includes('.com')) {
      this.mailValid = "Enter Valid Email";
      this.EmailValid = true;
      return;
    }
    this.userNamevalid = false;
    this.EmailValid = false;
    console.warn(this.profileForm.value);
    let param = "Name=" + this.profileForm.value.Name+"&UserName=" + this.profileForm.value.userName+"&Password=" + this.profileForm.value.Password+"&Gender=" + this.profileForm.value.Gender+"&Address=" + this.profileForm.value.Address+"&Email=" + this.profileForm.value.Email;
    this.httpcall.apicall('create', param).subscribe((data)=>{
      if(data.ERRCODE == '1') {
        if(data.Message == "Duplicate UserName") {
          this.userNamevalid = true;
        }
        if(data.Message == "Duplicate Email") {
          this.mailValid = "Email already used";
          this.EmailValid = true;
        }
      } else {
        this.router.navigate(["/Home"]);
      }
    });
  }

}

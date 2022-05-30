import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  @ViewChild('userName') userName!: ElementRef
  @ViewChild('password') password!: ElementRef
  visiblePassword: boolean = false;
  neededPattern: string = "[a-z0-9]*";
  neededPassPattern: string = "[a-zA-Z0-9._%+-]*";

  myForm: FormGroup = this.fb.group({
    userName: [this.userName, [Validators.required, Validators.pattern(this.neededPattern)]],
    password: [this.password, [Validators.required, Validators.pattern(this.neededPassPattern), Validators.minLength(8) ]]
  });
  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ProfilesService
  ) { }

  ngOnInit(): void {
  }

  login(){
    if (this.myForm.valid){
      this.service.login(this.myForm.value).subscribe(resp => {
        localStorage.setItem("token", JSON.stringify(resp))
      })
      this.router.navigateByUrl('profiles/admin');
    } else console.log('form invalido')
  }

  watch(){
    if (this.visiblePassword === false){
      this.visiblePassword = true;
    } else this.visiblePassword = false
  }


  
}

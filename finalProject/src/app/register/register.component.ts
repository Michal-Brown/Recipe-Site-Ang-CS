import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  user: User = new User(null, null, null, null, null);

  constructor(public userServ: UserService, public routers: Router,public activatedRoute:  ActivatedRoute) { }

  form: FormGroup = new FormGroup({
    address: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.email])),
    password: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required)
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(succ=>{
      this.user.Name=succ['Name'];
    },error=>{
      console.log("ERROR "+error.status);
    })
  }

  addUser() {
    this.userServ.Register(this.user).subscribe(succes => {
      alert("user added succesfully");
      this.routers.navigate(['AllRecipes']);
    }, error => {
      if (error.status == 409) {
        alert("User already exists!");
        this.routers.navigate(['AllRecipes']);
      }
      else alert("ERROR " + error.status)
    })
  }
}

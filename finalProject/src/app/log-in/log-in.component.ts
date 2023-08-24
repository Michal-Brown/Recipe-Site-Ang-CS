import { Component, OnInit } from '@angular/core';
import { smallUser } from 'src/models/smallUser';
import { User } from 'src/models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  smllUsr: smallUser;
  u: string;
  p: string;

  form:FormGroup=new FormGroup({
    name:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  });

  constructor(public userService: UserService, public routers: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.smllUsr = new smallUser(this.p, this.u);
    console.log(this.smllUsr);
    this.userService.Login(this.smllUsr).subscribe(succ => {
      console.log("Login successfully");
      this.routers.navigate(['AllRecipes']);
      //sessionStorage.setItem(this.smllUsr.ID,this.smllUsr.Name);
    }, error => {
      if (error.status == 409)
        alert("ircorrect password, enter again.");
      else if (error.status == 404) {
        alert("user not found");
        this.routers.navigate(['Register',this.smllUsr.Name]);
      }
      else console.log("ERROR " + error.status);
    });
  }
}
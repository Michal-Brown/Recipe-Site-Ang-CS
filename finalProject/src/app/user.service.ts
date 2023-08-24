import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from 'src/models/user';
import { smallUser } from 'src/models/smallUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="https://localhost:44316/API/user/";
  
  constructor(public httpClient:HttpClient) { }

  public Login(user:smallUser){//unclear
    return this.httpClient.post<User>("https://localhost:44316/API/user/Login?password="+user.ID+"&name="+user.Name,user);
  }
  Register( user:User){
    return this.httpClient.post<User>("https://localhost:44316/API/user/Register?user="+user,user);
  }
}

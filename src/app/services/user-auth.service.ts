import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  [x: string]: any;
private isUsweLOggedSubject:BehaviorSubject<boolean>
  constructor() {
    this.isUsweLOggedSubject=new BehaviorSubject<boolean>(this.userState)
   }
login(email:string,password:string){
  let userToken='66544321';
  localStorage.setItem("token",userToken);
this.isUsweLOggedSubject.next(true)
}
logOut(){
  localStorage.removeItem("token")
  this.isUsweLOggedSubject.next(false)

}
get userState(): boolean{
  return(localStorage.getItem('token')?true:false)
}


}

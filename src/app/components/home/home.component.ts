import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeAdsService } from 'src/app/services/home-ads.service';
import { ItiInfo } from "../../models/iti-info";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
// name:string="ahmed magdy"
iti:ItiInfo = {trackName:"welcome ahmed", trackLogo:"https://sbr-technologies.com/wp-content/uploads/2021/07/Mern-Stack-Developer.png", itiBranshes:["smart","alex"]}

// day2
// day 6
// subscription!:Subscription;
subscription:Subscription[]=[];

constructor(private homeAds:HomeAdsService){

}

  ngOnInit(): void {
   //ass a calback
  //  let observer={
  // next:(data:string) => {
  //       console.log(data);

  //     },
  //     error:(err:string) => {
  //       console.log(err);
  //     },
  //          complete:() => {
  //         console.log("Ads Finished");

  //       }

  //  }
  //  this.homeAds.getSquenceAds(2).subscribe(observer);
  let ads=  this.homeAds.getSquenceAds(2).subscribe({

  next:(data:string) => {
        console.log(data);

      },
      error:(err:string) => {
        console.log(err);
      },
           complete:() => {
          console.log("Ads Finished");

        }

   }
   );
   this.subscription.push(ads)
  }
  ngOnDestroy(): void {
    for(let sub of this.subscription)
sub.unsubscribe();
  }

showImg:boolean=true;
showName:boolean=false;
toggleImg(){
this.showImg=!this.showImg;
this.showName=!this.showName;

}
yourValue:string=""

}

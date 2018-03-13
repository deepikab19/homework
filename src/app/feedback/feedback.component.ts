import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { UserTable } from '../UserTable';
import { TrainingProgram } from '../TrainingProgram';
import { isDate } from 'util';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  users: UserTable[];
  username: string;
  msg = "";
  unamePattern = "^[a-z|A-Z]$"; 
  constructor(private _feedservice: FeedService) {
    this.train = new TrainingProgram();
  }
  getProducts() {
    this._feedservice.getUsers()
      .subscribe(
        res => this.users = res,
    );
  }
  ngOnInit() {
    this.getProducts();
  }

  selectName() {
    this.train.Trainer = this.username;

  }

  // date1:string;
  date2: string;
  flag: boolean;
  check: any;
  public train: TrainingProgram;
  flag1: boolean;


  public SubmitForm(pname: string, date: Date, venue: string) {
    this.check = ($("#Id").val());
    this.flag = /^[a-zA-Z]+$/.test(pname);
    this.flag1 = /^[a-zA-Z]+$/.test(venue);

    

    var date1 = new Date(date);
    
    this.date2 = date1.toString();
    if (pname == "") {
      this.msg = "please enter the program name";
      return;
    }
    if (this.date2 == "Invalid Date")
    // if(this.flag==false)
    {
      // debugger;
      this.msg = "please enter the date"
      return;
    }
    if (venue == "") {
      this.msg = "please enter the venue";
      return;
    }
    // this.flag=isDate(date1);
    // debugger;

    if (this.check == null) {
      // debugger;
      this.msg = "please enter the Trainer name";
      return;
    }
    if (pname.length >= 10 || venue.length >= 10) {
      this.msg = "less than 10 characters";
      return;
    }
    if(this.flag==false)
    {
      debugger;
      this.msg="the program name should be a string with alpahabets";
      return;
    }
    if(this.flag1==false)
    {
      debugger;
      this.msg="the venue should be a string with alpahabets";
      return;
    }
    this.train.TrainingName = pname;
    this.train.Date = date;
    this.train.Venue = venue;
    // this.date1=date.toDateString();

    // if(this.date1=="")
    // {
    //   this.msg="please enter the date"
    //   return;
    // }
    this._feedservice.InsertUsers(this.train).subscribe()

    window.location.reload();
  }

}

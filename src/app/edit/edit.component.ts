import { Component, OnInit } from '@angular/core';
import { TrainingProgram } from '../TrainingProgram';
import { FeedService } from '../feed.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _feedservice: FeedService) {
    this.train = new Array<TrainingProgram>();
   }

  ngOnInit() {
  }
  train :TrainingProgram[];
  public getTraining()
  {
    this._feedservice.getTraining().subscribe(
      res=> this.train = res,
    );
  }
    
  
  trainingId:number;
  public deleteUsers(id)
  {
    this.trainingId=id;
    this._feedservice.deleteUsers(this.trainingId).subscribe()
    window.location.reload();
    {

    }
  }
}

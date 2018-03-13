import { Injectable } from '@angular/core';
import {UserTable} from './UserTable';
import {TrainingProgram} from './TrainingProgram';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http, Response, Headers, RequestOptions, RequestMethod, } from '@angular/http';
@Injectable()
export class FeedService {

  constructor(public _http: Http) { }
  public productUrl = 'http://localhost:4072/api/FeedBack';
  getUsers(){
    return this._http.get(this.productUrl)
            .map(res =>
              <UserTable[]>res.json() )
            .catch(this.handleError);
    }
    getTraining(){
      return this._http.get(this.productUrl)
      .map(res =>
      <TrainingProgram[]>res.json())
      .catch(this.handleError);
    }
    deleteUsers(id:number)
    {
      return this._http.delete('http://localhost:4072/api/FeedBack/'+id)
         .catch(this.handleError);
    }
    InsertUsers(train:TrainingProgram) 
    {
      // let body = JSON.stringify(product);
      return this._http.post(this.productUrl,train)
      .catch(this.handleError);
    }
    private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}

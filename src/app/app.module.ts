import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FeedService} from './feed.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule } from '@angular/http';

    import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {FormsModule} from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { EditComponent } from './edit/edit.component'


@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ExampleComponent,
    EditComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    FormsModule
  
  ],
  providers: [FeedService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

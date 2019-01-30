import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Events} from '../event/event.model';
import {EventService} from '../event/event.service';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  myForm:FormGroup;
  orgenizerid:number;

  constructor(private formBuilder:FormBuilder,private eventService:EventService,private auth:AuthenticationService) { }
  ngOnInit() {
    this.myForm= this.formBuilder.group({
      event_name:['',Validators.required],
      city:['',Validators.required],
      description:['',Validators.required],
      time:['',Validators.required],
      date:['',Validators.required],
      capacity:['',Validators.required]
    });
    this.orgenizerid = this.auth.getUserId();
  }
    onSubmit(){
    this.eventService.addEvent(this.orgenizerid,this.myForm.value).subscribe(res =>{
      if (res!==null && res !==undefined){
        console.log(res);
      }
    },(error) =>console.log(error),() =>{});
  }
}


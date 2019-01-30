import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../event/event.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {Events} from '../event/event.model';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event_id: number;
   myForm: FormGroup;
   event: Events
  constructor(private formBuilder:FormBuilder,private eventService:EventService,private route: ActivatedRoute) { }
  ngOnInit() {
      this.route.params.subscribe((value: any) =>{
      this.event_id = value.event_id;
    });
    this.eventService.getEvent(this.event_id).subscribe(value => {
      this.event = value;
      this.myForm.patchValue(this.event as any);
    });
    this.myForm= this.formBuilder.group({
      event_name:['',Validators.required],
      city:['',Validators.required],
      description:['',Validators.required],
      time:['',Validators.required],
      date:['',Validators.required],
      capacity:['',Validators.required]
    });
  }
  onSubmit(){
    this.eventService.ubdateEvent(this.event_id,this.myForm).subscribe(res =>{
      if (res!==null && res !==undefined){
        console.log(res);
      }
    },(error) =>console.log(error),() =>{});

  }
  deleteEvent(){
    this.eventService.deleteEvent(this.event_id).subscribe(res =>{
      if (res!==null && res !==undefined){
        console.log(res);
      }
    },(error) =>console.log(error),() =>{})
    alert()
  }
}

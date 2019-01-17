import { Component, OnInit } from '@angular/core';
import {EventService} from '../event/event.service';
import {ActivatedRoute} from '@angular/router';
import {Events} from '../event/event.model';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  event$: Events[];
  event_id: number;
  orgnizerid:number;
  constructor(private eventService:EventService,private route:ActivatedRoute ,private  auth:AuthenticationService) { }

  ngOnInit() {
    this.orgnizerid = this.auth.getUserId();
    this.getMyEvents();
  }

   getMyEvents(){
     this.eventService.getMyEvents(this.orgnizerid).subscribe(
       eventData => {
         this.event$ = eventData;
       },
       err => console.log(err),
       () => console.log('Getting my Events complete...')
     );
   }
    getEvent(event:Events){
    this.eventService.getEvent(event.event_id);

  }

}

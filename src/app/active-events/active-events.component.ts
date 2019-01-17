import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event/event.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {Events} from '../event/event.model';

@Component({
  selector: 'app-active-events',
  templateUrl: './active-events.component.html',
  styleUrls: ['./active-events.component.css']
})
export class ActiveEventsComponent implements OnInit {
  event$: Events[];
  currentEvent: Event;
  user_id:number;
  constructor(private route: ActivatedRoute, private eventService: EventService,private auth:AuthenticationService) { }

  ngOnInit() {
    this.user_id=this.auth.getUserId();
    this.activeEvents();
  }

  activeEvents() {
    this.eventService.activeEvents().subscribe(
      eventData => {
        this.event$ = eventData;
      },
      err => console.log(err),
      () => console.log('Getting Active Events complete...')
    );

  }
  getEvent(event:Events){
    this.eventService.getEvent(event.event_id);
  }
}

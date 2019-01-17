import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from './event.service';
import {Events} from './event.model';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'})
export class EventComponent implements OnInit {
  event$: Events[];
  currentEvent: Event;

  constructor(private route: ActivatedRoute, private eventService: EventService,private auth:AuthenticationService) { }

  ngOnInit() {
   this.getEvents();
  }
  getEvents() {
    this.eventService.getEvents().subscribe(
      eventData => {
        this.event$ = eventData;
      },
      err => console.log(err),
      () => console.log('Getting events complete...')
    );

  }
  getEvent(event:Events){
    this.eventService.getEvent(event.event_id);

  }
}
